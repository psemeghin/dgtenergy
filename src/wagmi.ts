// wagmi.config.ts
import { http, createConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'
import { injected, walletConnect, coinbaseWallet } from '@wagmi/connectors'

export const config = createConfig({
  chains: [bsc],
  connectors: [
    injected(),
    walletConnect({
      projectId: 'SEU_PROJECT_ID_DA_WALLETCONNECT',
    }),
    coinbaseWallet({ appName: 'DGTEnergy' }),
  ],
  transports: {
    [bsc.id]: http(),
  },
  ssr: true,
})
