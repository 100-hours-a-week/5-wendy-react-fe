import { SubmitBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
import { HelpText } from "../Components/InputForm";
import {
  Postuptitle,
  Postupcontent,
  Postupimg,
  Postpgtitle,
} from "../Components/InputPost";

function EditpostPage() {
  return (
    <>
      <Header />
      <hr></hr>
      <div class="wrap">
        <div class="wrap_box">
          <Postpgtitle title="게시글 수정" />
          <Postuptitle value="제목 1입니다"/>
          <Postupcontent value="게시글 1에 대한 내용입니다."/>
          <HelpText />
          <Postupimg />
          <div class="center">
            <SubmitBtn value={"완료"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditpostPage;
