import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { InputEmail, InputPwd, HelpText } from "../Components/InputForm";
import { SubmitBtn } from "../Components/BtnForm";
import styles from "../App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

let Loginform = styled.div`
  width: 392px;
  margin-top: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
let Page_title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 38.19px;
`;
let LoginText = styled.h3`
  text-align: left;
  margin-bottom: 8px;
  margin-top: 16px;
  font-size: 15px;
  font-weight: 700;
  line-height: 17.9px;
`;
let Center = styled.div`
  text-align: center;
  margin-top: 12px;
`;
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);
  const [btnDisabled,setbtnDisabled] =useState(true);

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
    console.log(e.target.type, ":", e.target.value);
    if (email == "") {
      setEmailValid(false);
    } else if (email.length < 15) {
      setEmailValid(false);
    } else if (validateEmail(email) == null) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };
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
    console.log(e.target.type, ":", e.target.value);
    if (pwd == "") {
      setPwdValid(false);
    } else if (checkPassword(pwd) == null) {
      setPwdValid(false);
    } else {
      setPwdValid(true);
    }
  };
  useEffect(()=>{
    if(emailValid && pwdValid){
      setbtnDisabled(false);
      return;
    }
    setbtnDisabled(true);
  },[emailValid, pwdValid]);

  return (
    <>
      <Header titleOnly="true" />
      <hr></hr>
      {/* <div className="wrap"> */}
      <Loginform>
        <Page_title>로그인</Page_title>
        <form method="get" className="input_wrap">
          <LoginText>이메일</LoginText>
          <InputEmail onChange={handleEmail} />
          <InputPwd onChange={handlePwd} />
          <h6 className="helptext">
            {(email.length > 0 && !emailValid && "*올바른 이메일 주소 형식을 입력해주세요.") ||
              (pwd.length > 0 && !pwdValid && "*올바른 비밀번호 형식을 입력해주세요.") ||
              ""}
          </h6>
          <SubmitBtn value={"로그인"} path={loginSuccess} disabled = {btnDisabled}/>
          <Center>
            <Link to="/joinmember">회원가입</Link>
          </Center>
        </form>
      </Loginform>
      {/* </div> */}
    </>
  );
}
export default LoginPage;
