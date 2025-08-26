// src/components/MetaHead.tsx
import Head from "next/head";

const MetaHead = () => {
  return (
    <Head>
      <title>DGT-Energy — Real-World Energy Token</title>
      <meta
        name="description"
        content="A utility token anchored in real-world energy receivables. Transparent. Multichain. Institutional-grade."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaHead;
