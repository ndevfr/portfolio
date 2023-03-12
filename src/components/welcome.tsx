import clsx from "clsx";
import { FiArrowDownCircle } from "react-icons/fi";
import { AleaMessage } from "@/components/atoms/AleaMessage";

export const Welcome = () => {
  return (
    <section
      id="welcome"
      className={clsx(
        "flex items-center w-full min-h-full snap-start snap-always bg-welcome1 text-white"
      )}
    >
      <div
        className={clsx(
          "container flex flex-col items-center justify-center min-h-full mx-auto py-4 gap-4",
          "phoneM:gap-6",
          "phoneL:gap-8",
          "tablet:py-8 gap-10",
          "laptop:py-12 gap-12"
        )}
      >
        <h1
          className={clsx(
            "text-center text-xl",
            "phoneM:text-2xl",
            "phoneL:text-3xl",
            "tablet:text-4xl",
            "laptop:text-5xl",
            "desktop:text-6xl"
          )}
        >
          Bonjour, je suis{" "}
          <span
            className={clsx(
              "relative inline-block mx-2 mt-10 p-1 text-white",
              "before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-navbar1 before:rounded"
            )}
          >
            <span className={clsx("block relative text-white")}>Nicolas</span>
          </span>
        </h1>

        <p
          className={clsx(
            "text-center text-navbar1 italic text-sm",
            "phoneM:text-lg",
            "phoneL:text-xl",
            "tablet:text-3xl",
            "laptop:text-4xl",
            "desktop:text-5xl"
          )}
        >
          &lt; un développeur web passionné /&gt;
        </p>
        <AleaMessage />
        <p
          className={clsx(
            "text-center text-sm",
            "phoneM:text-lg",
            "phoneL:text-xl",
            "tablet:text-2xl",
            "laptop:text-3xl",
            "desktop:text-4xl"
          )}
        >
          Scrollez vers le bas pour en savoir plus...
        </p>
        <p
          className={clsx(
            "animate-mybounce text-xl my-4",
            "phoneM:text-2xl",
            "phoneL:text-3xl",
            "tablet:text-4xl",
            "laptop:text-5xl",
            "desktop:text-6xl"
          )}
        >
          <FiArrowDownCircle />
        </p>
      </div>
    </section>
  );
};
