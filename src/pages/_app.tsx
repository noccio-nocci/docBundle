import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { CookiesProvider } from "react-cookie";
import Head from "next/head";

// TODO: PlasmicSigninForm呼ばないとsigninWithGooglebuttonのonClickが取れなかった・・・なぜ？気持ち悪い・・・・
import SigninForm from "../components/SigninForm";
import PlasmicSigninForm from "../components/plasmic/doc_bundle/PlasmicSigninForm";
import { useAuthState } from "../hooks/useAuthState";
import { signIn, signOut } from "../utils/firebase/auth";

const allowPages = ["/plasmic-host"];

const isAllowPage = (pathname: string) => {
  return !!!allowPages.indexOf(pathname);
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const { isSignedIn, isLoading } = useAuthState();

  return (
    <>
      <CookiesProvider>
        <Head>
          <title>docBundle</title>
        </Head>
        {isAllowPage(router.pathname) ? (
          <PlasmicRootProvider>
            <Component {...pageProps} />
          </PlasmicRootProvider>
        ) : isLoading ? (
          <></>
        ) : !isSignedIn ? (
          <PlasmicRootProvider>
            <PlasmicSigninForm
              signinWithGoogleButton={{
                onClick: () => signIn(),
              }}
            />
          </PlasmicRootProvider>
        ) : (
          <PlasmicRootProvider>
            <Component {...pageProps} />
          </PlasmicRootProvider>
        )}
      </CookiesProvider>
    </>
  );
}
export default MyApp;
