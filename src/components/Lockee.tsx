import Link from "next/link";
import clsx from "clsx";
import { LOCKEE_SLIDES } from "./variables";
import { Carousel } from "./atoms/Carousel";

export const Lockee = () => {
  return (
    <section
      id="lockee"
      className={clsx(
        "w-full bg-lockeeL text-black text-lg relative",
        "md:text-3xl",
        "lg:text-4xl",
        "xl:text-5xl",
        "dark:bg-lockeeD dark:text-whiteD"
      )}
    >
      <div
        className={clsx(
          "container mx-auto flex flex-col items-center justify-center py-4",
          "md:py-8",
          "lg:py-12"
        )}
      >
        <h1
          className={clsx(
            "relative text-center font-bold text-lg mb-2",
            "xs:text-xl",
            "sm:text-2xl sm:mb-0",
            "md:text-4xl md:mb-2",
            "lg:text-5xl lg:mb-10",
            "after:absolute after:content[' '] after:-bottom-1 after:left-[10%] after:right-[10%] after:h-1 after:bg-black",
            "after:md:-bottom-3",
            "after:lg:-bottom-4 after:lg:h-2",
            "dark:after:bg-whiteD"
          )}
        >
          Créateur de Lockee.fr
        </h1>
        <div className="flex flex-row flex-wrap min-h-full">
          <div
            className={clsx(
              "text-lg px-4 py-4 snap-start max-w-[min(90vh,_600px)] mx-auto",
              "md:text-xl md:py-6",
              "lg:text-2xl lg:py-8 lg:order-2 lg:w-[350px] lg:items-center lg:flex lg:justify-center"
            )}
          >
            <p>
              Depuis 2019, je développe{" "}
              <Link
                href="https://lockee.fr"
                target="blank"
                className={clsx("underline")}
              >
                Lockee.fr
              </Link>
              , une plateforme de cadenas virtuels en ligne. Ce site internet
              permet notamment de créer des escape game en classe sans matériel
              spécifique ou des jeux d'énigmes en ligne (comme le{" "}
              <Link
                href="https://lockee.fr/avent/"
                target="blank"
                className={clsx("underline")}
              >
                calendrier de l'Avent
              </Link>
              ). De nombreux types de cadenas sont disponibles.
            </p>
          </div>
          <div className={clsx("p-4 snap-start mx-auto", "xl:order-1")}>
            <Carousel
              timer={5}
              elements={LOCKEE_SLIDES}
              className={clsx(
                "max-w-[min(90vh,_600px)]",
                "lg:w-[600px]",
                "xl:w-[800px] xl:max-w-[min(90vh,_800px)]"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
