import { Link, NavLink, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { InputEmail, InputPwd, HelpText, InputEmailtitle } from "../Components/InputForm";
import { SubmitBtn } from "../Components/BtnForm";
import styles from "../App.css";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);

  function loginSuccess(e) {
    navigate("/viewlist");
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.type,':',e.target.value);
    if(email == ""){
      setEmailValid(false);
    }else if(email.length < 15){
      setEmailValid(false);
    }else if(validateEmail(email)==null){
      setEmailValid(false);
    }else{
      setEmailValid(true);
    }
  }
  const checkPassword = (pwd) => {
    var regexPw =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
    if (!regexPw.test(pwd)) {
      return null;
    }
    return true;
  };
  const handlePwd = (e) => {
    setPwd(e.target.value);
    console.log(e.target.type,':',e.target.value);
    if(pwd == ""){
      setPwdValid(false);
    }else if(checkPassword(pwd)==null){
      setPwdValid(false);
    }else{
      setPwdValid(true);
    }
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
          <InputEmail onChange={handleEmail}/>
          <InputPwd onChange={handlePwd}/>
         {((!emailValid) && (<HelpText text = "*올바른 이메일 주소 형식을 입력해주세요."/>)) || ((!pwdValid) && (<HelpText text = "*올바른 비밀번호 형식을 입력해주세요."/>)) || (<HelpText text = ""/>)}
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
