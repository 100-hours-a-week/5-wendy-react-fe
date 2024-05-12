import { SubmitBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
import { HelpText } from "../Components/InputForm";
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
      <div class="wrap">
        <div class="wrap_box">
          <Postpgtitle title="게시글 작성"/>

          <Postuptitle />
          <Postupcontent />
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

export default WritepostPage;
