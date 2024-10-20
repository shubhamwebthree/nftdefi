const { ethers } = require("hardhat");

async function main() {
    // Get the ContractFactory for MyCollectible
    const March = await ethers.getContractFactory("March");
    
    // Deploy the contract
    const march = await March.deploy();
    
    // Log the address of the deployed contract
    console.log("January deployed to:", march);
}

// Execute the main function
main().catch((error) => {
    console.error("Error in deployment:", error);
    process.exitCode = 1;
});
