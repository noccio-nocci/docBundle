import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useModal } from "react-hooks-use-modal";
import { useCookies } from "react-cookie";

import { db } from "../../utils/firebase/firebase";
import { useAuthState } from "../../hooks/useAuthState";

import { PlasmicHomepage } from "../../components/plasmic/doc_bundle/PlasmicHomepage";
import DocumentFrame from "../../components/DocumentFrame";
import BookInfoModal from "../../components/BookInfoModal";
import DocInfoModal from "../../components/DocInfoModal";
import DocumentRow from "../../components/DocumentRow";
import DraggableListView from "../../components/DraggableListView";
import DocumentSection from "../../components/DocumentSection";
import AddStock from "../../components/AddStock";

// Plasmic***InfoModalにしないとtextareaとかinputの参照がうまく行かない・・・
// ***InfoModalのPropsに追加したいのだが、typeof HTMLInputElementとかではできなかった・・・
import PlasmicBookInfoModal from "../../components/plasmic/doc_bundle/PlasmicBookInfoModal";
import PlasmicDocInfoModal from "../../components/plasmic/doc_bundle/PlasmicDocInfoModal";

// TODO: DocumentRowの中のDocumentSectionのマウスイベントのバブリングがpriventDefault効いてない・・・

// index同様の悩み。どこに置くべき？
import {
  onSnapshot,
  collection,
  serverTimestamp,
  query,
  where,
  orderBy,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// TODO: 編集権限をownerに留めるか、みんなにするか。　それを選ばせるか？isPrivの下にチェックを追加。
import {
  BookValues,
  INITIAL_BOOK_VALUE,
  DocValues,
  INITIAL_DOC_VALUE,
} from "../index";
import Button from "../../components/Button";

function Bundle() {
  const { userId, domain, isLoading } = useAuthState();
  const router = useRouter();
  const [BookModal, bookModalOpen, bookModalClose, bookModalIsOpen] = useModal(
    "__next",
    {
      preventScroll: true,
      closeOnOverlayClick: false,
    }
  );
  const [DocModal, docModalOpen, docModalClose, docModalIsOpen] = useModal(
    "__next",
    {
      preventScroll: true,
      closeOnOverlayClick: false,
    }
  );

  const id = router.query.id as string;

  const [book, setBook] = useState<BookValues>(INITIAL_BOOK_VALUE);
  const [docs, setDocs] = useState<DocValues>(INITIAL_DOC_VALUE);
  const [url, setUrl] = useState("");
  const [docsRef, setDocsRef] = useState<DocValues>(INITIAL_DOC_VALUE);
  const [flipCookie, setFlipCookie, removeFlipCookie] = useCookies();

  type FlipValues = {
    [name: string]: boolean;
  };
  const [flip, setFlip] = useState<FlipValues>({});

  useEffect(() => {
    const bookRef = doc(db, "bundles", id);
    const unSub = onSnapshot(bookRef, (querySnapshot) => {
      const data = { ...(querySnapshot.data() as BookValues), id: id };
      setBook(data);
    });
    return () => unSub();
  }, [id]);
  useEffect(() => {
    if (!!book.id) {
      loadFlipSection();
    }
  }, [book]);

  const openAddDocModal = () => {
    setDocs(INITIAL_DOC_VALUE);
    docModalOpen();
  };

  const openEditDocModal = (e: DocValues) => {
    setDocsRef(e);
    setDocs({
      name: e.name,
      url: e.url,
      color: e.color,
      idx: e.idx,
      docs: [],
    });
    docModalOpen();
  };

  // 一旦index.tsxからコピペ！！　どこかにまとめる。
  const saveBook = () => {
    if (!!!book.name) {
      return;
    }
    const docRef = doc(db, "bundles", book.id);
    updateDoc(docRef, {
      name: book.name,
      color: book.color,
      isPriv: book.isPriv,
      viewKeys: [book.isPriv ? "PRIV" : "PUB", userId],
      updated_at: serverTimestamp(),
    });
    bookModalClose();
  };

  const saveDoc = () => {
    if (!!!docs.name) return;

    const docRef = doc(db, "bundles", book.id);
    // new
    if (docs.idx === 0) {
      const data = {
        idx: book.counter + 1,
        name: docs.name,
        color: docs.color,
        url: docs.url,
        docs: [],
      };
      book.counter++;
      if (!!book.docs) {
        book.docs.push(data);
      } else {
        book.docs = [data];
      }
      updateDoc(docRef, {
        counter: book.counter,
        docs: book.docs,
        updated_at: serverTimestamp(),
      });
    }
    // update
    else {
      //book.docs
      docsRef.name = docs.name;
      docsRef.url = docs.url;
      docsRef.color = docs.color;
      updateDoc(docRef, {
        counter: book.counter,
        updated_at: serverTimestamp(),
        docs: book.docs,
      });
    }
    docModalClose();
  };

  const removeDoc = () => {
    const docRef = doc(db, "bundles", book.id);
    // confirmationmodal出したい
    const newDocs = book.docs.filter((d) => d.idx != docs.idx);
    updateDoc(docRef, {
      updated_at: serverTimestamp(),
      docs: newDocs,
    });
    docModalClose();
  };

  const flipSection = (docid: string, key: string) => {
    const nextFlips = { ...flip, [key]: !!!flip[key] };
    setFlip((prev) => nextFlips);
    setFlipCookie(docid, nextFlips);
  };

  const loadFlipSection = () => {
    setFlip(flipCookie[book.id] || {});
  };

  return (
    <>
      <PlasmicHomepage
        bundlesList={{
          render: () => null,
        }}
        sideBarLogo={{
          onClick: () => router.push("/"),
        }}
        sideBarDocsArea={{
          addStock: {
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              openAddDocModal();
            },
          },
          sideBarBookTitle: {
            bundleTitle: book?.name,
            color: book?.color,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              if (book.owner == userId) {
                bookModalOpen();
              } else {
                e.preventDefault();
              }
            },
          },
          list: book?.docs?.map((doc: DocValues) =>
            doc.url ? (
              <DocumentRow
                key={doc.url}
                color={doc.color}
                name={doc.name}
                className={"draggable"}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  setUrl(doc.url);
                }}
                onContextMenu={(ev: React.MouseEvent<HTMLDivElement>) => {
                  ev.preventDefault();
                  openEditDocModal(doc);
                }}
              />
            ) : (
              <DocumentSection
                key={doc.idx}
                name={doc.name}
                color={doc.color}
                className={"draggable"}
                section={{
                  onContextMenu: (ev: React.MouseEvent<HTMLDivElement>) => {
                    console.log(ev);
                    ev.preventDefault();
                    openEditDocModal(doc);
                  },
                }}
                toggle={{
                  onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                    flipSection(book.id, doc.idx.toString());
                  },
                }}
                isClose={!!flip[doc.idx]}
                list={doc.docs?.map((cdoc: DocValues) => (
                  <DocumentRow
                    key={cdoc.url}
                    color={cdoc.color}
                    name={cdoc.name}
                    className={"draggable"}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      setUrl(cdoc.url);
                    }}
                    onContextMenu={(ev: React.MouseEvent<HTMLDivElement>) => {
                      console.log(ev);
                      ev.preventDefault();
                      openEditDocModal(cdoc);
                    }}
                  />
                ))}
              />
            )
          ),
        }}
        rightPane={{
          wrapChildren: (children) => (
            <>
              {children}
              {url ? <DocumentFrame src={url} /> : <></>}
            </>
          ),
        }}
      />
      <BookModal>
        <BookInfoModal
          disableRemove={true}
          closeButton={{
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              bookModalClose();
            },
          }}
          textarea={{
            value: book.name,
            onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setBook({ ...book, name: e.target.value });
            },
          }}
          colorPicker={{
            color: book.color,
            dot1: {
              onClick: () => {
                setBook({ ...book, color: "_1" });
              },
            },
            dot2: {
              onClick: () => {
                setBook({ ...book, color: "_2" });
              },
            },
            dot3: {
              onClick: () => {
                setBook({ ...book, color: "_3" });
              },
            },
            dot4: {
              onClick: () => {
                setBook({ ...book, color: "_4" });
              },
            },
            dot5: {
              onClick: () => {
                setBook({ ...book, color: "_5" });
              },
            },
            dot6: {
              onClick: () => {
                setBook({ ...book, color: "_6" });
              },
            },
            dot7: {
              onClick: () => {
                setBook({ ...book, color: "_7" });
              },
            },
          }}
          bookIconOnly={{
            color: book.color,
          }}
          isPriv={{
            isChecked: book.isPriv,
            onChange: (e: boolean) => {
              setBook({ ...book, isPriv: e });
            },
          }}
          ok={{
            onClick: () => {
              saveBook();
            },
          }}
        />
      </BookModal>

      <DocModal>
        <PlasmicDocInfoModal
          docTitle={{
            value: docs.name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setDocs({ ...docs, name: e.target.value });
            },
          }}
          docUrl={{
            props: {
              value: docs.url,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setDocs({ ...docs, url: e.target.value });
              },
            },
            render: (props: any, Component: any) =>
              docs.idx !== 0 && docs.url === "" ? null : (
                <Component {...props} />
              ),
          }}
          colorPicker={{
            props: {
              color: docs.color,
              // クリックされた子コンポーネントのpropsを勝手にセットしたいし、
              // 子コンポーネント追加するたびに、こちらのコードも追加するのが気持ち悪い。
              dot1: {
                onClick: () => {
                  setDocs({ ...docs, color: "_1" });
                },
              },
              dot2: {
                onClick: () => {
                  setDocs({ ...docs, color: "_2" });
                },
              },
              dot3: {
                onClick: () => {
                  setDocs({ ...docs, color: "_3" });
                },
              },
              dot4: {
                onClick: () => {
                  setDocs({ ...docs, color: "_4" });
                },
              },
              dot5: {
                onClick: () => {
                  setDocs({ ...docs, color: "_5" });
                },
              },
              dot6: {
                onClick: () => {
                  setDocs({ ...docs, color: "_6" });
                },
              },
              dot7: {
                onClick: () => {
                  setDocs({ ...docs, color: "_7" });
                },
              },
            },
          }}
          closeButton={{
            onClick: () => {
              docModalClose();
            },
          }}
          ok={{
            onClick: () => {
              saveDoc();
            },
          }}
          remove={{
            props: {
              onClick: () => {
                removeDoc();
              },
            },
            render: (props: any, Component: any) =>
              !!docs.idx ? <Component {...props} /> : null,
          }}
          isSection={
            (!!docs.name && !!!docs.url) || (docs.idx !== 0 && !!!docs.url)
              ? true
              : false
          }
        />
      </DocModal>
    </>
  );
}

export default Bundle;
