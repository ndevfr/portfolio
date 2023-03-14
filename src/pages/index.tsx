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
import {
  WaveBottom1,
  WaveBottom2,
  WaveBottom3,
} from "@/components/atoms/Waves";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import { StaticProps } from "@/types";

export default function Home(props: StaticProps) {
  return (
    <>
      <Head>
        <title>NDev.fr</title>
        <meta name="description" content="Visitez mon portfolio personnel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={lato.className}>
        <Navbar />
        <div
          className="absolute top-[84px] left-0 right-0 w-100 bottom-0 overflow-y-scroll"
          id="wrapper"
        >
          <Welcome />
          <WaveBottom1
            className={clsx(
              "fill-lockee1 text-lockee1 bg-welcome1",
              "dark:fill-darklockee1 dark:text-darklockee1 dark:bg-darkwelcome1"
            )}
          />
          <Lockee />
          <WaveBottom2
            className={clsx(
              "fill-projects1 text-projects1 bg-lockee1",
              "dark:fill-darkprojects1 dark:text-darkprojects1 dark:bg-darklockee1"
            )}
          />
          <Projects websites={props.websites} projects={props.projects} />
          <WaveBottom3
            className={clsx(
              "fill-contacts1 text-contacts1 bg-projects1",
              "dark:fill-darkcontacts1 dark:text-darkcontacts1 dark:bg-darkprojects1"
            )}
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
