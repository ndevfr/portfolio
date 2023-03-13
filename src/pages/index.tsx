import Head from "next/head";
import { Lato } from "next/font/google";
import { getAllPublished } from "@/utils/md";
import { Navbar } from "@/components/Navbar";
import { Welcome } from "@/components/Welcome";
import { Lockee } from "@/components/Lockee";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
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
          className="absolute top-[84px] left-0 right-0 w-100 bottom-0 overflow-y-scroll snap-y snap-proximity"
          id="wrapper"
        >
          <Welcome />
          <Lockee />
          <Projects websites={props.websites} projects={props.projects} />
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
