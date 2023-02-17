import Head from "next/head";
import Marquee from "@/components/Marquee";

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
        <Marquee customVariants={false}>
          <h1 className="font-family:montserrat h-0 font-semibold text-3xl sm:text-5xl xl:text-7xl text-chalk-grey">
            SITE UNDER CONSTRUCTION
          </h1>
        </Marquee>
      </main>
    </>
  );
}
