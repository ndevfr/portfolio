import clsx from "clsx";
import { HtmlIcon } from "./svgs/Html";
import { CssIcon } from "./svgs/Css";
import { JavascriptIcon } from "./svgs/Javascript";
import { ReactIcon } from "./svgs/React";
import { BootstrapIcon } from "./svgs/Bootstrap";
import { TailwindIcon } from "./svgs/Tailwind";
import { SassIcon } from "./svgs/Sass";
import { TypescriptIcon } from "./svgs/Typescript";
import { PhpIcon } from "./svgs/Php";
import { LaravelIcon } from "./svgs/Laravel";
import { NodejsIcon } from "./svgs/Nodejs";
import { MysqlIcon } from "./svgs/Mysql";
import { NextjsIcon } from "./svgs/Nextjs";
import { WordpressIcon } from "./svgs/Wordpress";
import { GitIcon } from "./svgs/Git";
import { FigmaIcon } from "./svgs/Figma";
import { VscodeIcon } from "./svgs/Vscode";
import { DesignerIcon } from "./svgs/Designer";
import { CopilotIcon } from "./svgs/Copilot";
import { VueIcon } from "./svgs/Vue";
import { NuxtjsIcon } from "./svgs/Nuxtjs";
import { MongodbIcon } from "./svgs/Mongodb";
import { DockerIcon } from "./svgs/Docker";
import { SymfonyIcon } from "./svgs/Symfony";

/**
 * Simple button for the application
 *
 * @param props All props that a button can take
 * @param children Children of the button
 * @param className Class name of the button
 * @returns {JSX.Element}
 * @constructor
 */

type SvgIconProps = {
  id: string;
};

type TechnologieIconProps = {
  id: string;
  title: string;
  icon: string;
};

const SvgIcon = ({ id }: SvgIconProps) => {
  switch (id) {
    case "html":
      return <HtmlIcon />;
    case "css":
      return <CssIcon />;
    case "javascript":
      return <JavascriptIcon />;
    case "react":
      return <ReactIcon />;
    case "bootstrap":
      return <BootstrapIcon />;
    case "tailwind":
      return <TailwindIcon />;
    case "sass":
      return <SassIcon />;
    case "typescript":
      return <TypescriptIcon />;
    case "php":
      return <PhpIcon />;
    case "laravel":
      return <LaravelIcon />;
    case "symfony":
      return <SymfonyIcon />;
    case "nodejs":
      return <NodejsIcon />;
    case "mysql":
      return <MysqlIcon />;
    case "nextjs":
      return <NextjsIcon />;
    case "wordpress":
      return <WordpressIcon />;
    case "git":
      return <GitIcon />;
    case "vscode":
      return <VscodeIcon />;
    case "figma":
      return <FigmaIcon />;
    case "designer":
      return <DesignerIcon />;
    case "copilot":
      return <CopilotIcon />;
    case "vue":
      return <VueIcon />;
    case "nuxtjs":
      return <NuxtjsIcon />;
    case "mongodb":
      return <MongodbIcon />;
    case "docker":
      return <DockerIcon />;
    default:
      return <HtmlIcon />;
  }
};

export const TechnologieIcon = ({ id, title, icon }: TechnologieIconProps) => {
  return (
    <div
      title={title}
      key={id}
      className={clsx(
        "flex flex-col items-center justify-top rounded-md p-4 group text-normal transition-transform"
      )}
    >
      <>
        <SvgIcon id={icon} />
        <div className="flex flex-col space-y-1 items-center justify-center mt-2">
          <p className="truncate text-[0.7em] font-medium text-balance text-center select-all leading-normal">
            {title.split(" ").length > 1 ? (
              <>
                {title.split(" ")[0]}
                <br />
                {title.split(" ")[1]}
              </>
            ) : (
              title
            )}
          </p>{" "}
        </div>
      </>
    </div>
  );
};
