import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="h-screen h-screen-ios relative overflow-hidden bg-welcomeL dark:bg-welcomeD">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
