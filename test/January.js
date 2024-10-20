const { expect } = require("chai");
const { ethers } = require("hardhat");
// const AddressZero = "0x0000000000000000000000000000000000000000";

describe("January", function () {
    let January;
    let owner;
    let addr1;

    beforeEach(async function () {
        January = await ethers.getContractFactory("January");
        [owner, addr1] = await ethers.getSigners();
        January = await January.deploy();
    });

    describe("Deployment", function () {
        it("Should set the correct name and symbol", async function () {
            expect(await January.name()).to.equal("January");
            expect(await January.symbol()).to.equal("JAN");
        });
    });

    describe("Minting", function () {
        it("Should mint a token to the specified address", async function () {
            const tokenId = 1;
            await January.safeMint(addr1.address, tokenId);
            expect(await January.ownerOf(tokenId)).to.equal(addr1.address);
        });

        it("Should emit a Transfer event on minting", async function () {
            const tokenId = 2;
            await expect(January.safeMint(addr1.address, tokenId))
                .to.emit(January, "Transfer")
                .withArgs(AddressZero, addr1.address, tokenId);
        });

        it("Should not allow minting to the zero address", async function () {
            const tokenId = 3;
            await expect(January.safeMint(AddressZero, tokenId))
                .to.be.reverted; // More general revert check
        });
    });
});
