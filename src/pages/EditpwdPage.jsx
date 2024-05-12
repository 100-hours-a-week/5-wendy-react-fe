import { SubmitBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
import { HelpText, InputPwd, InputRepwd } from "../Components/InputForm";

function EditpwdPage() {
  return (
    <>
      <Header />
      <hr></hr>
      <div className="pagetextbox">
        <h3 className="page_title">비밀번호 수정</h3>
      </div>
      <div className="info">
        <InputPwd />
        <HelpText />
        <InputRepwd />
        <HelpText />
        <SubmitBtn value={"수정하기"} />
      </div>
    </>
  );
}

export default EditpwdPage;
