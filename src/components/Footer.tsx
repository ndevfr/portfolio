import clsx from "clsx";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className={clsx(
        "h-[100px] w-full bg-welcomeL text-technologiesL",
        "dark:bg-welcomeD dark:text-technologiesD"
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-end justify-center min-h-full container mx-auto px-4 text-base",
          "md:text-lg"
        )}
      >
        <p>© Copyright 2025 ndev.fr</p>
      </div>
    </footer>
  );
};
