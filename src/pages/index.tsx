import { useEffect, useState } from "react";
import Head from "next/head";
import { Lato } from "next/font/google";
import clsx from "clsx";
import { getAllPublished } from "@/utils/md";
import { Navbar } from "@/components/Navbar";
import { Welcome } from "@/components/Welcome";
import { Lockee } from "@/components/Lockee";
import { Projects } from "@/components/Projects";
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
        <link rel="icon" href="/favicon.ico" />
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
            "absolute top-[84px] left-0 right-0 w-100 bottom-0 overflow-y-scroll"
          )}
          id="wrapper"
        >
          <Welcome />
          <WaveSeparator
            design={1}
            forceDark={forceDarkProbablyOn}
            classTop="bg-welcomeL dark:bg-welcomeD"
            classBottom="fill-lockeeL dark:fill-lockeeD"
          />
          <Lockee />
          <WaveSeparator
            design={2}
            forceDark={forceDarkProbablyOn}
            classTop="bg-lockeeL dark:bg-lockeeD"
            classBottom="fill-projectsL dark:fill-projectsD"
          />
          <Projects websites={props.websites} projects={props.projects} />
          <WaveSeparator
            design={3}
            forceDark={forceDarkProbablyOn}
            classTop="bg-projectsL dark:bg-projectsD"
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
