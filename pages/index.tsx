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
import Book from "../components/Book";
import { Router, useRouter } from "next/router";
import AddBook from "../components/AddBook";

export type BookValues = {
  id: string;
  owner: string;
  name: string;
  color: string;
  isPriv: boolean;
}
const INITIAL_BOOK_VALUE: BookValues = {
  id: "",
  owner: "",
  name: "",
  color: "_1",
  isPriv: true
}

function Homepage() {
  const { userId, domain, isLoading } = useAuthState();
  const router = useRouter();
  const [Modal, open, close, isOpen] = useModal('__next', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const [books, setBooks] = useState([INITIAL_BOOK_VALUE]);
  
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
        setBooks(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
      });
    return () => unSub();
  }, [isLoading]);

  const [book, setBook] = useState<BookValues>(INITIAL_BOOK_VALUE);

  const openEditBookModal = (e) => {
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
  const closeAddBookModal = () => {
    setBook(INITIAL_BOOK_VALUE);
    close();
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
        rightPane={{
        }}
        docs={{
          render: () => null
        }}
        allList={{
          list: books?.map((e) => (
            <Book
              key={e.id || "NULL"}
              children={e.name}
              locked={e.isPriv}
              color={e.color}
              onClick={() => router.push('/bundles/' + e.id)}
              onContextMenu={(ev) => {ev.preventDefault();}}
            />
          ))
        }}
        ownList={{
          list: books?
            .filter((e) => e.owner === userId)
            .map((e) => (
              <Book
                key={e.id || "NULL"}
                children={e.name}
                locked={e.isPriv}
                color={e.color}
                onClick={() => router.push('/bundles/' + e.id)}
                onContextMenu={(ev) => {ev.preventDefault(); openEditBookModal(e);}}
                />
            )).concat((
              <AddBook 
                key="addbook"
                onClick={() => openAddBookModal()}
                onContextMenu={(ev: React.mouse) => {ev.preventDefault(); openAddBookModal();}}
              />            
            ))
        }}
      />
      <Modal>
        <BookInfoModal 
          closeButton={{
            onClick: () => {closeAddBookModal();}
          }}
          textarea={{
            value:book.name,
            onChange: (e) => {setBook({...book, name:e.target.value});}
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
              onChange:(e) => {setBook({...book, isPriv:e});}
            }
          }}
          ok={{
            onClick:(e) => {saveBook();}
          }}
          remove={{
            render: (props, Component) => (book.id==="" ? null : <Component {...props} />),
            props: {
              onClick:(e)=> {removeBook();}
            }
          }}
        />
      </Modal>
    </>
  );
}

export default Homepage;
