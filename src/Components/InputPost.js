import styles from "./InputPost.module.css";

function Postpgtitle(props) {
  return (
    <div className={styles.postpgtitle_box}>
      <div className={styles.postpgtitle}>{props.title}</div>
    </div>
  );
}

function Postuptitle(props) {
  return (
    <>
      <div className={styles.postuptitle}>제목*</div>
      <hr className="hr_op16"></hr>
      <input
        type="textarea"
        style={{ resize: "none" }}
        placeholder="제목을 입력해주세요. (최대 26글자)"
        className={styles.get_title}
        onkeyup="write_final()"
        maxlength="26"
        defaultValue={props.value}
      >
      </input>
      <hr className="hr_op16"></hr>
    </>
  );
}

function Postupcontent(props) {
  return (
    <>
      <div className={styles.postuptitle}>내용*</div>
      <hr className="hr_op16"></hr>
      <textarea
        type="textarea"
        style={{ resize: "none" }}
        placeholder="내용을 입력해주세요."
        className={styles.write_content}
        onkeyup="write_final()"
        defaultValue={props.value}
      >
      </textarea>
      <hr className="hr_op16"></hr>
    </>
  );
}

function Postupimg() {
  return (
    <div className={styles.upload_postimg}>
      <div className={styles.postimg_title}>이미지</div>
      <input
        type="file"
        accept="image/*"
        onchange="modify_profile(this)"
      ></input>
    </div>
  );
}

export { Postpgtitle, Postuptitle, Postupcontent, Postupimg };
