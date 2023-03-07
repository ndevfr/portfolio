import { FaLinkedin, FaEnvelopeSquare, FaShareAltSquare } from "react-icons/fa";

const TEXTS = [
  "Je code des sites internet depuis mes 15 ans",
  "Je suis fan d'escape-game et j'adore les énigmes",
  "Ce portfolio présente mes principales créations",
];

const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const WEBSITES = [
  {
    id: "ndevfr",
    title: "NDev.fr",
    description: "Portfolio personnel",
    href: "https://ndev.fr/",
    alert: "",
    capture: "/projects/ndevfr.png",
    start: "2023",
    end: "maintenant",
    labels: ["NextJs", "TypeScript", "TailwindCss"],
    story: "",
  },
  {
    id: "quordlefr",
    title: "Quordle (Fr)",
    description: "Fork français du jeu Quordle",
    href: "https://quordle.desmaths.fr/",
    alert: "",
    capture: "/projects/quordlefr.png",
    start: "2021",
    end: "maintenant",
    labels: ["Fork", "SolidJS", "TypeScript"],
    story: "",
  },
  {
    id: "qrdesmathsfr",
    title: "Qr.desmaths.fr",
    description: "Création de QR dynamiques",
    href: "https://qr.desmaths.fr/",
    alert: "",
    capture: "/projects/qrdesmathsfr.png",
    start: "2021",
    end: "maintenant",
    labels: ["HTML", "CSS", "JS", "PHP", "SQL"],
    story: "",
  },
  {
    id: "lockeeavent",
    title: "Lockee.fr/avent",
    description: "Calendrier de l'Avent d'énigmes",
    href: "https://lockee.fr/avent/",
    alert: "",
    capture: "/projects/lockeeavent.png",
    start: "2020",
    end: "maintenant",
    labels: ["HTML", "CSS", "JS", "PHP", "SQL"],
    story: "",
  },
  {
    id: "desmathsfr",
    title: "Desmaths.fr",
    description: "Blog personnel sur l'éducation",
    href: "https://www.desmaths.fr/",
    alert: "",
    capture: "/projects/desmathsfr.png",
    start: "2019",
    end: "maintenant",
    labels: ["Wordpress", "Theme"],
    story: "",
  },
  {
    id: "lockeefr",
    title: "Lockee.fr",
    description: "Plateforme de cadenas virtuels",
    href: "https://lockee.fr/",
    alert: "",
    capture: "/projects/lockeefr.png",
    start: "2018",
    end: "maintenant",
    labels: ["HTML", "CSS", "JS", "PHP", "SQL"],
    story: "",
  },
  {
    id: "vsftiralarcfr",
    title: "VSF Tir à l'arc",
    description: "Site officiel d'un club de sport",
    href: "https://www.vsftiralarc.fr/",
    alert: "",
    capture: "/projects/vsftiralarcfr.png",
    start: "2017",
    end: "maintenant",
    labels: ["Wordpress", "Plugin", "Theme"],
    story: "",
  },
  {
    id: "lafouacedemilecom",
    title: "La Fouace d'Emile",
    description: "Site officiel d'une pâtisserie",
    href: "https://web.archive.org/web/20081004225602/http://www.lafouacedemile.com/",
    alert: "",
    capture: "/projects/lafouacedemilecom.png",
    start: "2008",
    end: "2012",
    labels: ["Wordpress", "Theme", "Plugin"],
    story: "",
  },
  {
    id: "doonafr",
    title: "Doona.fr",
    description: "1er moteur de recherche à but humanitaire",
    href: "https://web.archive.org/web/20120314164304/http://www.doona.fr/.vsftiralarc.fr/",
    alert: "",
    capture: "/projects/doonafr.png",
    start: "2006",
    end: "2012",
    labels: ["HTML", "CSS", "JS", "PHP", "SQL"],
    story: "",
  },
];

const PROJECTS = [
  {
    id: "dicteenegociee",
    title: "Dictée négociée",
    description: "Générer des dictées négociées",
    href: "https://desmaths.fr/dicteenegociee/",
    alert: "",
    capture: "/projects/dicteenegociee.png",
    start: "2022",
    end: "",
    labels: ["React", "Bootstrap"],
    story: "",
  },
  {
    id: "dessinvirtuel",
    title: "Dessin virtuel",
    description: "Dessiner au-dessus d'une image",
    href: "https://lockee.fr/avent/objetstrouves/",
    alert: "",
    capture: "/projects/dessinvirtuel.png",
    start: "2022",
    end: "",
    labels: ["HTML", "CSS", "JS"],
    story: "",
  },
  {
    id: "nasacode",
    title: "Nasa Code",
    description: "Chiffrer un message comme la Nasa",
    href: "https://desmaths.fr/nasacode",
    alert: "",
    capture: "/projects/nasacode.png",
    start: "2021",
    end: "",
    labels: ["HTML", "CSS", "JS", "SVG"],
    story: "",
  },
  {
    id: "burgerquiz",
    title: "Burger Quiz",
    description: "Créer des Burger Quiz personnalisés",
    href: "https://desmaths.fr/jeux/burgerquiz",
    alert: "",
    capture: "/projects/burgerquiz.png",
    start: "2020",
    end: "",
    labels: ["HTML", "CSS", "JS", "CSV"],
    story: "",
  },
  {
    id: "gangoffour",
    title: "Gang of Four",
    description: "Jouer à Gang of Four en ligne",
    href: "",
    alert: "Lien non publié pour respecter les droits d'auteur du jeu",
    capture: "/projects/gangoffour.png",
    start: "2019",
    end: "",
    labels: ["NodeJs", "HTML", "CSS"],
    story: "",
  },
];

const SOCIAL = [
  {
    id: "bento",
    title: "Bento",
    href: "https://bento.me/ndev",
    icon: FaShareAltSquare,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ndevfr/",
    icon: FaLinkedin,
  },
  {
    id: "mail",
    title: "Mail",
    href: "mailto:ndev@mailo.com",
    icon: FaEnvelopeSquare,
  },
];

export const VARIABLES = { WEBSITES, PROJECTS, SOCIAL, TEXTS, CHARS };
