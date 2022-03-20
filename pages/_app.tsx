import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import SigninForm from "../components/SigninForm";
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
            ):!isSignedIn ? (
                <PlasmicRootProvider>
                    <SigninForm
                        signinWithGoogleButton={{
                            props: { onClick: () => signIn()}
                        }}
                    />
                </PlasmicRootProvider>
            ):(
                <PlasmicRootProvider>
                    <Component {...pageProps} />
                </PlasmicRootProvider>
            )}
        </>
    );
}
export default MyApp;