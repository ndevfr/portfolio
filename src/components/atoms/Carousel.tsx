import { useState, useEffect } from "react";
import Image from "next/image";
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

type slideCarousel = {
  image: string;
  alt: string;
  description: string;
};

type CarouselProps = {
  timer: number;
  elements: slideCarousel[];
  className?: string;
};

export const Carousel = ({ timer, elements, className }: CarouselProps) => {
  const [actual, setActual] = useState(1);
  const [animation, setAnimation] = useState(true);
  const [pause, setPause] = useState(false);
  const time = 1000 * timer;

  useEffect(() => {
    const next = actual === elements.length ? 1 : actual + 1;
    const id = setTimeout(() => {
      if (!pause) {
        setAnimation(true);
        setActual(next);
      }
    }, time);
    return () => clearTimeout(id);
  }, [actual, pause]);

  const prevSlide = () => {
    return actual === 1 ? elements.length : actual - 1;
  };

  const jumpSlide = (slide: number) => {
    setAnimation(false);
    setActual(slide);
  };

  const buttonsIndicator = elements.map((element, index) => (
    <button
      type="button"
      onClick={() => jumpSlide(index + 1)}
      className={clsx(
        "mx-[5px] box-content h-[10px] w-[20px] flex-initial cursor-pointer border-0 border-solid bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none rounded-full",
        {
          "opacity-50": index + 1 !== actual,
          "opacity-100": index + 1 === actual,
        }
      )}
      key={"button" + (index + 1)}
    ></button>
  ));

  const slidesCarousel = elements.map((element, index) => (
    <div
      className={clsx("relative float-left -mr-[100%] w-full z-1", {
        "transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none":
          animation,
        "translate-x-full z-10":
          index + 1 !== prevSlide() && index + 1 !== actual,
        "block -translate-x-[100%] z-30": index + 1 === prevSlide(),
        "block -translate-x-0 z-40": index + 1 === actual,
      })}
      style={{ backfaceVisibility: "hidden" }}
      key={"slide" + (index + 1)}
    >
      <Image
        src={"/lockee/" + element.image}
        className="block w-full"
        width="800"
        height="533"
        loading={index == 0 ? "eager" : "lazy"}
        alt={element.alt}
      />
      <div
        className={clsx(
          "flex flex-wrap absolute justify-center items-center w-full h-[calc(2em_+_30px)] pb-[20px] bottom-0 bg-btmgradient/75 text-white font-bold text-xs",
          "phoneM:text-sm",
          "phoneL:text-base",
          "tablet:text-2xl",
          "laptop:text-2xl"
        )}
      >
        <div className="text-center text-white flex flex-col items-end">
          <p>{element.description}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div
        className={clsx(
          "relative drop-shadow-md border-2 border-black rounded-6",
          className
        )}
        /* onMouseOver={() => setPause(true)}
        onMouseLeave={() => setPause(false)} */
      >
        <div className="absolute left-0 right-0 bottom-[3px] z-[50] text-center">
          <div>{buttonsIndicator}</div>
        </div>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {slidesCarousel}
        </div>
      </div>
    </>
  );
};
