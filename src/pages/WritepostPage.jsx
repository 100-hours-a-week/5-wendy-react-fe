import { SubmitBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
import {
  Postuptitle,
  Postupcontent,
  Postupimg,
  Postpgtitle,
} from "../Components/InputPost";

function WritepostPage() {
  return (
    <>
      <Header />
      <hr></hr>
      <main class="wrap">
        <article class="wrap_box">
          <Postpgtitle title="게시글 작성" />
          <Postuptitle />
          <Postupcontent />
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

export default WritepostPage;
