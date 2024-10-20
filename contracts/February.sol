// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract February is ERC721 {
    constructor() ERC721("February", "FEB") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}

//0xA1B2c3d3952b5b60C1d4f2389320d1A2c23a0b18