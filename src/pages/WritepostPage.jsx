import { useEffect, useState } from "react";
import { SubmitBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
import {
  Postuptitle,
  Postupcontent,
  Postupimg,
  Postpgtitle,
} from "../Components/InputPost";

function WritepostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [btnDisabled,setbtnDisabled] = useState(true);
  useEffect(()=>{
    if(title=="" || content==""){
      setbtnDisabled(true)
      return;
    }
    setbtnDisabled(false);
  },[title,content])
  return (
    <>
      <Header />
      <hr></hr>
      <main className="wrap">
        <article className="wrap_box">
          <Postpgtitle title="게시글 작성" />
          <Postuptitle />
          <Postupcontent />
          <h6 className="helptext"></h6>
          <Postupimg />
          <div className="center">
            <SubmitBtn value={"완료"} disabled = {btnDisabled}/>
          </div>
        </article>
      </main>
    </>
  );
}

export default WritepostPage;
