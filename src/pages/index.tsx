import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/netflix.svg" />
      </Head>
      <h1 className="text-3xl font-bold underline">Netflix Clone</h1>
    </>
  );
}
