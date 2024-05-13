import {
  HelpText,
  InputEmail,
  InputNickname,
  InputProfile,
  InputPwd,
  InputRepwd,
} from "../Components/InputForm";
import styles from "../App.css";
import { SubmitBtn } from "../Components/BtnForm";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useState } from "react";

// async function check_email() {
//   const joinemail = document.querySelector("#email").value;
//   const help_email = document.querySelector("#help_email");
//   if (joinemail == "") {
//     help_email.innerText = "*이메일을 입력해주세요";
//     return false;
//   } else if (joinemail.length < 15 || validateEmail(joinemail) == null) {
//     help_email.innerText = "*올바른 이메일 주소 형식을 입력해주세요";
//     return false;
//   }
//   res = await fetch_email();
//   if (res.ok) {
//     data = await res.json();
//     for (let i = 0; i < data.users.length; i++) {
//       const user = data.users[i];
//       if (user.email == joinemail) {
//         help_email.innerText = "*중복된 이메일입니다.";
//         return false;
//       }
//     }
//   }
//   help_email.innerText = "";
//   return true;
// }

function JoinmemberPage() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);

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
      <Header titleOnly="true" />
      <hr></hr>
      <main className="wrap">
        <h3 className="page_title">회원가입</h3>
        <div className="uploadimg">
        <h4 className="logintext">프로필 사진</h4>
        <h6 className="helptext"></h6>
          <InputProfile />
        </div>
        <form method="get" className="info">
        <h4 className="logintext">이메일</h4>
          <InputEmail onChange={handleEmail}/>
          <h6 className="helptext"></h6>
          <InputPwd onChange={handlePwd}/>
          <h6 className="helptext"></h6>
          <InputRepwd />
          <h6 className="helptext"></h6>
          <InputNickname />
          <h6 className="helptext"></h6>
          <SubmitBtn value={"회원가입"} />
          <div className="center">
          <Link to={"/login"} className="center">
            로그인하러 가기
          </Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default JoinmemberPage;
