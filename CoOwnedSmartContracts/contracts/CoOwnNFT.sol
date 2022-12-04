// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Interfaces/IVaultfactory.sol";
import "./Interfaces/Ipush.sol";
import "./Interfaces/IVault.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


interface IPUSHCommInterface1 {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}

contract CoOwnNFT is ERC721URIStorageUpgradeable, Ownable, ReentrancyGuard{
    address private vaultFactory;

    mapping(address => ListedProperties) listedProperties;

    uint public count;

    struct ListedProperties{
        uint[] tokenIds;
    }

    struct AddedProperties{
        uint propertyNo;
        uint totalFractions;
        address lister;
        uint pricePerFraction;
        uint fractionsLeft;
        bool propertySold;
    }

    struct userOwnership {
        uint[] allProperties;
        mapping(uint=>uint) fractionsInProperty;
    }

    mapping(uint=>AddedProperties) public Properties;
    mapping(address=>userOwnership)  totalPropertiesOwn; 
    mapping(uint=>address) private vaultAddress;

    function sendinNotification(address _to, string memory _message) public {
        IPUSHCommInterface1(0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa)
            .sendNotification(
                0x8008985282aCa5835F09c3ffE09C9B380b2cEFd0,
                _to,
                bytes(string(abi.encodePacked(_message)))
            );
    }

    function initialize(
        string memory _name,
        string memory _symbol,
        address _vaultfactory
    ) external initializer {
        require(_vaultfactory != address(0), "ZA"); //Zero Address
        __ERC721_init_unchained(_name, _symbol);
        vaultFactory = _vaultfactory;
        count =1;
    }

    function safeMint(
        string memory name,
        string memory symbol,
        string memory uri,
        uint256 _tokenId,
        uint256 _fractionSupply
    ) internal {
        address vault = IVaultfactory(vaultFactory).createVault(
            name,
            symbol,
            _fractionSupply,
            address(this),
            _tokenId
        );
        _safeMint(vault, _tokenId);
        vaultAddress[_tokenId] = vault;
        _setTokenURI(_tokenId, uri);
    }

    function addProperty(
        string memory name,
        string memory symbol,
        string memory uri,
        uint256 _fractionSupply,
        uint _pricePerFraction
    ) external nonReentrant{
        require(_fractionSupply > 1, "IA"); //Invalid Amount
        safeMint(name, symbol, uri, count, _fractionSupply);
        Properties[count].propertyNo = count;
        Properties[count].totalFractions = _fractionSupply;
        Properties[count].fractionsLeft = _fractionSupply;
        Properties[count].lister = msg.sender;
        Properties[count].pricePerFraction = _pricePerFraction*10**16;
        listedProperties[msg.sender].tokenIds.push(count);
        count++;
        // listedProperties[msg.sender][count] = count; 
    }

    function burn(uint256 _tokenId) external onlyOwner {
        require(_exists(_tokenId));
        _burn(_tokenId);
    }


    function buyFraction(uint _tokenId, uint _fractions) external payable nonReentrant returns(bool, bytes memory){
        _exists(_tokenId);
        AddedProperties storage addedProperties = Properties[_tokenId];
        require(msg.value>=_fractions*addedProperties.pricePerFraction,"Price exceeds amount.");
        IERC20(vaultAddress[_tokenId]).transfer(msg.sender, _fractions);
        uint fee = msg.value/100;
        uint amount = msg.value-fee;
        (bool sent, bytes memory data) = addedProperties.lister.call{value: amount}("");
        addedProperties.fractionsLeft -= _fractions;
        totalPropertiesOwn[msg.sender].allProperties.push(_tokenId);
        totalPropertiesOwn[msg.sender].fractionsInProperty[_tokenId]= _fractions;
        require(sent);
        return (sent,data);

    }

    function totalPropertiesOwned(address _address) public view returns(uint[] memory){
        return totalPropertiesOwn[_address].allProperties;
    }

    function totalPropertiesListed(address _address) public view returns(uint[] memory){
        return listedProperties[_address].tokenIds;
    }

    function fractionsOwnedInProperty(uint _tokenId, address _address) public view returns(uint) {
        return totalPropertiesOwn[_address].fractionsInProperty[_tokenId];
    }

    function transferFractionsInBatch(uint _tokenId, address[] memory _addresses, uint[] memory _fractions) external {
        _exists(_tokenId);
        AddedProperties storage addedProperties = Properties[_tokenId];
        require(msg.sender==addedProperties.lister,"Caller is not the lister.");
        uint addressLength = _addresses.length;
        uint fractionLength = _fractions.length;
        require(addressLength==fractionLength,"Addresses and fractions not proportionate.");
        for(uint i;i<addressLength;i++){
        IERC20(vaultAddress[_tokenId]).transfer(msg.sender, _fractions[i]);
        addedProperties.fractionsLeft -= _fractions[i];
        totalPropertiesOwn[_addresses[i]].allProperties.push(_tokenId);
        totalPropertiesOwn[_addresses[i]].fractionsInProperty[_tokenId]= _fractions[i];
        }

    }



    // function rentCoowned() external public {

    // }



    function _msgSender()
        internal
        view
        override(ContextUpgradeable, Context)
        returns (address)
    {
        return msg.sender;
    }

    function _msgData()
        internal
        view
        override(ContextUpgradeable, Context)
        returns (bytes calldata)
    {
        return msg.data;
    }


}
