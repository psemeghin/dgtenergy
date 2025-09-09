'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  useAccount,
  useBalance,
  useDisconnect,
  useWriteContract,
  useSwitchChain,
} from 'wagmi';
import { parseUnits } from 'viem';

const ConnectWallet = dynamic(() => import('../components/ConnectWallet'), {
  ssr: false,
});

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const TOKEN_SALE_ADDRESS = '0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c';

const USDT_ABI = [
  'function approve(address spender, uint256 amount) public returns (bool)',
];

const SALE_ABI = ['function buyTokens(uint256 usdtAmount) external'];

export default function RoundsPage() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  const [usdtAmount, setUsdtAmount] = useState('1000');
  const usdtParsed = parseUnits(usdtAmount || '0', 6);

  // Approve USDT contract write
  const {
    writeContract: approveWriteContract,
    data: approveData,
    error: approveError,
    status: approveStatus,
  } = useWriteContract();

  // Buy DGT contract write
  const {
    writeContract: buyWriteContract,
    data: buyData,
    error: buyError,
    status: buyStatus,
  } = useWriteContract();

  // Balances
  const {
    data: usdtBalanceData,
    isLoading: isUsdtBalanceLoading,
    refetch: refetchUsdtBalance,
  } = useBalance({
    address,
    token: USDT_ADDRESS,
  });

  const {
    data: dgtBalanceData,
    isLoading: isDgtBalanceLoading,
    refetch: refetchDgtBalance,
  } = useBalance({
    address,
    token: TOKEN_SALE_ADDRESS,
  });

  // Status states for buttons
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isKycCompleted, setIsKycCompleted] = useState(false);
  const [isUsdtApproved, setIsUsdtApproved] = useState(false);
  const [isTokensBought, setIsTokensBought] = useState(false);

  useEffect(() => {
    setIsWalletConnected(isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (approveStatus === 'success') {
      setIsUsdtApproved(true);
    }
  }, [approveStatus]);

  useEffect(() => {
    if (buyStatus === 'success') {
      setIsTokensBought(true);
    }
  }, [buyStatus]);

  // Dummy KYC completion simulation (to be replaced with real logic)
  const handleKyc = () => {
    setIsKycCompleted(true);
  };

  // Network check for BNB Chain (chainId 56)
  const wrongNetwork = false; // We do not have chainId here, so skipping network check

  return (
    <>
      <Head>
        <title>DGT-Energy — Token Sale Portal</title>
      </Head>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Sessão 1: Sessão Destaque */}
        <div
          id="highlight"
          className="mb-16 bg-[#FAFAFA] border border-gray-300 rounded-lg p-8 shadow-md text-center"
        >
          <h1 className="text-5xl font-bold font-space-grotesk text-[#005F73] mb-3">
            DGT3Energy Sales Portal
          </h1>
          <p className="text-lg font-inter text-[#2F3E46] mb-8">
            Progressive rounds with fixed supply and Early Bird incentives
          </p>

          <div className="inline-block bg-white border border-[#2F3E46] rounded-lg p-6 shadow-sm max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#005F73] mb-2">Whitelist</h2>
            <p className="text-[#2F3E46] mb-1">
              <strong>Target:</strong> 350,000 USDT
            </p>
            <p className="text-[#2F3E46] mb-5">
              <strong>Price:</strong> 0.030 USDT
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                type="button"
                className="bg-[#0A9396] hover:bg-[#007F85] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Join the Power
              </button>
              <a
                href="/data"
                className="inline-block bg-[#94D2BD] hover:bg-[#7AC1AA] text-[#005F73] font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                aria-label="Read Tokenomics"
              >
                Read Tokenomics
              </a>
            </div>
            <div className="mt-5 text-sm">
              <a
                href="/docs/LaminaExample1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#005F73]"
                aria-label="Download Whitelist Round PDF"
              >
                📄 Download Whitelist Round PDF
              </a>
            </div>
          </div>
        </div>

        {/* Sessão 2: Sessão Compra */}
        <div
          id="purchase"
          className="mb-16 max-w-xl mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-md"
        >
          {!isConnected ? (
            <div className="text-center text-gray-500 mb-6">
              <ConnectWallet />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    disabled
                    className="w-full bg-[#005F73] text-white py-3 rounded font-space-grotesk cursor-not-allowed opacity-80"
                  >
                    Step 1: Conectar carteira
                  </button>
                  <div className="flex items-center mt-2 text-sm text-gray-700">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        isWalletConnected ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                      aria-hidden="true"
                    />
                    {isWalletConnected ? 'Conectado' : 'Pendente'}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={handleKyc}
                    disabled={isKycCompleted}
                    className={`w-full py-3 rounded font-space-grotesk ${
                      isKycCompleted
                        ? 'bg-green-500 cursor-default text-white'
                        : 'bg-[#A67F59] hover:bg-[#8E6E4D] text-white'
                    }`}
                  >
                    Step 2: KYC (obrigatório para participar)
                  </button>
                  <div className="flex items-center mt-2 text-sm text-gray-700">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        isKycCompleted ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                      aria-hidden="true"
                    />
                    {isKycCompleted ? 'Conectado' : 'Pendente'}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() =>
                      approveWriteContract({
                        address: USDT_ADDRESS,
                        abi: USDT_ABI,
                        functionName: 'approve',
                        args: [TOKEN_SALE_ADDRESS, usdtParsed],
                      })
                    }
                    disabled={approveStatus === 'loading' || !isKycCompleted}
                    className={`w-full py-3 rounded font-space-grotesk ${
                      approveStatus === 'loading'
                        ? 'bg-yellow-400 cursor-wait text-white'
                        : 'bg-yellow-400 hover:bg-yellow-500 text-white'
                    } ${
                      !isKycCompleted ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {approveStatus === 'loading' ? 'Aprovando...' : 'Step 3: Aprovar USDT'}
                  </button>
                  <div className="flex items-center mt-2 text-sm text-gray-700">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        isUsdtApproved ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                      aria-hidden="true"
                    />
                    {isUsdtApproved ? 'Conectado' : 'Pendente'}
                  </div>
                  {(approveError) && (
                    <p className="text-xs text-red-600 mt-1">
                      Erro na aprovação
                    </p>
                  )}
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() =>
                      buyWriteContract({
                        address: TOKEN_SALE_ADDRESS,
                        abi: SALE_ABI,
                        functionName: 'buyTokens',
                        args: [usdtParsed],
                      })
                    }
                    disabled={
                      buyStatus === 'loading' || !isUsdtApproved || !isKycCompleted
                    }
                    className={`w-full py-3 rounded font-space-grotesk ${
                      buyStatus === 'loading'
                        ? 'bg-green-600 cursor-wait text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    } ${
                      !isUsdtApproved || !isKycCompleted
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    {buyStatus === 'loading' ? 'Comprando...' : 'Step 4: Comprar DGT'}
                  </button>
                  <div className="flex items-center mt-2 text-sm text-gray-700">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        isTokensBought ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                      aria-hidden="true"
                    />
                    {isTokensBought ? 'Conectado' : 'Pendente'}
                  </div>
                  {(buyError) && (
                    <p className="text-xs text-red-600 mt-1">Erro na compra</p>
                  )}
                </div>
              </div>

              {/* Saldo da carteira */}
              <div className="text-center text-gray-700 text-sm font-inter space-y-2">
                <p>
                  💳 Saldo em DGT3:{' '}
                  {isDgtBalanceLoading
                    ? 'Carregando...'
                    : dgtBalanceData?.formatted
                    ? `${dgtBalanceData.formatted} DGT3`
                    : '—'}
                </p>
                <p>
                  💰 Saldo em USDT:{' '}
                  {isUsdtBalanceLoading
                    ? 'Carregando...'
                    : usdtBalanceData?.formatted
                    ? `${usdtBalanceData.formatted} USDT`
                    : '—'}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Sessão 3: Sessão Grid das Rodadas */}
        <div
          id="grid"
          className="mb-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Seed Round */}
          <div className="flex flex-col bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold font-space-grotesk mb-2 text-[#005F73]">
              Seed Round
            </h3>
            <p className="text-sm text-[#2F3E46] mb-1">
              Initial allocation in energy receivables
            </p>
            <p className="text-sm text-[#2F3E46] mb-1">
              Target: 500k USDT · Price: 0.036
            </p>
            <p className="text-xs text-gray-500 mb-3">Status: Soon (MOU signed)</p>
            <a
              href="/docs/LaminaExample2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-[#005F73] mb-4"
            >
              📄 Download PDF
            </a>
            <button
              type="button"
              className="mt-auto bg-[#0A9396] hover:bg-[#007F85] text-white py-2 rounded font-space-grotesk transition-colors duration-300"
            >
              Join Whitelist
            </button>
          </div>

          {/* Public Rounds */}
          <div className="flex flex-col bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold font-space-grotesk mb-2 text-[#005F73]">
              Public Rounds
            </h3>
            <p className="text-sm text-[#2F3E46] mb-1">
              Price: 0.040 USDT · Status: On Hold
            </p>
            <p className="text-xs text-gray-500 mb-3">
              Multiple rounds with PPA-linked investments
            </p>
            <a
              href="/docs/LaminaExample3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-[#005F73] mb-4"
            >
              📄 Download PDF
            </a>
            <button
              type="button"
              className="mt-auto bg-[#0A9396] hover:bg-[#007F85] text-white py-2 rounded font-space-grotesk transition-colors duration-300"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Sessão 4: Legal & Compliance */}
        <div
          id="compliance"
          className="max-w-2xl mx-auto text-center text-xs text-[#2F3E46] px-4 pb-10"
        >
          <p className="mb-4 leading-relaxed">
            DGTEnergy is a utility token. It does not represent equity, debt or profit-sharing rights. Staking rewards are discretionary and performance-linked. Participation may require KYC/AML depending on jurisdiction.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/docs/whitepaper.pdf" className="underline" target="_blank" rel="noopener noreferrer">
              Whitepaper
            </a>
            <a href="/docs/legal.pdf" className="underline" target="_blank" rel="noopener noreferrer">
              Legal Terms
            </a>
            <a href="/docs/product1_factsheet.pdf" className="underline" target="_blank" rel="noopener noreferrer">
              Product 1 Factsheet
            </a>
          </div>
        </div>
      </main>
    </>
  );
}