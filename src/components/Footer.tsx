import clsx from "clsx";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className={clsx(
        "h-[100px] w-full bg-welcomeL text-contactsL",
        "dark:bg-welcomeD dark:text-contactsD"
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-end justify-center min-h-full container mx-auto px-4 text-base",
          "md:text-lg"
        )}
      >
        <p>© Copyright 2023 ndev.fr</p>
      </div>
    </footer>
  );
};
