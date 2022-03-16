import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import { auth, db, provider, storage } from "../firebase";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
    const [user, loggedin] = useAuthState(auth);
    const router = useRouter();
    
    useEffect(() => {
        if (!loggedin && !user && router.asPath !== "/login") {
            router.push("/login");
        }
        }, [user, router, loggedin]);

    return (
        <>
            <Head>
                <title>docBundle</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;