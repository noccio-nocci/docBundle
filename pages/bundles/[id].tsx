// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import { useAuthState } from "../../hooks/useAuthState";
import { signIn, signOut } from "../../utils/firebase/auth";

import { PlasmicHomepage } from "../../components/plasmic/doc_bundle/PlasmicHomepage";
import { PlasmicDocumentFrame} from "../../components/plasmic/doc_bundle/PlasmicDocumentFrame"

function Bundle() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <PlasmicHomepage
        bundlesList={{
          render: () => null
        }}
        sideBarLogo={{
          props: { onClick: () => router.push('/')}
        }}
        sideBarBookTitle={{
          props: {
            bundleTitle: "あいうえおあいうえお\nあいうえおあいう\nえおあいうえおあいうえおあいうえお"
          }
        }}
        rightPane={{
          wrapChildren: (children) => (
            <>
              {children}
              <PlasmicDocumentFrame src="https://docs.google.com/document/d/1SbHw9hZ-_K50q0VJsPW-MsVqdfRmSZRnkb2OtZKX3dY/edit?usp=sharing" />
            </>
          )
        }}
      />
    </>
  );
}

export default Bundle;
