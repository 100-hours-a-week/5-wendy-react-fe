import styles from "./BtnForm.css";

function SubmitBtn(props) {
  return (
    <input
      type="button"
      value={props.value}
      className="submitBtn"
      //   id="submit_btn"
      //   disabled
      // onClick={props.path}
    />
  );
}

function UploadBtn(props) {
  return (
    <input
      type="button"
      value={props.value}
      className="uploadBtn"
      // onclick={props.path}
      //   id="postwrite"
    />
  );
}

function EditBtn() {
  return (
    <>
      <input
        type="button"
        value="수정"
        className="editBtn"
        // onclick="modify()"
      ></input>{" "}
      <input
        type="button"
        value="삭제"
        className="editBtn"
        // onclick="delete_post()"
      ></input>
    </>
  );
}

export { SubmitBtn, UploadBtn, EditBtn };
