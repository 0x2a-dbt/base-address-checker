function isValidEvmAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

const input = process.argv[2];

if (!input) {
  console.log("Usage: node index.js <wallet-address>");
  process.exit(1);
}

if (isValidEvmAddress(input)) {
  console.log("Valid EVM/Base address");
} else {
  console.log("Invalid EVM/Base address");
}
