import clsx from "clsx";
import { FiArrowDownCircle } from "react-icons/fi";
import { AleaMessage } from "@/components/atoms/AleaMessage";

export const Welcome = () => {
  return (
    <section
      id="welcome"
      className={clsx(
        "flex items-center w-full min-h-full bg-welcomeL text-white",
        "dark:bg-welcomeD dark:text-whiteD"
      )}
    >
      <div
        className={clsx(
          "container flex flex-col items-center justify-center min-h-full mx-auto py-4 gap-4",
          "xs:gap-6",
          "sm:gap-8",
          "md:py-8 md:gap-10",
          "lg:py-12 lg:gap-12"
        )}
      >
        <h1
          className={clsx(
            "text-center text-xl",
            "xs:text-2xl",
            "sm:text-3xl",
            "md:text-4xl",
            "lg:text-5xl",
            "xl:text-6xl"
          )}
        >
          Bonjour, je suis{" "}
          <span
            className={clsx(
              "relative inline-block mx-2 mt-10 p-1 text-white",
              "before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-navbarL before:rounded",
              "dark:before:bg-navbarD"
            )}
          >
            <span className={clsx("block relative text-white")}>Nicolas</span>
          </span>
        </h1>

        <p
          className={clsx(
            "text-center text-welcomeB italic text-sm",
            "xs:text-lg",
            "sm:text-xl",
            "md:text-3xl",
            "lg:text-4xl",
            "xl:text-5xl"
          )}
        >
          &lt; un développeur web passionné /&gt;
        </p>
        <AleaMessage />
        <p
          className={clsx(
            "text-center text-sm",
            "xs:text-lg",
            "sm:text-xl",
            "md:text-2xl",
            "lg:text-3xl",
            "xl:text-4xl"
          )}
        >
          Scrollez vers le bas pour en savoir plus...
        </p>
        <p
          className={clsx(
            "animate-mybounce text-xl my-4",
            "xs:text-2xl",
            "sm:text-3xl",
            "md:text-4xl",
            "lg:text-5xl",
            "xl:text-6xl"
          )}
        >
          <FiArrowDownCircle />
        </p>
      </div>
    </section>
  );
};
