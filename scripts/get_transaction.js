const starknet = require("starknet");

const provider = new starknet.RpcProvider({
  nodeUrl: "http://localhost:9944",
});

async function main(txnHash) {
  const result = await provider.getTransactionReceipt(txnHash);

  console.log("This is the transaction receipt - ", result);
}

main(process.argv[2]);
