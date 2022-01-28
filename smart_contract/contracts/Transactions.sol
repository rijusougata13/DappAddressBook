// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event SaveData(
        address from,
        string name,
        string email,
        string ethAddress,
        uint256 timestamp
    );

    struct DataStruct {
        address from;
        string name;
        string email;
        string ethAddress;
        uint256 timestamp;
    }

    DataStruct[] allData;

    function addToBlockChain(
        string memory name,
        string memory email,
        string memory ethAddress
    ) public {
        transactionCount += 1;
        allData.push(
            DataStruct(msg.sender, name, email, ethAddress, block.timestamp)
        );

        emit SaveData(msg.sender, name, email, ethAddress, block.timestamp);
    }

    function getAllData() public view returns (DataStruct[] memory) {
        return allData;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    function deleteData() public {
        delete allData;
    }
}
