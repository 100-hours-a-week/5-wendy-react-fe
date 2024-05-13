import styles from "./BtnForm.css";

function SubmitBtn(props) {
  return (
    <input
      type="button"
      value={props.value}
      className="submitBtn"
      //   id="submit_btn"
      onClick={props.path}
      disabled={props.disabled}
    />
  );
}

function UploadBtn(props) {
  return (
    <input
      type="button"
      value={props.value}
      className="uploadBtn"
      onClick={props.path}
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
