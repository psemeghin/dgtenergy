// pages/connect.tsx
import { useAccount, useBalance, useNetwork } from 'wagmi/hooks'
import Head from 'next/head'

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955' // BEP-20
const DGT_ADDRESS = '0x0f9483E001e4911BAF7c6Fc46ad269B05001F5C7' // DGT

export default function ConnectPage() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  const { data: usdtBalance, isLoading: loadingUSDT } = useBalance({
    address,
    token: USDT_ADDRESS,
    watch: true,
  })

  const { data: dgtBalance, isLoading: loadingDGT } = useBalance({
    address,
    token: DGT_ADDRESS,
    watch: true,
  })

  return (
    <>
      <Head>
        <title>Connect Wallet | DGTEnergy</title>
      </Head>
      <main className="max-w-2xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Connect Your Wallet</h1>
        <p className="text-gray-500 mb-6">Secure access to your DGTEnergy balance and tools.</p>

        {isConnected ? (
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              <strong>Connected Wallet:</strong><br />
              <span className="break-words">{address}</span>
            </div>
            <div className="text-sm">
              <strong>USDT Balance:</strong> {loadingUSDT ? 'Loading...' : `${usdtBalance?.formatted} ${usdtBalance?.symbol}`}
            </div>
            <div className="text-sm">
              <strong>DGT Balance:</strong> {loadingDGT ? 'Loading...' : `${dgtBalance?.formatted} ${dgtBalance?.symbol}`}
            </div>
            <div className="text-xs text-gray-400">
              Network: {chain?.name || 'Unknown'} ({chain?.id})
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-sm">Please connect your wallet to view balances.</div>
        )}
      </main>
    </>
  )
}
