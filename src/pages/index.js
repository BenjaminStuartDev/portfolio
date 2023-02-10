import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Benjamin Stuart Dev</title>
        <meta
          name="description"
          content="Portfolio website for Benjamin Stuart"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl">Hello</h1>
      </main>
    </>
  );
}
