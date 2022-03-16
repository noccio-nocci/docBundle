import { PlasmicLogin } from "../components/plasmic/doc_bundle/PlasmicLogin";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function signinWithGoogle() {
  firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

function Login() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
   }, [user, router]);

  return (
    <PlasmicLogin />
  );
}

export default Login;
