import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { InputEmail, InputPwd, HelpText } from "../Components/InputForm";
import { SubmitBtn } from "../Components/BtnForm";
import styles from "../App.css";

function LoginPage() {
  function loginSuccess(e){
    <Link to={"/joinmember"}></Link>
    console.log("clicked")
  }
  return (
    <>
      <Header left_state={"hidden"} right_state={"hidden"}/>
      <hr></hr>
      {/* <div class="wrap"> */}
        <div class="loginform">
          <h3 class="page_title">로그인</h3>
          <form method="get" class="input_wrap">
            <InputEmail />
            <InputPwd />
            <HelpText />
            <SubmitBtn value={"로그인"} onClick={loginSuccess} />
            <Link to={"/joinmember"} class="center">
              회원가입
            </Link>
          </form>
        </div>
      {/* </div> */}
    </>
  );
}
export default LoginPage;
