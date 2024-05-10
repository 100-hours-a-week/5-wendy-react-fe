import { Link, NavLink } from "react-router-dom";
import { Not_logined_Header } from "../Components/Header";
import { InputEmail, InputPwd, HelpText } from "../Components/InputForm";
import { SubmitBtn } from "../Components/BtnForm";
import styles from "../App.css";

function LoginPage() {
  function loginSuccess(e) {
    console.log("clicked");
  }
  return (
    <>
      <Not_logined_Header/>
      <hr></hr>
      {/* <div class="wrap"> */}
      <div class="loginform">
        <h3 class="page_title">로그인</h3>
        <form method="get" class="input_wrap">
          <InputEmail />
          <InputPwd />
          <HelpText />
          <SubmitBtn value={"로그인"} onClick={loginSuccess} />
          <div class="center">
            <NavLink to="/joinmember">회원가입</NavLink>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
}
export default LoginPage;
