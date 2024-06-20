import { useRef } from 'react';
import {fetchFormPost} from '../http/FormHttp'

function Form() {

  const titleRef = useRef();
  const priceRef = useRef();
  const desRef = useRef();

    function submitEventHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            title : formData.get('title'),
            price : formData.get('price'),
            description : formData.get('description'),
        }
        fetchFormPost(data)
        titleRef.current.value = ''
        priceRef.current.value = ''
        desRef.current.value = ''
    }

  return (
    <>
      <form onSubmit={submitEventHandler}>
        <label htmlFor="title"></label>
        <input id="title" name='title' ref={titleRef}></input>

        <label htmlFor="price"></label>
        <input id="price" name='price' type='number' ref={priceRef}></input>

        <label htmlFor="description"></label>
        <textarea id="description" name='description' ref={desRef}></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
