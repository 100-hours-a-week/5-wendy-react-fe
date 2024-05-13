import { SubmitBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
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
      <main class="wrap">
        <article class="wrap_box">
          <Postpgtitle title="게시글 수정" />
          <Postuptitle value="제목 1입니다"/>
          <Postupcontent value="게시글 1에 대한 내용입니다."/>
          <h6 className="helptext"></h6>
          <Postupimg />
          <div class="center">
            <SubmitBtn value={"완료"} />
          </div>
        </article>
      </main>
    </>
  );
}

export default EditpostPage;
