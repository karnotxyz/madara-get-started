# Madara Get Started ⚡

This repo contains some basic scripts so that you can get started with Madara. The scripts have been tested on the following [commit](https://github.com/keep-starknet-strange/madara/commit/8b49fecfe6f420a1dede1e691d50cd59a326bbc0).

## How to use these scripts

### Setup

> You will need Node.js to use these scripts. These scripts were tested on Node version v20.5.1

```
git clone https://github.com/karnotxyz/madara-get-started
npm i
```

### Using the scripts

1. Declaring a contract:

   ```
   node scripts/declare.js <path_to_sierra> <path_to_casm>
   ```

   For example,

   ```
   node scripts/declare.js ./contracts/OpenZeppelinAccountCairoOne.sierra.json ./contracts/OpenZeppelinAccountCairoOne.casm.json
   ```

2. Deploying a contract
   ```
   node scripts/deploy.js <path_to_sierra> <constructor_args>
   ```

   For example,
   ```
   node scripts/deploy.js ./contracts/OpenZeppelinAccountCairoOne.sierra.json 0x1  
   ```
3. Getting a transaction receipt
   ```
   node scripts/get_transaction.js <txn_hash>
   ```
