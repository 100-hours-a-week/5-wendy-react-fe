import { EditBtn, UploadBtn } from "./BtnForm";
import styles from "./PostView.css";

function Postview(props) {
  function change_number(input_num) {
    if (input_num >= 1000) {
      return Math.floor(input_num / 1000) + "k";
    } else {
      return input_num;
    }
  }
  return (
    <>
      <div className="postview_top">
        <div className="post_top">
          <div className="viewtitle">{props.data?.title}</div>
          <div className="sub">
            <div className="sub_left">
              <div className="sub_profilebox">
                <img className="sub_profile" src={props.data?.profile}></img>
              </div>
              <div className="post_writername">{props.data?.nickname}</div>
              <div className="post_time">{props.data?.writetime} </div>
            </div>
            <div className="editbtn">
              <EditBtn />
            </div>
          </div>
        </div>
      </div>
      <hr className="hr_op16"></hr>
      <div className="postview_img">
        <img className="img" src={props.data?.post_image}></img>
      </div>
      <div className="postview_text">
        <div className="text">{props.data?.post_text}</div>
      </div>
      <div className="statbox">
        <div className="stat">
        <div className="count">
            {change_number(props.data?.viewcount)}
            <br></br>조회수
          </div>
          <div className="count">
            {change_number(props.data?.comment)}
            <br></br>댓글
          </div>
        </div>
      </div>
      <hr className="hr_op16"></hr>
    </>
  );
}

function WriteComment() {
  return (
    <form method="get" className="writecomment">
      <textarea
        placeholder="댓글을 남겨주세요!"
        style={{ resize: "none" }}
        className="commentbox"
      ></textarea>
      <hr className="hr_op16"></hr>
      <UploadBtn value="댓글 등록" />
    </form>
  );
}

function Commentview(props) {
  return (
    <article className="commented">
      <div className="commented_left">
        <div className="commented_log">
          <div className="commented_profilebox">
            <img
              className="commented_profile"
              src={props.data.comment_profile}
              alt="profile"
            ></img>
          </div>
          <div className="post_writername">{props.data.comment_name}</div>
          <div className="post_time">{props.data.writetime}</div>
        </div>
        <div className="comment_content">{props.data.comment_content}</div>
      </div>
      <div className="commented_right">
        <EditBtn />
      </div>
    </article>
  );
}

export { Postview, WriteComment, Commentview };
