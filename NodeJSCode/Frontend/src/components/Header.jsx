import {getCookie} from '../http/FormHttp'
function Header() {


  async function cookieGet(){
    await getCookie();
  }

  return (
    <>
      <header>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab
          nesciunt necessitatibus, ratione nulla aut suscipit quis id similique
          iste eveniet consectetur aliquid facilis laborum nemo, unde odio
          accusamus voluptatem?
        </p>
        <button onClick={cookieGet}>Cookies!</button>
      </header>
    </>
  );
}

export default Header;
