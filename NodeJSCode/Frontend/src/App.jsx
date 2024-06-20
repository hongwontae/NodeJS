import FindByPk from "./components/FindByPk";
import Header from "./components/Header";
import Main from "./components/Main";
import ShowData from "./components/ShowData";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Main></Main>
        <ShowData></ShowData>
        <FindByPk></FindByPk>
      </div>
    </>
  );
}

export default App;
