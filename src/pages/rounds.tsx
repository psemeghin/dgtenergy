'use client';

import { useEffect, useState } from 'react';
import { formatUnits } from 'viem';
import { useAccount, useBalance, useDisconnect, useWriteContract } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ERC20_ABI from '../abis/ERC20.json';
import TOKEN_SALE_ABI from '../abis/TOKEN_SALE.json';

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955' as `0x${string}`;
const TOKEN_SALE_ADDRESS = '0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c' as `0x${string}`;
const DGT3_ADDRESS = TOKEN_SALE_ADDRESS; // Assuming DGT3 token address is the same as Token Sale contract for balance read

export default function Rounds() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [usdtAmount, setUsdtAmount] = useState('');
  const [isKycCompleted, setIsKycCompleted] = useState(false);

  const usdtParsed = usdtAmount ? BigInt(Number(usdtAmount) * 1e18) : undefined;

  const { writeContract: approveWrite, isPending: isApproving } = useWriteContract();
  const { writeContract: buyWrite, isPending: isBuying } = useWriteContract();

  // Fetch balances of USDT and DGT3 for connected address
  const { data: usdtBalanceData, refetch: refetchUsdtBalance } = useBalance({
    address,
    token: USDT_ADDRESS,
  });

  const { data: dgt3BalanceData, refetch: refetchDgt3Balance } = useBalance({
    address,
    token: DGT3_ADDRESS,
  });

  // Refresh balances after approve or buy success
  useEffect(() => {
    // No isSuccess available, so no automatic refetch here.
    // You may want to add event listeners or manual refresh logic.
  }, [refetchUsdtBalance, refetchDgt3Balance]);

  // Handle KYC toggle (simulated)
  const toggleKyc = () => setIsKycCompleted((prev) => !prev);

  // Cards data for Seed and Rounds phases
  const phases = [
    {
      title: 'Seed Round',
      description:
        'Invest early in DGT3 with exclusive bonuses. Limited allocation for early supporters.',
      price: '0.10 USDT',
      bonus: '20%',
      duration: 'Jan 1, 2024 - Feb 28, 2024',
      bgColor: 'bg-petroleum-800',
    },
    {
      title: 'Rounds',
      description:
        'Join the main sale rounds with flexible options and competitive pricing.',
      price: '0.15 USDT',
      bonus: '10%',
      duration: 'Mar 1, 2024 - Apr 30, 2024',
      bgColor: 'bg-graphite-800',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-50 text-graphite-900 p-6 pt-24 md:p-12 font-sans">
      {/* Highlight Section */}
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-petroleum-900 drop-shadow-lg">
          DGT3 Token Sale - Participate Now!
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-graphite-900">
          Secure your DGT3 tokens by connecting your wallet, completing KYC, approving USDT, and buying tokens in a few easy steps.
        </p>
      </section>

      {/* Purchase Section */}
      <section className="max-w-xl mx-auto bg-gradient-to-b from-neutral-50 to-neutral-300 rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-petroleum-900 mb-4 text-center">
          Token Purchase
        </h2>

        {/* Step 1: Connect Wallet */}
        <div className="flex items-center justify-center w-full py-3 rounded-md">
          <ConnectButton />
        </div>
        {isConnected && (
          <button
            onClick={() => disconnect()}
            className="w-full mt-2 py-3 rounded-md font-semibold text-lg bg-red-600 hover:bg-red-700 text-neutral-100 shadow-md"
            aria-label="Disconnect Wallet"
          >
            Disconnect Wallet
          </button>
        )}

        {/* Step 2: KYC Completed */}
        <button
          onClick={toggleKyc}
          disabled={!isConnected}
          className={`w-full py-3 rounded-md font-semibold text-lg transition-colors shadow-md ${
            isKycCompleted
              ? 'bg-petroleum-600 hover:bg-petroleum-700'
              : 'bg-neutral-700 hover:bg-neutral-600'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Toggle KYC Completed"
          title="Simulated KYC completion toggle"
        >
          {isKycCompleted ? '2. KYC Completed (✔)' : '2. Complete KYC (Step 2)'}
        </button>

        {/* Step 3: Approve USDT */}
        <input
          type="number"
          min="0"
          step="any"
          value={usdtAmount}
          onChange={(e) => setUsdtAmount(e.target.value)}
          placeholder="Amount of USDT to spend"
          disabled={!isConnected}
          className="w-full px-4 py-3 rounded-md bg-neutral-700 text-neutral-100 placeholder-neutral-400 focus:outline-petroleum-900"
          aria-label="USDT amount input"
        />
        <button
          onClick={() =>
            approveWrite({
              address: USDT_ADDRESS,
              abi: ERC20_ABI,
              functionName: "approve",
              args: [TOKEN_SALE_ADDRESS, usdtParsed ?? 0n],
            })
          }
          disabled={
            !isConnected ||
            isApproving ||
            !isKycCompleted ||
            !usdtParsed ||
            usdtParsed === 0n
          }
          className={`w-full py-3 rounded-md font-semibold text-lg transition-colors shadow-md ${
            isApproving
              ? 'bg-petroleum-300 cursor-wait text-graphite-900'
              : 'bg-petroleum-900 hover:brightness-90 text-graphite-900'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Approve USDT"
        >
          {isApproving ? '3. Approving USDT (Step 3)...' : '3. Approve USDT (Step 3)'}
        </button>

        {/* Step 4: Buy DGT3 */}
        <button
          onClick={() =>
            buyWrite({
              address: TOKEN_SALE_ADDRESS,
              abi: TOKEN_SALE_ABI,
              functionName: "buyTokens",
              args: [usdtParsed ?? 0n],
            })
          }
          disabled={
            !isConnected ||
            isBuying ||
            !isKycCompleted ||
            !usdtParsed ||
            usdtParsed === 0n
          }
          className={`w-full py-3 rounded-md font-semibold text-lg transition-colors shadow-md ${
            isBuying
              ? 'bg-petroleum-300 cursor-wait text-graphite-900'
              : 'bg-petroleum-500 hover:bg-petroleum-600'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Buy DGT3 tokens"
        >
          {isBuying ? '4. Buying DGT3 (Step 4)...' : '4. Buy DGT3 (Step 4)'}
        </button>

        <div className="mt-6 space-y-2 text-sm text-graphite-900">
          <p>
            <span className={`inline-block w-3 h-3 mr-2 rounded-full ${isConnected ? 'bg-petroleum-500' : 'bg-red-500'}`} />
            Wallet: {isConnected ? 'Connected' : 'Disconnected'}
          </p>
          <p>
            <span className={`inline-block w-3 h-3 mr-2 rounded-full ${isKycCompleted ? 'bg-petroleum-500' : 'bg-neutral-500'}`} />
            KYC: {isKycCompleted ? 'Completed' : 'Incomplete'}
          </p>
        </div>

      </section>

      {/* Phases Grid Section */}
      <section className="max-w-2xl mx-auto mt-16 flex flex-col gap-8">
        {phases.map(({ title, description, price, bonus, duration, bgColor }) => (
          <div
            key={title}
            className={`${bgColor} rounded-xl shadow-lg p-6 flex flex-col justify-between`}
            aria-label={`${title} phase card`}
          >
            <h3 className="text-3xl font-bold mb-3 text-neutral-50 drop-shadow-md">
              {title}
            </h3>
            <p className="mb-4 text-neutral-100 font-semibold">{description}</p>
            <ul className="text-neutral-100 font-semibold space-y-1">
              <li>
                <span className="font-bold">Price:</span> {price} per DGT3
              </li>
              <li>
                <span className="font-bold">Bonus:</span> {bonus}
              </li>
              <li>
                <span className="font-bold">Duration:</span> {duration}
              </li>
            </ul>
          </div>
        ))}
      </section>

      {/* Balances Section */}
      <section className="max-w-xl mx-auto mt-16 bg-neutral-800 rounded-lg shadow-lg p-6 space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-petroleum-900 mb-4">
          Your Wallet Balances
        </h2>
        {isConnected ? (
          <>
            <p className="text-lg">
              <span className="font-bold">DGT3:</span>{' '}
              {dgt3BalanceData
                ? `${parseFloat(formatUnits(dgt3BalanceData.value, dgt3BalanceData.decimals)).toFixed(4)}`
                : 'Loading...'}
            </p>
            <p className="text-lg">
              <span className="font-bold">USDT:</span>{' '}
              {usdtBalanceData
                ? `${parseFloat(formatUnits(usdtBalanceData.value, usdtBalanceData.decimals)).toFixed(4)}`
                : 'Loading...'}
            </p>
          </>
        ) : (
          <p className="text-neutral-400">Connect your wallet to see balances.</p>
        )}
      </section>

      {/* Legal & Compliance Section */}
      <section className="max-w-4xl mx-auto mt-16 mb-12 px-4 text-neutral-400 text-sm leading-relaxed">
        <h2 className="text-petroleum-900 font-semibold mb-2">Legal & Compliance</h2>
        <p>
          Participation in the DGT3 token sale is subject to compliance with applicable laws and regulations. By participating, you confirm that you have completed all required KYC/AML checks and are eligible to purchase tokens in your jurisdiction. The DGT Energy team is not responsible for any legal or financial consequences resulting from non-compliance. Please consult your legal advisor before participating.
        </p>
      </section>
    </main>
  );
}