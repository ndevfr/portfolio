import Image from "next/image";
import { isVariableDeclaration } from "typescript";
import { VARIABLES } from "./variables";
import { ProjectTileProps, ProjectLinkProps } from "../types";
import { PropsWithChildren } from "react";

const Link = (props: PropsWithChildren<ProjectLinkProps>) => {
  if (props.href !== "") {
    return (
      <a
        href={props.href}
        target="blank"
        className="block relative drop-shadow-md border-2 border-black rounded-6"
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <a
        onClick={() => alertMessage(props.alert)}
        className="block relative drop-shadow-md border-2 border-black rounded-6 cursor-pointer"
      >
        {props.children}
      </a>
    );
  }
};

const alertMessage = (message: string) => {
  alert(message);
};

const ProjectTile = (props: ProjectTileProps) => {
  const labelsList = props.labels.map((element, index) => (
    <span
      className="text-xs px-3 py-1 rounded-full bg-navbar1 text-white border-2 border-black font-bold my-0 mx-1"
      key={props.id + "-label-" + index}
    >
      {element}
    </span>
  ));

  return (
    <Link href={props.href} alert={props.alert}>
      <Image
        src={props.capture}
        alt=""
        width="1500"
        height="1000"
        className="rounded-t-4"
      />
      <div className="flex absolute justify-center items-end w-full h-[80px] bottom-[80px] pb-[10px] bg-gradient-to-b from-topgradient/0 to-btmgradient/80">
        {labelsList}
      </div>
      <p className="flex flex-col w-full h-[80px] bg-welcome1 text-white justify-center items-center text-base text-center">
        <span className="text-xl font-bold">{props.title}</span>
        <span className="block w-full text-base italic">
          {props.description}
        </span>
        <span className="text-sm">
          {props.end !== ""
            ? `${props.start} - ${props.end}`
            : `${props.start}`}
        </span>
      </p>
    </Link>
  );
};

export const Projects = () => {
  const websitesList = VARIABLES["WEBSITES"].map((element) => (
    <ProjectTile {...element} key={element.id} />
  ));
  const projectsList = VARIABLES["PROJECTS"].map((element) => (
    <ProjectTile {...element} key={element.id} />
  ));
  return (
    <section
      id="projects"
      className="w-full min-h-full snap-start snap-always bg-projects1 text-black lg:text-5xl md:text-4xl sm:text-3xl text-lg"
    >
      <div className="container min-h-full mx-auto py-4 tablet:py-8 laptop:py-12 flex flex-col items-center justify-center gap-8">
        <h1 className="text-center font-bold text-lg phoneM:text-xl phoneL:text-2xl tablet:text-4xl laptop:text-5xl">
          Quelques sites que j&apos;ai développé
        </h1>
        <hr className="mx-auto border-0 border-b-3 border-b-black w-[80%]" />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 pb-[50px]">
          {websitesList}
        </div>
        <h1 className="text-center font-bold text-lg phoneM:text-xl phoneL:text-2xl tablet:text-4xl laptop:text-5xl">
          D&apos;autres projets que j&apos;ai réalisé
        </h1>
        <hr className="mx-auto border-0 border-b-3 border-b-black w-[80%]" />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 pb-[100px]">
          {projectsList}
        </div>
      </div>
    </section>
  );
};
