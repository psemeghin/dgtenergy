import Head from 'next/head';

export default function DataPage() {
  return (
    <>
      <Head>
        <title>Data | DGTEnergy</title>
      </Head>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center">Data Page</h1>
        <p className="mt-4 text-center text-gray-500">This is the data page of the DGTEnergy DApp.</p>
      </main>
    </>
  );
}
