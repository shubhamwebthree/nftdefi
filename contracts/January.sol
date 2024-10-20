// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract January is ERC721 {
    constructor() ERC721("January", "JAN") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}

//0x29046880efEC122573255CC6AACb7F486D33B89D