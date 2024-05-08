import styles from "./BtnForm.css";

function SubmitBtn(value) {
  return (
    <input
      type="button"
      value={value}
      class="submitBtn"
      //   id="submit_btn"
      //   disabled
      //   onclick="join()"
    />
  );
}

function UploadBtn(value) {
  return (
    <input
      type="button"
      value="게시글 작성"
      class="uploadBtn"
    //   onclick="towrite()"
    //   id="postwrite"
    />
  );
}
