// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@wandevs/message/contracts/examples/CCPoolV2.sol";

contract CCTokenSwapper is CCPoolV2 {
    constructor(
        address _wmbGateway,
        address _poolToken
    ) CCPoolV2(msg.sender, _wmbGateway, _poolToken) {}
}
