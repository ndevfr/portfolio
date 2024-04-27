import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { StaticProps, ProjectProps } from "@/types";
import { getYear } from "@/utils/date";
import { Button } from "./atoms/Button";
import { FRONTEND, BACKEND, TOOLS } from "@/components/variables";
import { TechnologieIcon } from "./atoms/TechnologieIcon";

const frontendList = FRONTEND.map((element) => TechnologieIcon(element));
const backendList = BACKEND.map((element) => TechnologieIcon(element));
const toolsList = TOOLS.map((element) => TechnologieIcon(element));

export const Technologies = () => {
  return (
    <section
      id="technologies"
      className={clsx(
        "w-full bg-technologiesL text-black text-lg",
        "md:text-3xl",
        "lg:text-4xl",
        "xl:text-5xl",
        "dark:bg-technologiesD dark:text-whiteD"
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
          Les technologies que je maîtrise
        </h1>

        <h2
          className={clsx(
            "relative text-center font-bold mb-2",
            "md:mb-4",
            "lg:mb-6"
          )}
        >
          Front-end
        </h2>

        <div
          className={clsx(
            "w-full flex flex-wrap justify-center text-lg",
            "xs:text-xl",
            "sm:text-2xl"
          )}
        >
          {frontendList}
        </div>

        <h2
          className={clsx(
            "relative text-center font-bold mb-2",
            "md:mb-4",
            "lg:mb-6"
          )}
        >
          Back-end
        </h2>

        <div
          className={clsx(
            "w-full flex flex-wrap justify-center text-lg",
            "xs:text-xl",
            "sm:text-2xl"
          )}
        >
          {backendList}
        </div>

        <h2
          className={clsx(
            "relative text-center font-bold mb-2",
            "md:mb-4",
            "lg:mb-6"
          )}
        >
          Outils
        </h2>

        <div
          className={clsx(
            "w-full flex flex-wrap justify-center text-lg",
            "xs:text-xl",
            "sm:text-2xl"
          )}
        >
          {toolsList}
        </div>
      </div>
    </section>
  );
};
