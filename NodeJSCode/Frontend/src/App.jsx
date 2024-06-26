import { useRef, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import PostData from "./components/PostData";

function App() {
  const [re, setRe] = useState(false);

  const modalRef = useRef(null);

  function modalOpenHandler() {
    modalRef.current.showModal();
  }

  function modalDownHandler() {
    modalRef.current.close();
  }

  return (
    <>
        <div>
          <Modal ref={modalRef} modalDownHandler={modalDownHandler}></Modal>
          <Header></Header>
          <PostData setRe={setRe}></PostData>
          <Main re={re}></Main>
          <button onClick={modalOpenHandler}>Login</button>
        </div>
    </>
  );
}

export default App;
