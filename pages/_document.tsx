import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pl-PL">
      <Head>
        <meta
          name="google-site-verification"
          content="dBIvSiYiBUUkug3CFQ_f45bVw1eSHJkmlYlfh_jwAQ0"
        />
        <meta
          name="description"
          content="Pogwarancyjny serwis samochodowy. Jedną z podstawowych specjalizacji naszej firmy jest naprawa elektroniki i elektryki samochodowej. Oferujemy diagnostykę i naprawę systemów elektroniki motoryzacyjnej."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
