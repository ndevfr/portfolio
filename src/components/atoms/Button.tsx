import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

/**
 * Simple button for the application
 *
 * @param props All props that a button can take
 * @param children Children of the button
 * @param className Class name of the button
 * @returns {JSX.Element}
 * @constructor
 */

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-block px-6 py-2 rounded-full border-2 border-black text-base font-bold text-white transition my-2",
        "focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50",
        "disabled:cursor-not-allowed disabled:bg-gray-400 dark:disabled:bg-gray-600",
        className,
        {
          "hover:scale-95  hover:shadow-sm": !disabled,
          "active:bg-primary active:opacity-80": !disabled,
        }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
