// src/components/Seo.tsx
import Head from 'next/head';

type SeoProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
};

const DEFAULT_TITLE = 'DGTEnergy — Protocol DApp';
const DEFAULT_DESC =
  'DGTEnergy is a utility-token protocol that provides verifiable access to staking, governance, and data visibility utilities anchored to audited energy operations.';
const DEFAULT_OG = ''; // evita request 404 até termos um arquivo real em /public

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  ogImage = DEFAULT_OG,
  noIndex
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:site_name" content="DGTEnergy" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Theme/Brand */}
      <meta name="theme-color" content="#005F73" />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
}