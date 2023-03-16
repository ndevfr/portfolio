import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { StaticProps, ProjectProps } from "@/types";
import { getYear } from "@/utils/date";
import { Button } from "./atoms/Button";

const ProjectTile = (props: ProjectProps) => {
  const labelsList = props.tags.map((element, index) => (
    <span
      className={clsx(
        "text-xs px-3 py-1 rounded-full bg-black text-white border-2 border-black font-bold my-0 mx-1",
        "dark:text-whiteD"
      )}
      key={props.slug + "-label-" + index}
    >
      {element}
    </span>
  ));
  return (
    <div className={clsx("p-4")}>
      <Link
        href={"/" + props.folder + "/" + props.slug}
        className={clsx(
          "block relative drop-shadow-md border-2 border-black rounded-6 cursor-pointer"
        )}
      >
        <div className="block relative bg-welcomeL dark:bg-welcomeL">
          <Image
            src={"/captures/" + props.slug + ".webp"}
            alt={props.title}
            className={clsx("rounded-t-4")}
            width={1500}
            height={1000}
            sizes="(max-width: 425px) 339px, (max-width: 768px) 389px,
                (max-width: 1024px) 348px, (max-width: 1200px) 305px, (max-width: 1440px) 364px,
                444px"
          />
        </div>
        <div
          className={clsx(
            "flex flex-wrap absolute justify-center items-end w-full h-[80px] bottom-[80px] pb-[10px] bg-gradient-to-b from-topgradient/0 to-btmgradient/80"
          )}
        >
          {labelsList}
        </div>
        <p
          className={clsx(
            "flex flex-col w-full h-[80px] bg-welcomeL text-white justify-center items-center text-base text-center",
            "dark:bg-welcomeL dark:text-whiteD"
          )}
        >
          <span className={clsx("text-xl font-bold")}>{props.title}</span>
          <span className={clsx("block w-full text-base italic")}>
            {props.description}
          </span>
          <span className={clsx("text-sm")}>
            {props.endDate !== ""
              ? `${getYear(props.startDate)} - ${getYear(props.endDate)}`
              : `${getYear(props.startDate)}`}
          </span>
        </p>
      </Link>
    </div>
  );
};

export const Projects = (props: StaticProps) => {
  const [limitWebsites, setLimitWebsites] = useState(6);
  const [limitProjects, setLimitProjects] = useState(6);

  const websitesList = props.websites
    .filter((element, index) => index < limitWebsites)
    .map((element: ProjectProps, index: number) => (
      <ProjectTile {...element} folder="website" key={element.slug} />
    ));

  const projectsList = props.projects
    .filter((element, index) => index < limitProjects)
    .map((element: ProjectProps) => (
      <ProjectTile {...element} folder="project" key={element.slug} />
    ));

  const displayMoreWebsites = () => {
    setLimitWebsites((current) => current + 6);
  };

  const displayMoreProjects = () => {
    setLimitProjects((current) => current + 6);
  };

  return (
    <section
      id="projects"
      className={clsx(
        "w-full bg-projectsL text-black text-lg",
        "md:text-3xl",
        "lg:text-4xl",
        "xl:text-5xl",
        "dark:bg-projectsD dark:text-whiteD"
      )}
    >
      <div
        className={clsx(
          "container mx-auto pt-4 flex flex-col items-center justify-center",
          "md:pt-8",
          "lg:pt-12"
        )}
      >
        <h1
          className={clsx(
            "relative text-center font-bold text-lg mb-4",
            "xs:text-xl",
            "sm:text-2xl",
            "md:text-4xl md:mb-8",
            "lg:text-5xl lg:mb-12",
            "after:absolute after:content[' '] after:-bottom-1 after:left-[10%] after:right-[10%] after:h-1 after:bg-black",
            "after:md:-bottom-3",
            "after:lg:-bottom-4 after:lg:h-2",
            "dark:after:bg-whiteD"
          )}
        >
          Quelques sites que j&apos;ai développés
        </h1>

        <div
          className={clsx(
            "w-full grid grid-cols-1",
            "md:grid-cols-2",
            "lg:grid-cols-3"
          )}
        >
          {websitesList}
          {limitWebsites < props.websites.length && (
            <div
              className={clsx("text-center", "md:col-span-2", "lg:col-span-3")}
            >
              <Button
                onClick={displayMoreWebsites}
                className={clsx(
                  "bg-projectsbtnL text-sm",
                  "md:text-xl",
                  "dark:bg-projectsbtnD"
                )}
                aria-label="Afficher plus de sites"
              >
                Afficher plus...
              </Button>
            </div>
          )}
        </div>
      </div>
      <div
        className={clsx(
          "container min-h-full mx-auto pt-4 flex flex-col items-center justify-center",
          "md:pt-8",
          "lg:pt-12"
        )}
      >
        <h1
          className={clsx(
            "relative text-center font-bold text-lg mb-4",
            "xs:text-xl",
            "sm:text-2xl",
            "md:text-4xl md:mb-8",
            "lg:text-5xl lg:mb-12",
            "after:absolute after:content[' '] after:-bottom-1 after:left-[10%] after:right-[10%] after:h-1 after:bg-black",
            "after:md:-bottom-3",
            "after:lg:-bottom-4 after:lg:h-2",
            "dark:after:bg-whiteD"
          )}
        >
          D&apos;autres projets que j&apos;ai réalisés
        </h1>
        <div
          className={clsx(
            "w-full grid grid-cols-1 pb-[50px]",
            "md:grid-cols-2",
            "lg:grid-cols-3"
          )}
        >
          {projectsList}
          {limitProjects < props.projects.length && (
            <div
              className={clsx("text-center", "md:col-span-2", "lg:col-span-3")}
            >
              <Button
                onClick={displayMoreProjects}
                className={clsx(
                  "bg-projectsbtnL text-sm",
                  "md:text-xl",
                  "dark:bg-projectsbtnD"
                )}
                aria-label="Afficher plus de projets"
              >
                Afficher plus...
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
