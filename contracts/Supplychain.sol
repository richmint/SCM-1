// SPDX-License-Identifier: UNLICENSED
import "./Roles/Warehouse.sol";
import "./Roles/Factory.sol";
import "./Roles/ISO.sol";
import "./Roles/Distributor.sol";
import "./Roles/Retailer.sol";
import "./Roles/Customer.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

pragma solidity ^0.8.4;
contract Supplychain is Warehouse, Factory, ISO, Distributor, Retailer, Customer{
    using Counters for Counters.Counter;

    Counters.Counter public itemCounter;
    Counters.Counter public productCode;
    // constructor() Warehouse() Factory() ISO() Distributor() Retailer() Customer(){
        
    // }

    enum State{
        warehouseReceiveRawMaterial,
        factoryBuyRawMaterial,
        productIsReady,
        testingAgencyTestTheProduct,
        testingAgencyPublishResult,
        distributorBuyTheProduct,
        distributorProcessAndPackageTheProduct,
        retailerBuyTheProduct,
        retailerProcessAndPackageTheProduct,
        customerBuyTheProduct
    }  

    State constant defaultState = State.warehouseReceiveRawMaterial;

    struct Item{

        uint itemCounter;               // Counter for food items
        address entityID;               // Metamask-Ethereum address of the current owner (Changes as the product moves through different stages)
        State itemState;                // Product State as represented in the enum above

        string rawMaterialURI;          //  The URI should point to a JSON file that conforms to the Raw Material JSON Schema.
        
        string productAbout;
        uint productQuantity;
        uint productPrice;

        uint approvingState;            // default-0 , 1-(under testing), 2-(tested positively), 3-(tesed negitively)
        
        uint distributorSlice;
        uint retailerSlice;
        
        address warehouseID;
        address factoryID;
        address TestingAgencyID;        
        address distributorID;          // Metamask-Ethereum address of the Distributor
        address retailerID;             // Metamask-Ethereum address of the Retailer
        address consumerID;             // Metamask-Ethereum address of the Consumer 
    }
    struct Txblocks {
        uint FTD; // blockfarmerToDistributor
        uint DTR; // blockDistributorToRetailer
        uint RTC; // blockRetailerToConsumer
    }

    mapping (uint => Item) items;
    mapping (uint => Txblocks) itemsHistory;
}