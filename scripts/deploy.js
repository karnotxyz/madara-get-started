const starknet = require("starknet");

const provider = new starknet.RpcProvider({
  nodeUrl: "http://localhost:9944",
});
const account = new starknet.Account(
  provider,
  "0x4",
  "0x00c1cf1490de1352865301bb8705143f3ef938f97fdf892f1090dcb5ac7bcd1d",
  "1",
);

async function main(sierraPath) {
  const currentDir = process.cwd();
  const sierra = require(`${currentDir}/${sierraPath}`);

  let constructorArgs = [];
  if (process.argv.length > 3) {
    constructorArgs = process.argv.slice(3);
  }

  const deployResult = await account.deploy({
    classHash: starknet.hash.computeContractClassHash(sierra),
    constructorCalldata: constructorArgs,
  });

  console.log("This is the deploy result - ", deployResult);
}

main(process.argv[2]);
