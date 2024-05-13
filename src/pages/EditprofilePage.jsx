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
      <main className="wrap">
        <div className="pagetextbox">
          <h3 className="page_title">회원가입</h3>
          <h4 className="logintext">프로필 사진</h4>
          <InputProfile />
        </div>
        <form method="get" className="info" id="editprofile_box">
        <h4 className="logintext">이메일</h4>
          <h3 className="logintext">user@이메일</h3>
          <InputNickname />
          <h6 className="helptext"></h6>
          <SubmitBtn value={"수정하기"} />
        </form>
      </main>
    </>
  );
}

export default EditprofilePage;
