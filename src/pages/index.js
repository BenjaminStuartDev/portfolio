import Head from "next/head";
import Marquee from "@/components/Marquee";
import Page from "@/components/page";
import Hero from "@/components/hero";
import Codeblock from "@/components/codeblock";
import Button from "@/components/button";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

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
        <Page className="bg-mine-shaft">
          <Marquee customVariants={false}>
            <h1 className="font-family-montserrat h-0 font-semibold text-3xl sm:text-5xl xl:text-7xl text-wild-sand">
              SITE UNDER CONSTRUCTION
            </h1>
          </Marquee>
          <Hero name="Benjamin Stuart" role="Junior Software Developer" />
        </Page>
        {/* create navbar component */}
        {/* create social media component */}
        <Page className="bg-wild-sand">
          <h1 className="font-oswald text-4xl md:text-4xl lg:text-6xl py-11">
            {"> Hi"}
          </h1>
          <p className="font-open-sans sm:text-lg md:text-1xl lg:text-2xl tracking-[0.1rem] pt-[1rem] pb-[2rem]">
            My name is Ben. I am a Coder Academy graduate currently working as a
            Support Engineer at Tanda. I have a strong interest in UI/UX design
            and a passion for helping people by building accessible and
            beautiful websites.
          </p>
          <Codeblock />
          <div className="w-full flex justify-end pt-4">
            <Button
              name="Resume >>"
              className="bg-mine-shaft text-wild-sand"
              event={() => openInNewTab("https://google.com")}
            />
          </div>
        </Page>
      </main>
    </>
  );
}
