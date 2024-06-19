import {fetchFormPost} from '../http/FormHttp'

function Form() {

    function submitEventHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            title : formData.get('title'),
            age : formData.get('age'),
            descr : formData.get('descr'),
        }
        fetchFormPost(data)
    }

  return (
    <>
      <form onSubmit={submitEventHandler}>
        <label htmlFor="title"></label>
        <input id="title" name='title'></input>

        <label htmlFor="age"></label>
        <input id="age" name='age' type='number'></input>

        <label htmlFor="descr"></label>
        <textarea id="descr" name='descr'></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
