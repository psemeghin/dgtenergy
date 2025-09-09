'use client';

import { useAccount, useDisconnect, useSwitchChain, useChainId } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectPage() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();

  const currentChainName = chainId === 56 ? 'BNB Smart Chain' : 'Desconhecida';

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Conectar Carteira</h1>

      {isConnected ? (
        <div className="text-center">
          <p className="mb-4">Carteira conectada:</p>
          <p className="mb-2 font-mono text-sm text-green-600">{address}</p>
          <p className="mb-6 text-gray-600">
            Rede atual: <strong>{currentChainName}</strong>
          </p>

          {chainId !== 56 && (
            <button
              className="bg-yellow-500 text-white px-6 py-2 rounded mb-4"
              onClick={() => switchChain({ chainId: 56 })}
            >
              Mudar para BNB Chain
            </button>
          )}

          <button
            className="bg-red-600 text-white px-6 py-2 rounded"
            onClick={() => disconnect()}
          >
            Desconectar
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Conecte sua carteira com o botão abaixo:</p>
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </div>
      )}
    </main>
  );
}