const { ethers } = require("hardhat");

async function main() {
    // Get the ContractFactory for MyCollectible
    const January = await ethers.getContractFactory("January");
    
    // Deploy the contract
    const january = await January.deploy();
    
    // Log the address of the deployed contract
    console.log("January deployed to:", january);
}

// Execute the main function
main().catch((error) => {
    console.error("Error in deployment:", error);
    process.exitCode = 1;
});
