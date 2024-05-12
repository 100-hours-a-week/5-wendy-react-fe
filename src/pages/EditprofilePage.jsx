import { SubmitBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
import {
  HelpText,
  InputEmail,
  InputEmailtitle,
  InputNickname,
  InputProfile,
  InputProfiletitle,
} from "../Components/InputForm";

function EditprofilePage() {
  return (
    <>
      <Header/>
      <hr></hr>
      <div className="wrap">
        <div className="pagetextbox">
          <h3 className="page_title">회원가입</h3>
          <InputProfiletitle />
          <InputProfile />
        </div>
        <form method="get" className="info" id="editprofile_box">
          <InputEmailtitle />
          <h3 className="logintext">user@이메일</h3>
          <InputNickname />
          <HelpText />
          <SubmitBtn value={"수정하기"} />
        </form>
      </div>
    </>
  );
}

export default EditprofilePage;
