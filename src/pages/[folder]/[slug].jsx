import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Error from "next/error";
import { Lato } from "next/font/google";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getSinglePost, getAllPublished } from "@/utils/md";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/atoms/LinkButton";
import { HighlightTitle } from "@/components/atoms/HighlightTitle";
import { getYear } from "@/utils/date";
import fs from "fs";
import path from "path";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Project = (props) => {
  const labelsList = props.tags.map((element, index) => element).join(" ; ");
  const typePage = props.folder === "project" ? "Projet" : "Site";
  const titlePage = typePage + " " + props.title + " | NDev.fr";
  const descriptionPage =
    "Présentation du " + typePage.toLowerCase() + " " + props.title;

  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content={descriptionPage} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={lato.className}>
        <Navbar />
        <div
          className={clsx(
            "absolute top-[84px] left-0 right-0 w-100 bottom-0 overflow-y-scroll"
          )}
          id="wrapper"
        >
          <section
            id="project"
            className={clsx(
              "w-full min-h-[calc(100%_-_100px)] bg-projectsL text-white pb-4 px-4",
              "dark:bg-projectsD dark:text-whiteD"
            )}
          >
            <div className={clsx("container mx-auto")}>
              <div
                className={clsx("flex flex-row items-center justify-between")}
              >
                <HighlightTitle>{props.title}</HighlightTitle>
                <LinkButton
                  href="/#projects"
                  className={clsx("bg-projectsbtnL", "dark:bg-projectsbtnD")}
                >
                  Retour
                </LinkButton>
              </div>
              <div className={clsx("grid grid-cols-10 gap-4")}>
                <div
                  className={clsx(
                    "col-span-10",
                    "md:col-span-3",
                    "lg:col-span-2"
                  )}
                >
                  <Image
                    src={"/captures/" + props.slug + ".webp"}
                    alt=""
                    width="640"
                    height="427"
                    className={clsx("border-2 border-black rounded-6")}
                  />
                </div>
                <div
                  className={clsx(
                    "text-sm bg-black text-white p-4 rounded-6 col-span-10",
                    "md:col-span-7 md:text-base",
                    "lg:col-span-8 lg:text-lg",
                    "dark:text-whiteD"
                  )}
                >
                  <p>
                    <span className={clsx("text-highlight font-bold")}>
                      Description :
                    </span>{" "}
                    {props.description}
                  </p>
                  <p>
                    <span className={clsx("text-highlight font-bold")}>
                      Technologies :
                    </span>{" "}
                    {labelsList}
                  </p>
                  <p>
                    <span className={clsx("text-highlight font-bold")}>
                      Date :
                    </span>{" "}
                    {props.endDate && (
                      <span>
                        {getYear(props.startDate)} - {getYear(props.endDate)}
                      </span>
                    )}
                    {!props.endDate && <span>{getYear(props.startDate)}</span>}
                  </p>
                  <p>
                    <span className={clsx("text-highlight font-bold")}>
                      Lien :
                    </span>{" "}
                    {props.link && (
                      <a
                        href={props.link}
                        target="blank"
                        className={clsx("underline break-all")}
                      >
                        {props.link}
                      </a>
                    )}
                    {!props.link && (
                      <span className={clsx("italic")}>{props.message}</span>
                    )}
                  </p>
                  {props.source && (
                    <p>
                      <span className={clsx("text-highlight font-bold")}>
                        Code-source :
                      </span>{" "}
                      <a
                        href={props.source}
                        target="blank"
                        className={clsx("underline break-all")}
                      >
                        {props.source}
                      </a>
                    </p>
                  )}
                </div>
                {props.content && (
                  <div
                    className={clsx(
                      "bg-contactsL border-2 border-black text-black p-4 rounded-6 col-span-10",
                      "dark:bg-contactsD"
                    )}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      className={clsx(
                        "prose prose-project max-w-none",
                        "md:prose-lg",
                        "dark:text-whiteD dark:prose-invert"
                      )}
                    >
                      {props.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Project;

export const getStaticPaths = async () => {
  const paths = getAllPublished().map(({ slug, folder }) => ({
    params: { folder: folder, slug: slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = getSinglePost(params.slug, params.folder);

  return {
    props: { ...post },
  };
};
