import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import PostData from "./components/PostData";
import Auth from "./components/Auth";

function App() {
  const [re, setRe] = useState(false);

  return (
    <>
        <div className="flex flex-col gap-6">
          <Header></Header>
          <PostData setRe={setRe}></PostData>
          <Main re={re}></Main>
          <Auth></Auth>
        </div>
    </>
  );
}

export default App;
