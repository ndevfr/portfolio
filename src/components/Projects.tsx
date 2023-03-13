import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { StaticProps, ProjectProps } from "@/types";
import { getYear } from "@/utils/date";
import { Button } from "./atoms/Button";
import { WaveBottom2 } from "./atoms/Waves";

const ProjectTile = (props: ProjectProps) => {
  const labelsList = props.tags.map((element, index) => (
    <span
      className={clsx(
        "text-xs px-3 py-1 rounded-full bg-black text-white border-2 border-black font-bold my-0 mx-1"
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
        <Image
          src={"/captures/" + props.slug + ".png"}
          alt={props.title}
          width="600"
          height="400"
          className={clsx("rounded-t-4")}
        />
        <div
          className={clsx(
            "flex flex-wrap absolute justify-center items-end w-full h-[80px] bottom-[80px] pb-[10px] bg-gradient-to-b from-topgradient/0 to-btmgradient/80"
          )}
        >
          {labelsList}
        </div>
        <p
          className={clsx(
            "flex flex-col w-full h-[80px] bg-welcome1 text-white justify-center items-center text-base text-center"
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
  const [limitWebsites, setLimitWebsites] = useState(12);
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
        "w-full bg-projects1 text-black text-lg",
        "tablet:text-3xl",
        "laptop:text-4xl",
        "desktop:text-5xl"
      )}
    >
      <div
        className={clsx(
          "container mx-auto pt-4 flex flex-col items-center justify-center",
          "tablet:pt-8",
          "laptop:pt-12"
        )}
      >
        <h1
          className={clsx(
            "relative text-center font-bold text-lg mb-4",
            "phoneM:text-xl",
            "phoneL:text-2xl",
            "tablet:text-4xl tablet:mb-8",
            "laptop:text-5xl laptop:mb-12",
            "after:absolute after:content[' '] after:-bottom-1 after:left-[10%] after:right-[10%] after:h-1 after:bg-black",
            "after:tablet:-bottom-3",
            "after:laptop:-bottom-4 after:laptop:h-2"
          )}
        >
          Quelques sites que j&apos;ai développés
        </h1>

        <div
          className={clsx(
            "grid grid-cols-1",
            "tablet:grid-cols-2",
            "laptop:grid-cols-3"
          )}
        >
          {websitesList}
          {limitWebsites < props.websites.length && (
            <div
              className={clsx(
                "text-center",
                "tablet:col-span-2",
                "laptop:col-span-3"
              )}
            >
              <Button
                onClick={displayMoreWebsites}
                className={clsx("bg-projects2 text-xl")}
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
          "tablet:pt-8",
          "laptop:pt-12"
        )}
      >
        <h1
          className={clsx(
            "relative text-center font-bold text-lg mb-4",
            "phoneM:text-xl",
            "phoneL:text-2xl",
            "tablet:text-4xl tablet:mb-8",
            "laptop:text-5xl laptop:mb-12",
            "after:absolute after:content[' '] after:-bottom-1 after:left-[10%] after:right-[10%] after:h-1 after:bg-black",
            "after:tablet:-bottom-3",
            "after:laptop:-bottom-4 after:laptop:h-2"
          )}
        >
          D&apos;autres projets que j&apos;ai réalisés
        </h1>
        <div
          className={clsx(
            "grid grid-cols-1 pb-[50px]",
            "tablet:grid-cols-2",
            "laptop:grid-cols-3"
          )}
        >
          {projectsList}
          {limitProjects < props.projects.length && (
            <div
              className={clsx(
                "text-center",
                "tablet:col-span-2",
                "laptop:col-span-3"
              )}
            >
              <Button
                onClick={displayMoreProjects}
                className={clsx("bg-projects2 text-xl")}
              >
                Afficher plus...
              </Button>
            </div>
          )}
        </div>
      </div>
      <WaveBottom2 className="fill-contacts1" />
    </section>
  );
};
