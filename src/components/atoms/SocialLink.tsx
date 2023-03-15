import clsx from "clsx";
import {
  SiSkype,
  SiTwitter,
  SiPinterest,
  SiReddit,
  SiSnapchat,
  SiTiktok,
  SiInstagram,
  SiYoutube,
  SiFacebook,
  SiMicrosoftteams,
  SiDiscord,
  SiTwitch,
  SiFigma,
  SiKofi,
  SiMastodon,
  SiPatreon,
  SiGithub,
  SiBehance,
  SiBuymeacoffee,
  SiGitlab,
  SiPaypal,
  SiLinkedin,
} from "react-icons/si";
import {
  FaPhoneSquareAlt,
  FaEnvelopeSquare,
  FaShareAltSquare,
} from "react-icons/fa";
/**
 * Simple button for the application
 *
 * @param props All props that a button can take
 * @param children Children of the button
 * @param className Class name of the button
 * @returns {JSX.Element}
 * @constructor
 */

type SocialIconProps = {
  id: string;
};

type SocialLinkProps = {
  id: string;
  title: string;
  href: string;
  icon: string;
};

const SocialIcon = ({ id }: SocialIconProps) => {
  switch (id) {
    case "mail":
      return <FaEnvelopeSquare />;
    case "phone":
      return <FaPhoneSquareAlt />;
    case "github":
      return <SiGithub />;
    case "linkedin":
      return <SiLinkedin />;
    case "facebook":
      return <SiFacebook />;
    case "youtube":
      return <SiYoutube />;
    case "instagram":
      return <SiInstagram />;
    case "tiktok":
      return <SiTiktok />;
    case "snapchat":
      return <SiSnapchat />;
    case "reddit":
      return <SiReddit />;
    case "pinterest":
      return <SiPinterest />;
    case "twitter":
      return <SiTwitter />;
    case "skype":
      return <SiSkype />;
    case "teams":
      return <SiMicrosoftteams />;
    case "discord":
      return <SiDiscord />;
    case "twitch":
      return <SiTwitch />;
    case "figma":
      return <SiFigma />;
    case "ko-fi":
      return <SiKofi />;
    case "patreon":
      return <SiPatreon />;
    case "mastodon":
      return <SiMastodon />;
    case "behance":
      return <SiBehance />;
    case "buymeacoffee":
      return <SiBuymeacoffee />;
    case "gitlab":
      return <SiGitlab />;
    case "paypal":
      return <SiPaypal />;
    default:
      return <FaShareAltSquare />;
  }
};

export const SocialLink = ({ id, title, href, icon }: SocialLinkProps) => {
  return (
    <li key={id}>
      <a
        href={href}
        title={title}
        target="blank"
        className={clsx(
          "flex items-center relative text-sm transition-transform",
          "xs:text-lg",
          "sm:text-xl",
          "md:text-3xl",
          "lg:text-4xl",
          "xl:text-5xl",
          "hover:-translate-y-2"
        )}
      >
        <>
          <SocialIcon id={icon} /> <span className={"ml-[0.2em]"}>{title}</span>
        </>
      </a>
    </li>
  );
};
