import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// TODO: PlasmicSigninForm呼ばなきゃいけないのが気持ち悪い・・・・
import SigninForm from "../components/SigninForm";
import PlasmicSigninForm from "../components/plasmic/doc_bundle/PlasmicSigninForm";
import { useAuthState } from "../hooks/useAuthState";
import { signIn, signOut } from "../utils/firebase/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const { isSignedIn, isLoading } = useAuthState();

  return (
    <>
      <Head>
        <title>docBundle</title>
      </Head>
      {isLoading ? (
        <></>
      ) : !isSignedIn ? (
        <PlasmicRootProvider>
          <PlasmicSigninForm
            signinWithGoogleButton={{
              props: { onClick: () => signIn() },
            }}
          />
        </PlasmicRootProvider>
      ) : (
        <PlasmicRootProvider>
          <Component {...pageProps} />
        </PlasmicRootProvider>
      )}
    </>
  );
}
export default MyApp;
