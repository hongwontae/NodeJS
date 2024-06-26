/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import { forwardRef } from "react";

const Modal = forwardRef(function Modal({ modalDownHandler }, ref) {

    async function formPost(e){
        e.preventDefault();
        
    }

  return (
    <>
      <dialog ref={ref}>
        <h2>Login Form</h2>
        <form onSubmit={formPost}>
          <label htmlFor="id">ID</label>
          <input type="text" id="id"></input>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password"></input>
          <button type="submit">SUBMIT</button>
        </form>
        <button onClick={modalDownHandler}>Close</button>
      </dialog>
    </>
  );
});

export default Modal;
