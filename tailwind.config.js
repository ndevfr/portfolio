/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      title: "0.5em",
    },
    borderRadius: {
      4: "4px",
      6: "6px",
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      colors: {
        navbarL: "#3444cc",
        navbarD: "#2C39AF",
        welcomeL: "#191923",
        welcomeD: "#0D0D12",
        welcomeB: "#5588ff",
        lockeeL: "#BBBBBB",
        lockeeD: "#333333",
        projectsL: "#2C8C99",
        projectsD: "#133D42",
        projectsbtnL: "#1B5860",
        projectsbtnD: "#0D2C30",
        technologiesL: "#CBBFBB",
        technologiesD: "#4E413C",
        contactsL: "#003f88",
        contactsD: "#002652",
        white: "#FDFDFD",
        whiteD: "rgba(253, 253, 253, 0.9)",
        black: "#191923",
        topgradient: "#969696",
        btmgradient: "#000000",
        highlightL: "#00bcd4",
        highlightD: "#00292E",
        terminalheader: "#3F3837",
        terminalbackground: "#1E1E1E",
        terminalcolor: "#FFFFFF",
        terminalcursor: "#929292",
        terminalborder: "#4B4B4B",
        terminalclose: "#FF6057",
        terminalmini: "#FEBC2E",
        terminalmaxi: "#26C940",
      },
      animation: {
        mybounce: "bounce 0.5s ease infinite alternate",
        skew: "skew 1s ease-in-out infinite",
      },
      keyframes: {
        mybounce: {
          "0%": { bottom: "40px" },
          "50%": { bottom: "60px" },
          "100%": { bottom: "40px" },
        },
      },
      typography: (theme) => ({
        project: {
          css: {
            h1: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            h2: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            h3: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            h4: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            h5: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            h6: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            p: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            ul: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            input: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            blockquote: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            li: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            table: {
              marginBottom: "0.5em !important",
              marginTop: "0.5em !important",
            },
            color: theme("colors.black"),
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-lead": theme("colors.black"),
            "--tw-prose-links": theme("colors.black"),
            "--tw-prose-bold": theme("colors.black"),
            "--tw-prose-counters": theme("colors.black"),
            "--tw-prose-bullets": theme("colors.black"),
            "--tw-prose-hr": theme("colors.black"),
            "--tw-prose-quotes": theme("colors.black"),
            "--tw-prose-quote-borders": theme("colors.black"),
            "--tw-prose-captions": theme("colors.black"),
            "--tw-prose-code": theme("colors.black"),
            "--tw-prose-pre-code": theme("colors.black"),
            "--tw-prose-pre-bg": theme("colors.black"),
            "--tw-prose-th-borders": theme("colors.black"),
            "--tw-prose-td-borders": theme("colors.black"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@rvxlab/tailwind-plugin-ios-full-height"),
  ],
};
