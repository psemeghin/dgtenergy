// src/lib/constants.ts

export const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955'; // BEP-20 USDT
export const TOKEN_SALE_ADDRESS = '0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c'; // Token Sale contract

export const USDT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    type: 'function',
  },
];