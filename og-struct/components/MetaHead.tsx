// src/components/MetaHead.tsx
import Head from "next/head";

const MetaHead = () => {
  return (
    <Head>
      {/* Título e descrição */}
      <title>DGT-Energy — Real-World Energy Token</title>
      <meta
        name="description"
        content="A utility token anchored in real-world energy receivables. Transparent. Multichain. Institutional-grade."
      />

      {/* Favicon e ícones */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Mobile */}
      <meta name="theme-color" content="#005F73" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="DGT-Energy — Real-World Energy Token" />
      <meta property="og:description" content="A utility token anchored in real-world energy receivables." />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://dgtenergy.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DGT-Energy — Real-World Energy Token" />
      <meta name="twitter:description" content="Access energy finance via real-world assets. Transparent. Institutional-grade." />
      <meta name="twitter:image" content="/og-image.png" />
    </Head>
  );
};

export default MetaHead;
