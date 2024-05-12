import { Link, NavLink, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { InputEmail, InputPwd, HelpText, InputEmailtitle } from "../Components/InputForm";
import { SubmitBtn } from "../Components/BtnForm";
import styles from "../App.css";

function LoginPage() {
  const navigate = useNavigate();
  function loginSuccess(e) {
    navigate("/viewlist");
  }
  return (
    <>
      <Header titleOnly="true"/>
      <hr></hr>
      {/* <div className="wrap"> */}
      <div className="loginform">
        <h3 className="page_title">로그인</h3>
        <form method="get" className="input_wrap">
          <InputEmailtitle/>
          <InputEmail />
          <InputPwd />
          <HelpText />
          <SubmitBtn value={"로그인"} path={loginSuccess} />
          <div className="center">
            <Link to="/joinmember">회원가입</Link>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
}
export default LoginPage;
