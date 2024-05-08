import styles from "./BtnForm.css";

function SubmitBtn({value,path}) {
  return (
    <input
      type="button"
      value={value}
      class="submitBtn"
      //   id="submit_btn"
      //   disabled
        onclick={path}
    />
  );
}

function UploadBtn({value,path}) {
  return (
    <input
      type="button"
      value={value}
      class="uploadBtn"
      onclick={path}
    //   id="postwrite"
    />
  );
}

export {SubmitBtn, UploadBtn};