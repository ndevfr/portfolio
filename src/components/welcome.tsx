import { useState, useEffect, useRef } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { Open_Sans } from "next/font/google";
import { VARIABLES } from "./variables";

const FontTerminal = Open_Sans({ subsets: ["latin"], weight: ["400"] });

const texts = VARIABLES.TEXTS;
const aleas = VARIABLES.CHARS;

const AleaMessage = () => {
  const [msg, setMsg] = useState(0);
  const [letter, setLetter] = useState(-1);
  const [step, setStep] = useState(0);
  const [aff, setAff] = useState("");
  const [pause, setPause] = useState(false);
  const interval = useRef(0);

  const handleClickRestart = () => {
    setMsg(0);
    setLetter(-1);
    setStep(0);
    setAff("");
  };

  const handleClickPause = () => {
    setPause((current) => !current);
  };

  const handleClickNext = () => {
    setMsg((current) => (current < texts.length - 1 ? current + 1 : 0));
    setLetter(-1);
    setStep(0);
  };

  useEffect(() => {
    const updateMsg = () => {
      if (pause === false) {
        let affmsg = "";

        for (let i = 0; i < letter; i++) {
          affmsg += texts[msg][i];
        }

        /* if (letter < texts[msg].length) {
          if (texts[msg][letter] !== " ") {
            affmsg += aleas[Math.floor(Math.random() * aleas.length)];
          } else {
            affmsg += " ";
          }
        } */

        for (let i = letter; i < texts[msg].length; i++) {
          if (texts[msg][i] !== " ") {
            affmsg += aleas[Math.floor(Math.random() * aleas.length)];
          } else {
            affmsg += " ";
          }
        }

        setAff(affmsg);

        if (letter < texts[msg].length) {
          if (step === 1) {
            setLetter((current) => current + 1);
            setStep(0);
          } else {
            setStep((current) => current + 1);
          }
        } else if (letter === texts[msg].length) {
          if (step === 20) {
            if (msg < texts.length - 1) {
              setMsg(msg + 1);
              setLetter(-1);
              setStep(0);
            } else {
              window.clearInterval(interval.current);
            }
          } else {
            setStep((current) => current + 1);
          }
        }
      } else {
        setAff(texts[msg]);
        setLetter(-1);
        setStep(0);
      }
    };

    interval.current = window.setInterval(updateMsg, 50);
    return () => window.clearInterval(interval.current);
  }, [msg, letter, step, pause]);

  return (
    <div className="text-left text-sm phoneM:text-base phoneL:text-lg tablet:text-xl laptop:text-2xl desktop:text-3xl w-[80vw] shadow-md rounded-[7px] bg-terminalbackground text-[#EEEEEE] border border-terminalborder">
      <div className="flex flex-row items-center h-[26px] gap-[6px] px-[6px] w-full bg-terminalheader rounded-t-[6px]">
        <div
          onClick={handleClickRestart}
          title="Recommencer l'animation depuis le début"
          className="h-[14px] w-[14px] rounded-full bg-terminalclose cursor-pointer"
        ></div>
        <div
          onClick={handleClickPause}
          title={pause ? "Réactiver l'animation" : "Désactiver l'animation"}
          className="h-[14px] w-[14px] rounded-full bg-terminalminimize cursor-pointer"
        ></div>
        <div
          onClick={handleClickNext}
          title={
            msg < texts.length - 1
              ? "Aller au message suivant"
              : "Retourner au premier message"
          }
          className="h-[14px] w-[14px] rounded-full bg-terminalmaximize cursor-pointer"
        ></div>
      </div>
      <div className="p-2">
        <div className={FontTerminal.className}>
          <span className="text-navbar1">ndev.fr ~ % </span>
          {aff}
          <div className="inline-block h-[1em] w-[0.5em] ml-[0.1em] -mb-[0.06em] bg-terminalcursor"></div>
        </div>
      </div>
    </div>
  );
};

export const Welcome = () => {
  return (
    <section
      id="welcome"
      className="w-full h-full snap-start snap-always bg-welcome1 text-white"
    >
      <div className="container flex flex-col items-center justify-center min-h-full mx-auto py-4 tablet:py-8 laptop:py-12 gap-4 phoneM:gap-6 phoneL:gap-8 tablet:gap-10 laptop:gap-12">
        <h1 className="text-center text-xl phoneM:text-2xl phoneL:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl">
          Bonjour, je suis{" "}
          <span className="relative inline-block mx-2 mt-10 p-1 text-white before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-navbar1 before:rounded">
            <span className="block relative text-white">Nicolas</span>
          </span>
        </h1>

        <p className="text-center text-navbar1 italic text-sm phoneM:text-lg phoneL:text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl">
          &lt; un développeur web passionné /&gt;
        </p>
        <AleaMessage />
        <p className="text-center text-sm phoneM:text-lg phoneL:text-xl tablet:text-2xl laptop:text-3xl desktop:text-4xl">
          Scrollez vers le bas pour en savoir plus...
        </p>
        <p className="animate-mybounce text-xl phoneM:text-2xl phoneL:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl my-4">
          <FiArrowDownCircle />
        </p>
      </div>
    </section>
  );
};
