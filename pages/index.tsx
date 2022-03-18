// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {useState } from "react";
import firebase from "firebase/app";
import { useAuthState } from "../hooks/useAuthState";
import { signIn, signOut } from "../utils/firebase/auth";

import { PlasmicHomepage } from "../components/plasmic/doc_bundle/PlasmicHomepage";
import { PlasmicOverlay } from "../components/plasmic/doc_bundle/PlasmicOverlay";
import { PlasmicDocInfoModal } from "../components/plasmic/doc_bundle/PlasmicDocInfoModal"

function Homepage() {
  const [modal, setModal] = useState<Object | null>(null);
  
  const openAddBookModal = () => {
    setModal((
      <PlasmicOverlay 
        onClick={() => { setModal(null);}}
      />
    ));
  }

  return (
    <>
      <PlasmicHomepage 
        root={{
          wrapChildren: (children) => (
            <>
              {children}
              {modal && modal}
            </>
          )
        }}
        docs={{
          render: () => null
        }}
        addBook={{
          onClick: () => openAddBookModal()
        }}
      />
    </>
  );
}

export default Homepage;
