import Link from "next/link";
import clsx from "clsx";
import { LOCKEE_SLIDES } from "./variables";
import { Carousel } from "./atoms/Carousel";

export const Lockee = () => {
  return (
    <section
      id="lockee"
      className={clsx(
        "flex items-center w-full min-h-full snap-start snap-always bg-lockee1 text-black text-lg",
        "tablet:text-3xl",
        "laptop:text-4xl",
        "desktop:text-5xl"
      )}
    >
      <div
        className={clsx(
          "container mx-auto flex flex-col items-center justify-center snap-start py-4",
          "tablet:py-8",
          "laptop:py-12"
        )}
      >
        <h1
          className={clsx(
            "relative text-center font-bold text-lg mb-2",
            "phoneM:text-xl",
            "phoneL:text-2xl phoneL:mb-0",
            "tablet:text-4xl tablet:mb-2",
            "laptop:text-5xl laptop:mb-10",
            "after:absolute after:content[' '] after:-bottom-1 after:left-[10%] after:right-[10%] after:h-1 after:bg-black",
            "after:tablet:-bottom-3",
            "after:laptop:-bottom-4 after:laptop:h-2"
          )}
        >
          Créateur de Lockee.fr
        </h1>
        <div className="flex flex-row flex-wrap min-h-full">
          <div
            className={clsx(
              "text-lg px-4 py-4 snap-start max-w-[min(90vh,_600px)] mx-auto",
              "tablet:text-xl tablet:py-6",
              "laptop:text-2xl laptop:py-8 laptop:order-2 laptop:w-[350px] laptop:items-center laptop:flex laptop:justify-center"
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
          <div className={clsx("p-4 snap-start mx-auto", "desktop:order-1")}>
            <Carousel
              timer={5}
              elements={LOCKEE_SLIDES}
              className={clsx(
                "max-w-[min(90vh,_600px)]",
                "laptop:w-[600px]",
                "desktop:w-[800px] desktop:max-w-[min(90vh,_800px)]"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
