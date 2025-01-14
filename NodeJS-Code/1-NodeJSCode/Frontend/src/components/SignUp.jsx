import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [showText, setShowText] = useState(true);
  const navi = useNavigate();

  const dataInfoEmail = useSelector((state) => state.info.email);
  const dataInfoPassword = useSelector((state) => state.info.password);
  console.log({ dataInfoEmail, dataInfoPassword });

  useEffect(() => {
    const goHome = setTimeout(() => {
      navi("/");
    }, 5000);
    return () => {
      setShowText(false);
      clearTimeout(goHome);
    };
  }, [navi]);

  return (
    <>
      <div className="bg-neutral-500 min-h-screen">
        <h1 className="mb-10">SignUp Page</h1>
        <h2>회원 가입에 성공했습니다.</h2>
        <p>홈페이지의 로그인 버튼을 눌러서 로그인 부탁드립니다.</p>
        {showText ? <p>5초 뒤에 홈페이지로 이동합니다...</p> : undefined}
      </div>
    </>
  );
}

export default SignUp;
