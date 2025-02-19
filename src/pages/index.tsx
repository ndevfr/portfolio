import { useEffect, useState } from "react";
import Head from "next/head";
import { Lato } from "next/font/google";
import clsx from "clsx";
import { getAllPublished } from "@/utils/md";
import { Navbar } from "@/components/Navbar";
import { Welcome } from "@/components/Welcome";
import { Lockee } from "@/components/Lockee";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { WaveSeparator } from "@/components/atoms/Waves";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import { StaticProps } from "@/types";

export default function Home(props: StaticProps) {
  const [forceDarkProbablyOn, setForceDarkProbablyOn] = useState(false);

  useEffect(() => {
    const detectionDiv = document.querySelector("#detection")!;
    const isAutoDark =
      getComputedStyle(detectionDiv).backgroundColor != "rgb(255, 255, 255)";
    const isSamsungBrowser = navigator.userAgent.includes("SamsungBrowser");
    if (isSamsungBrowser || isAutoDark) {
      setForceDarkProbablyOn(true);
    }
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>NDev.fr</title>
        <meta name="description" content="Visitez mon portfolio personnel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </Head>
      <div
        id="detection"
        style={{
          display: "none",
          backgroundColor: "canvas",
          colorScheme: "light",
        }}
      ></div>
      <div className={lato.className}>
        <Navbar />
        <div
          className={clsx(
            "absolute top-[70px] left-0 right-0 w-100 bottom-0 overflow-y-scroll"
          )}
          id="wrapper"
        >
          <Welcome />
          <WaveSeparator
            design={1}
            forceDark={forceDarkProbablyOn}
            classTop="bg-welcomeL dark:bg-welcomeD mb-[-1px]"
            classBottom="fill-lockeeL dark:fill-lockeeD"
          />
          <Lockee />
          <WaveSeparator
            design={2}
            forceDark={forceDarkProbablyOn}
            classTop="bg-lockeeL dark:bg-lockeeD mb-[-1px]"
            classBottom="fill-projectsL dark:fill-projectsD"
          />
          <Projects websites={props.websites} projects={props.projects} />
          <WaveSeparator
            design={3}
            forceDark={forceDarkProbablyOn}
            classTop="bg-projectsL dark:bg-projectsD mb-[-1px]"
            classBottom="fill-technologiesL dark:fill-technologiesD"
          />
          <Technologies />
          <WaveSeparator
            design={4}
            forceDark={forceDarkProbablyOn}
            classTop="bg-technologiesL dark:bg-technologiesD mb-[-1px]"
            classBottom="fill-contactsL dark:fill-contactsD"
          />
          <Contacts />
          <Footer />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const websites = getAllPublished("website");
  const projects = getAllPublished("project");

  return {
    props: { websites, projects },
  };
};
