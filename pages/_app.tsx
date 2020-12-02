import "bootstrap/dist/css/bootstrap.min.css";

import { AppProps } from "next/app";
import { GlobalStyle } from "../styles";
import Head from "next/head";
import Nav from "../components/nav";
import { useRouter } from "next/router";

function app({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="theme-color" content="#000000" />

        <meta name="title" content="2381 Robotics" />
        <meta
          name="keywords"
          content="2381, robotics, vex, vrc, vex change up, change up, robot events, website, 2381 website"
        />
        <meta
          name="description"
          content="2381 Robotics is a high school VEX robotics club run at Colonel By Secondary School in Ottawa, Canada."
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ColByPrincipal" />

        <meta name="og:title" content="2381 Robotics" />
        <meta name="og:url" content={"https://2381.tech" + router.pathname} />
        <meta
          name="og:description"
          content="2381 Robotics is a high school VEX robotics club run at Colonel By Secondary School in Ottawa, Canada."
        />
        <meta name="og:site_name" content="Index" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="https://2381.ca/images/ss5.jpg" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="root">
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default app;
