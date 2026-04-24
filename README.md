# Base Address Checker

A tiny utility to check whether a string looks like a valid EVM/Base wallet address.

Base uses EVM-compatible addresses, which are 42 characters long and start with `0x`.

## Usage

```bash
node index.js 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
```

## Example output

```txt
Valid EVM/Base address
```

## Notes

This only checks the address format. It does not verify ownership, balance, or on-chain activity.
