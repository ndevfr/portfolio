import clsx from "clsx";
import { SOCIAL } from "@/components/variables";
import { SocialLink } from "@/components/atoms/SocialLink";

export const Contacts = () => {
  const socialList = SOCIAL.map((element) => SocialLink(element));

  return (
    <section
      id="contacts"
      className={clsx(
        "w-full h-[calc(100%_-_100px)] bg-contactsL text-white",
        "dark:bg-contactsD dark:text-whiteD"
      )}
    >
      <div
        className={clsx(
          "container min-h-full mx-auto py-4 flex flex-col items-center justify-center gap-6",
          "xs:gap-8",
          "sm:gap-10",
          "md:py-8 gap-12",
          "lg:py-12 gap-14",
          "xl:gap-16"
        )}
      >
        <div>
          <h1
            className={clsx(
              "text-center text-xl font-semibold mb-4",
              "xs:text-2xl",
              "sm:text-3xl",
              "md:text-4xl",
              "lg:text-5xl",
              "xl:text-6xl"
            )}
          >
            Prêts à travailler ensemble ?
          </h1>
          <p
            className={clsx(
              "text-center text-sm",
              "xs:text-lg",
              "sm:text-xl",
              "md:text-3xl",
              "lg:text-4xl",
              "xl:text-5xl"
            )}
          >
            N&apos;hésitez pas à me contacter...
          </p>
        </div>
        <ul
          className={clsx(
            "flex flex-row gap-6 flex-wrap justify-center",
            "md:gap-10",
            "xl:gap-14"
          )}
        >
          {socialList}
        </ul>
      </div>
    </section>
  );
};
