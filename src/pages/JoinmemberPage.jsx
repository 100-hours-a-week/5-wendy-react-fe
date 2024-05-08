import {
  HelpText,
  InputEmail,
  InputNickname,
  InputProfile,
  InputProfiletitle,
  InputPwd,
  InputRepwd,
} from "../Components/InputForm";
import Header from "../Components/Header";
import styles from "../App.css";
import { SubmitBtn } from "../Components/BtnForm";
import { Link } from "react-router-dom";

function JoinmemberPage() {
  return (
    <>
      <Header />
      <hr></hr>
      <div class="wrap">
        <h3 class="page_title">회원가입</h3>
        <div class="uploadimg">
          <InputProfiletitle />
          <HelpText />
          <InputProfile />
        </div>
        <form method="get" class="info">
          <InputEmail />
          <HelpText />
          <InputPwd />
          <HelpText />
          <InputRepwd />
          <HelpText />
          <InputNickname />
          <HelpText />
          <SubmitBtn value={"회원가입"} />
          <Link to={"/login"} class="center">
            로그인하러 가기
          </Link>
        </form>
      </div>
    </>
  );
}

export default JoinmemberPage;
