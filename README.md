# Base Address Checker

A tiny utility to check whether a string looks like a valid EVM/Base wallet address.

Base uses EVM-compatible addresses, which are 42 characters long and start with `0x`.

## Usage

```bash
node index.js 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
Valid EVM/Base address
```bash

cat > index.js <<'EOF'

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

