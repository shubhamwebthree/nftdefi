const { ethers } = require("hardhat");

async function main() {
    // Get the ContractFactory for MyCollectible
    const February = await ethers.getContractFactory("February");
    
    // Deploy the contract
    const february = await February.deploy();
    
    // Log the address of the deployed contract
    console.log("January deployed to:", february);
}

// Execute the main function
main().catch((error) => {
    console.error("Error in deployment:", error);
    process.exitCode = 1;
});
