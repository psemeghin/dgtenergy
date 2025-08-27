// src/pages/connect.tsx
import MetaHead from "../components/MetaHead";
import ConnectIntro from "../components/ConnectIntro";
import WalletOptions from "../components/WalletOptions";
import SecurityNotes from "../components/SecurityNotes";

export default function ConnectPage() {
  return (
    <>
      <MetaHead />
      <main className="bg-[#FAFAFA] text-gray-900">
        <ConnectIntro />
        <WalletOptions />
        <SecurityNotes />
      </main>
    </>
  );
}
