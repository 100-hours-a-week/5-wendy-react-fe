import {
  HelpText,
  InputEmail,
  InputEmailtitle,
  InputNickname,
  InputProfile,
  InputProfiletitle,
  InputPwd,
  InputRepwd,
} from "../Components/InputForm";
import styles from "../App.css";
import { SubmitBtn } from "../Components/BtnForm";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function JoinmemberPage() {
  return (
    <>
      <Header/>
      <hr></hr>
      <div className="wrap">
        <h3 className="page_title">회원가입</h3>
        <div className="uploadimg">
          <InputProfiletitle />
          <HelpText />
          <InputProfile />
        </div>
        <form method="get" className="info">
          <InputEmailtitle/>
          <InputEmail />
          <HelpText />
          <InputPwd />
          <HelpText />
          <InputRepwd />
          <HelpText />
          <InputNickname />
          <HelpText />
          <SubmitBtn value={"회원가입"} />
          <div className="center">
          <Link to={"/login"} className="center">
            로그인하러 가기
          </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default JoinmemberPage;
