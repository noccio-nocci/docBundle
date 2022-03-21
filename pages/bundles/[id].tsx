// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useModal } from "react-hooks-use-modal"
import { db } from "../../utils/firebase/firebase"
import { useAuthState } from "../../hooks/useAuthState";

import { PlasmicHomepage } from "../../components/plasmic/doc_bundle/PlasmicHomepage";
import DocumentFrame from "../../components/DocumentFrame";
import { PlasmicDocInfoModal } from "../../components/plasmic/doc_bundle/PlasmicDocInfoModal"
import { DoumentRowDotProps } from "../../components/DoumentRowDot";

// index同様の悩み。どこに置くべき？
import { onSnapshot, collection, serverTimestamp, query, where, orderBy, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// TODO: 編集権限をownerに留めるか、みんなにするか。　それを選ばせるか？isPrivの下にチェックを追加。

import { BookValues } from "../index";
export type DocValues = {
  id: string;
  name: string;
  url: string;
  color: DoumentRowDotProps["color"];
  isPriv: boolean;
};

function Bundle() {
  const { userId, domain, isLoading } = useAuthState();
  const router = useRouter();
  const id = router.query.id as string;

  const [book, setBook] = useState();
  const [docs, setDocs] = useState([]);
  const [url, setUrl] = React.useState("")

  useEffect(() => {
    const bookRef = collection(db, 'bundles', id);
    const unSub = onSnapshot(bookRef,
    (querySnapshot) => {
      setBook(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})));
    });
    return () => unSub();
  }, []);

  return (
    <>
      <PlasmicHomepage
        bundlesList={{
          render: () => null
        }}
        sideBarLogo={{
          onClick: () => router.push('/')
        }}
        sideBarBookTitle={{
          bundleTitle: "あいうえおあいうえお\nあいうえおあいう\nえおあいうえおあいうえおあいうえお"
        }}
        rightPane={{
          wrapChildren: (children) => (
            <>
              {children}
              {url ? (
                <DocumentFrame src="https://docs.google.com/document/d/1SbHw9hZ-_K50q0VJsPW-MsVqdfRmSZRnkb2OtZKX3dY/edit?usp=sharing" />
              ) : (
                <></>
              )}
            </>
          )
        }}
      />
    </>
  );
}

export default Bundle;
