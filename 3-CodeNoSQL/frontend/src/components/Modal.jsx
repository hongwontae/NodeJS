/* eslint-disable react/prop-types */
import {forwardRef, useEffect} from 'react';
import { deleteProduct } from '../http/product-http';
import { useNavigate } from 'react-router-dom';

const Modal = forwardRef(function Modal({setModal, _id}, ref) {

    const navigate = useNavigate();

    useEffect(()=>{
        ref.current.showModal();
    }, [ref])

    async function deleteHandler(){
        const deleInfo = await deleteProduct(_id);
        console.log(deleInfo);
        navigate('/showall')
    }


  return (
    <>
      <dialog ref={ref} onClose={()=>setModal(false)} className='p-6'>
        <form>
          <p className='mb-4'>Really Delete?</p>
          <div className="flex justify-center gap-4">
            <button type="button" className="border-[1px] p-1" onClick={()=>setModal(false)}>No</button>
            <button type='button' className="border-[1px] p-1" onClick={deleteHandler}>Yes</button>
          </div>
        </form>
      </dialog>
    </>
  );
})

export default Modal;
