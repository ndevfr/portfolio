import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { TEXTS, CHARS } from "@/components/variables";

const texts = TEXTS;
const aleas = CHARS;

export const AleaMessage = () => {
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
    <div
      className={clsx(
        "text-left w-[80vw] shadow-md rounded-[7px] bg-terminalbackground text-[#EEEEEE] border border-terminalborder"
      )}
    >
      <div
        className={clsx(
          "flex flex-row items-center h-[26px] gap-[6px] px-[6px] w-full bg-terminalheader rounded-t-[6px]"
        )}
      >
        <div
          onClick={handleClickRestart}
          title="Recommencer l'animation depuis le début"
          className={clsx(
            "h-[14px] w-[14px] rounded-full bg-terminalclose cursor-pointer"
          )}
        ></div>
        <div
          onClick={handleClickPause}
          title={pause ? "Réactiver l'animation" : "Désactiver l'animation"}
          className={clsx(
            "h-[14px] w-[14px] rounded-full bg-terminalmini cursor-pointer"
          )}
        ></div>
        <div
          onClick={handleClickNext}
          title={
            msg < texts.length - 1
              ? "Aller au message suivant"
              : "Retourner au premier message"
          }
          className={clsx(
            "h-[14px] w-[14px] rounded-full bg-terminalmaxi cursor-pointer"
          )}
        ></div>
      </div>
      <div className="p-2">
        <div
          className={clsx(
            "font-mono text-xs",
            "xs:text-sm",
            "sm:text-base",
            "md:text-lg",
            "lg:text-xl",
            "xl:text-2xl"
          )}
        >
          <span className={clsx("text-welcomeB")}>ndev.fr ~ % </span>
          {aff}
          <div
            className={clsx(
              "inline-block h-[1em] w-[0.5em] ml-[0.1em] -mb-[0.06em] bg-terminalcursor"
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};
