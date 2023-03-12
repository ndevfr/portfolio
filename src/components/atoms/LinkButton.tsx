import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
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

type LinkButtonProps = LinkProps & {
  className: string;
  activeClassName: string;
};

export const LinkButton = ({
  href,
  className,
  children,
  ...props
}: PropsWithChildren<LinkButtonProps>) => {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-block px-6 py-2 rounded-full border-2 border-black text-base font-bold text-white transition my-2",
        "focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50",
        "hover:scale-95  hover:shadow-sm",
        "active:bg-primary active:opacity-80",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
