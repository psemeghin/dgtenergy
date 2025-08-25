import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Head>
        <title>DGT-Energy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold">Hello DGT-Energy 👋</h1>
    </div>
  )
}
