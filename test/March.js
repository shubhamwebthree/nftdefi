const { expect } = require("chai");
const { ethers } = require("hardhat");
// const AddressZero = "0x0000000000000000000000000000000000000000";

describe("March", function () {
    let March;
    let owner;
    let addr1;

    beforeEach(async function () {
        March = await ethers.getContractFactory("March");
        [owner, addr1] = await ethers.getSigners();
        march = await March.deploy();
    });

    describe("Deployment", function () {
        it("Should set the correct name and symbol", async function () {
            expect(await March.name()).to.equal("March");
            expect(await March.symbol()).to.equal("MAR");
        });
    });

    describe("Minting", function () {
        it("Should mint a token to the specified address", async function () {
            const tokenId = 1;
            await March.safeMint(addr1.address, tokenId);
            expect(await March.ownerOf(tokenId)).to.equal(addr1.address);
        });

        it("Should emit a Transfer event on minting", async function () {
            const tokenId = 2;
            await expect(March.safeMint(addr1.address, tokenId))
                .to.emit(March, "Transfer")
                .withArgs(AddressZero, addr1.address, tokenId);
        });

        it("Should not allow minting to the zero address", async function () {
            const tokenId = 3;
            await expect(March.safeMint(AddressZero, tokenId))
                .to.be.reverted; // More general revert check
        });
    });
});
