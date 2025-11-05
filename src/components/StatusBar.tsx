// src/components/StatusBar.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useChainId, useSwitchChain } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { useMemo } from 'react';

function shortAddr(addr?: string, size = 4) {
  if (!addr) return '';
  return `${addr.slice(0, 2 + size)}…${addr.slice(-size)}`;
}

export default function StatusBar() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const TOKEN_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}` | undefined;
  const USDT_ADDRESS = process.env.NEXT_PUBLIC_USDT_ADDRESS as `0x${string}` | undefined;

  const showNetworkGuard = chainId && chainId !== bsc.id;

  const { data: dgt3Bal } = useBalance({
    address,
    chainId: bsc.id,
    token: TOKEN_ADDRESS,
    query: { enabled: Boolean(isConnected && address && TOKEN_ADDRESS && chainId === bsc.id) }
  });

  const { data: usdtBal } = useBalance({
    address,
    chainId: bsc.id,
    token: USDT_ADDRESS,
    query: { enabled: Boolean(isConnected && address && USDT_ADDRESS && chainId === bsc.id) }
  });

  const dgt3 = useMemo(() => (dgt3Bal ? Number(dgt3Bal.formatted).toFixed(2) : null), [dgt3Bal]);
  const usdt = useMemo(() => (usdtBal ? Number(usdtBal.formatted).toFixed(2) : null), [usdtBal]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Network guard (aparece se não estiver na BNB Smart Chain) */}
      {showNetworkGuard && (
        <div className="w-full bg-yellow-100 text-yellow-900 px-4 py-2 text-sm flex items-center justify-between">
          <span>
            You are connected to the wrong network. Please switch to <strong>BNB Smart Chain (56)</strong>.
          </span>
          <button
            onClick={() => switchChain?.({ chainId: bsc.id })}
            className="rounded-md bg-yellow-900 text-white px-3 py-1 text-xs hover:opacity-90 transition"
          >
            Switch network
          </button>
        </div>
      )}

      {/* Status principal */}
      <div className="w-full bg-white/90 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-display font-medium tracking-wide text-petroleum-900">DGTEnergy</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-600">BNB Smart Chain (56)</span>
            {isConnected && address && (
              <>
                <span className="text-neutral-500">|</span>
                <span className="text-neutral-700">Wallet: {shortAddr(address)}</span>
              </>
            )}
            {isConnected && chainId === bsc.id && (
              <>
                <span className="text-neutral-500">|</span>
                <span className="text-neutral-700">
                  DGT3: <strong>{dgt3 ?? '—'}</strong>
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-700">
                  USDT: <strong>{usdt ?? '—'}</strong>
                </span>
              </>
            )}
          </div>

          <div className="flex items-center">
            <ConnectButton
              label="Connect Wallet"
              accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
              showBalance={false}
              chainStatus="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}