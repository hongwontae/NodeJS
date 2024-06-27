import { getCookie } from "../http/FormHttp";
function Header() {
  async function cookieGet() {
    await getCookie();
  }

  return (
    <>
      <header>
        <h1 className="text-center">Hello World</h1>
        <p className="text-center mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab
          nesciunt necessitatibus, ratione nulla aut suscipit quis id similique
          iste eveniet consectetur aliquid facilis laborum nemo, unde odio
          accusamus voluptatem?
        </p>
        <div className="flex justify-center">
          <button onClick={cookieGet}>Cookies!</button>
        </div>
      </header>
    </>
  );
}

export default Header;
