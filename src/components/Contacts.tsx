import clsx from "clsx";
import { SOCIAL } from "@/components/variables";
import { SocialLink } from "@/components/atoms/SocialLink";

export const Contacts = () => {
  const socialList = SOCIAL.map((element) => SocialLink(element));

  return (
    <section
      id="contacts"
      className={
        "w-full h-[calc(100%_-_100px)] snap-start snap-always bg-contacts1 text-black"
      }
    >
      <div
        className={clsx(
          "container min-h-full mx-auto py-4 flex flex-col items-center justify-center gap-6",
          "phoneM:gap-8",
          "phoneL:gap-10",
          "tablet:py-8 gap-12",
          "laptop:py-12 gap-14",
          "desktop:gap-16"
        )}
      >
        <div>
          <h1
            className={clsx(
              "text-center text-xl font-semibold mb-4",
              "phoneM:text-2xl",
              "phoneL:text-3xl",
              "tablet:text-4xl",
              "laptop:text-5xl",
              "desktop:text-6xl"
            )}
          >
            Prêts à travailler ensemble ?
          </h1>
          <p
            className={clsx(
              "text-center text-sm",
              "phoneM:text-lg",
              "phoneL:text-xl",
              "tablet:text-3xl",
              "laptop:text-4xl",
              "desktop:text-5xl"
            )}
          >
            N&apos;hésitez pas à me contacter...
          </p>
        </div>
        <ul
          className={clsx(
            "flex flex-row gap-6",
            "tablet:gap-10",
            "desktop:gap-14"
          )}
        >
          {socialList}
        </ul>
      </div>
    </section>
  );
};
