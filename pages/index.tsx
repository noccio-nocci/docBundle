// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {useState, useEffect} from "react";
import { useModal } from "react-hooks-use-modal"
import { db } from "../utils/firebase/firebase"
import { useAuthState } from "../hooks/useAuthState";

import { PlasmicHomepage } from "../components/plasmic/doc_bundle/PlasmicHomepage";
import BookInfoModal from "../components/BookInfoModal"


// model関係はどこにまとめるのがよいのか？　一旦ここに書いておこう
import { onSnapshot, collection, serverTimestamp, query, where, orderBy, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import Book, {BookProps} from "../components/Book";
import { Router, useRouter } from "next/router";
import AddBook from "../components/AddBook";

export type BookValues = {
  id: string;
  owner: string;
  name: string;
  color: BookProps["color"];
  isPriv: boolean;
  docs: list<DocValues>;
}
export const INITIAL_BOOK_VALUE: BookValues = {
  id: "",
  owner: "",
  name: "",
  color: "_1",
  isPriv: true,
  docs: [],
}
export type DocValues = {
  id: string;
  name: string;
  url: string;
  color: DoumentRowDotProps["color"];
  docs: list<DocValues>;
};
export const INITIAL_DOC_VALUE: DocValues ={
  id: "",
  name: "",
  url: "",
  color: "_1",
  docs: []
}

function Homepage() {
  const { userId, domain, isLoading } = useAuthState();
  const router = useRouter();
  const [Modal, open, close, isOpen] = useModal('__next', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const [books, setBooks] = useState<BookValues[]>([]);
  
  useEffect(() => {
      const booksRef =
        query(
          collection(db, 'bundles'),
          where("domain", "==", domain||""),
          where("viewKeys", "array-contains-any", ['PUB', userId||""]),
          orderBy("updated_at", "desc")
        );
      const unSub = onSnapshot(booksRef,
      (querySnapshot) => {
        setBooks(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})));
      });
    return () => unSub();
  }, [domain, isLoading, userId]);

  const [book, setBook] = useState<BookValues>(INITIAL_BOOK_VALUE);

  const openEditBookModal = (e: BookValues) => {
    setBook({
      id: e.id,
      owner: e.owner,
      name: e.name,
      color: e.color,
      isPriv: e.isPriv
    });
    open();
  }
  const openAddBookModal = () => {
    setBook(INITIAL_BOOK_VALUE);
    open();
  }
  const removeBook = () => {
    if (!!book.id) {
      const docRef = doc(db, 'bundles', book.id);
      deleteDoc(docRef);
    }
    close();
  }

  const saveBook = () => {
    if (!!!book.name) {
      return;
    }
    // new
    if (book.id==="") {
      addDoc(collection(db, 'bundles'), {
        owner: userId,
        name: book.name,
        color: book.color,
        isPriv: book.isPriv,
        domain: domain,
        viewKeys: [(book.isPriv ? "PRIV" : "PUB"), userId],
        updated_at: serverTimestamp(),
        created_at: serverTimestamp(),
      });
    }
    // update
    else {
      const docRef = doc(db, 'bundles', book.id);
      updateDoc(docRef, {
        name: book.name,
        color: book.color,
        isPriv: book.isPriv,
        viewKeys: [(book.isPriv ? "PRIV" : "PUB"), userId],
        updated_at: serverTimestamp(),        
      });
    }
    close();
  }

  return (
    <>
      <PlasmicHomepage 
        sideBarDocsArea={{
          render: () => null
        }}
        allList={{
          list: books?.map((book: BookValues) => (
            <Book
              key={book.id || "NULL"}
              title={{wrap: () => book.name}}
              locked={book.isPriv}
              color={book.color}
              onClick={() => router.push('/bundles/' + book.id)}
              onContextMenu={(ev: React.MouseEvent<HTMLButtonElement>) => {ev.preventDefault();}}
            />
          ))
        }}
        ownList={{
          list: books
            .filter((book: BookValues) => book.owner === userId)
            ?.map((book: BookValues) => (
              <Book
                key={book.id || "NULL"}
                title={{wrap: () => book.name}}
                locked={book.isPriv}
                color={book.color}
                onClick={() => router.push('/bundles/' + book.id)}
                onContextMenu={(ev: React.MouseEvent<HTMLButtonElement>) => {ev.preventDefault(); openEditBookModal(book);}}
                />
            )).concat((
              <AddBook 
                key="addbook"
                onClick={() => openAddBookModal()}
                onContextMenu={(ev: React.MouseEvent<HTMLButtonElement>) => {ev.preventDefault(); openAddBookModal();}}
              />            
            ))
        }}
      />
      <Modal>
        <BookInfoModal 
          closeButton={{
            onClick: () => {close();}
          }}
          textarea={{
            value:book.name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {setBook({...book, name:e.target.value});}
          }}
          colorPicker={{
            props: {
              color: book.color,
              // クリックされた子コンポーネントのpropsを勝手にセットしたいし、
              // 子コンポーネント追加するたびに、こちらのコードも追加するのが気持ち悪い。
              dot1: {onClick:()=>{setBook({...book, color:'_1'})}},
              dot2: {onClick:()=>{setBook({...book, color:'_2'})}},
              dot3: {onClick:()=>{setBook({...book, color:'_3'})}},
              dot4: {onClick:()=>{setBook({...book, color:'_4'})}},
              dot5: {onClick:()=>{setBook({...book, color:'_5'})}},
              dot6: {onClick:()=>{setBook({...book, color:'_6'})}},
              dot7: {onClick:()=>{setBook({...book, color:'_7'})}},
            }
          }}
          bookIconOnly={{
            props: {
              color: book.color
            }
          }}
          isPriv={{
            props: {
              isChecked: book.isPriv,
              onChange:(e: boolean) => {setBook({...book, isPriv:e});}
            }
          }}
          ok={{
            onClick:() => {saveBook();}
          }}
          remove={{
            render: (props: any, Component:any) => (book.id==="" ? null : <Component {...props} />),
            props: {
              onClick:()=> {removeBook();}
            }
          }}
        />
      </Modal>
    </>
  );
}

export default Homepage;
