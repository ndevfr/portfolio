import { VARIABLES } from "./variables";
import { SocialLinkProps } from "../types";
import { FaLinkedin, FaEnvelopeSquare, FaShareAltSquare } from "react-icons/fa";

const SocialLink = (props: SocialLinkProps) => {
  return (
    <li key={props.id}>
      <a
        href={props.href}
        title={props.title}
        target="blank"
        className="flex items-center relative text-sm phoneM:text-lg phoneL:text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl hover:-translate-y-2 transition-transform"
      >
        <props.icon /> {props.title}
      </a>
    </li>
  );
};

export const Contacts = () => {
  const socialList = VARIABLES["SOCIAL"].map((element) => SocialLink(element));

  return (
    <section
      id="contacts"
      className="w-full h-[calc(100%_-_100px)] snap-start snap-always bg-contacts1 text-black"
    >
      <div className="container min-h-full mx-auto py-4 tablet:py-8 laptop:py-12 flex flex-col items-center justify-center gap-6 phoneM:gap-8 phoneL:gap-10 tablet:gap-12 laptop:gap-14 desktop:gap-16">
        <div>
          <h1 className="text-center text-xl font-semibold phoneM:text-2xl phoneL:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl mb-4">
            Prêts à travailler ensemble ?
          </h1>
          <p className="text-center text-sm phoneM:text-lg phoneL:text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl">
            N&apos;hésitez pas à me contacter...
          </p>
        </div>
        <ul className="flex flex-row gap-6 tablet:gap-10 desktop:gap-14">
          {socialList}
        </ul>
      </div>
    </section>
  );
};
