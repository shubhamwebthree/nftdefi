const { expect } = require("chai");
const { ethers } = require("hardhat");
// const AddressZero = "0x0000000000000000000000000000000000000000";

describe("February", function () {
    let February;
    let owner;
    let addr1;

    beforeEach(async function () {
        February = await ethers.getContractFactory("February");
        [owner, addr1] = await ethers.getSigners();
        February = await February.deploy();
    });

    describe("Deployment", function () {
        it("Should set the correct name and symbol", async function () {
            expect(await February.name()).to.equal("February");
            expect(await February.symbol()).to.equal("FEB");
        });
    });

    describe("Minting", function () {
        it("Should mint a token to the specified address", async function () {
            const tokenId = 1;
            await February.safeMint(addr1.address, tokenId);
            expect(await February.ownerOf(tokenId)).to.equal(addr1.address);
        });

        it("Should emit a Transfer event on minting", async function () {
            const tokenId = 2;
            await expect(February.safeMint(addr1.address, tokenId))
                .to.emit(February, "Transfer")
                .withArgs(AddressZero, addr1.address, tokenId);
        });

        it("Should not allow minting to the zero address", async function () {
            const tokenId = 3;
            await expect(February.safeMint(AddressZero, tokenId))
                .to.be.reverted; // More general revert check
        });
    });
});
