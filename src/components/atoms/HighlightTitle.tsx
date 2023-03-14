import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

/**
 * Simple button for the application
 *
 * @param props All props that a h1 can take
 * @param children Children of the button
 * @param className Class name of the button
 * @returns {JSX.Element}
 * @constructor
 */

type HighlightTitleProps = ComponentPropsWithoutRef<"h1">;

export const HighlightTitle = ({
  children,
  className,
  ...props
}: HighlightTitleProps) => {
  return (
    <h1
      className={clsx(
        "inline-block relative text-black mx-[0.3rem] text-left font-bold text-lg",
        "phoneM:text-xl",
        "phoneL:text-2xl",
        "tablet:text-3xl",
        "laptop:text-4xl",
        "desktop:text-5xl py-4",
        "dark:text-white",
        className
      )}
    >
      <span
        className={clsx(
          "absolute bottom-[1rem] -left-[0.3rem] -right-[0.3rem] h-[0.7rem] bg-highlight z-0",
          "tablet:h-[0.8rem]",
          "dark:bg-darkhighlight"
        )}
      ></span>
      <span className={clsx("relative z-10")}>{children}</span>
    </h1>
  );
};
