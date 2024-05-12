import { EditBtn, UploadBtn } from "./BtnForm";
import styles from "./PostView.css"

// function Postview(props) {
//   return (
//     <>
//       <div className="postview_top">
//         <div className="post_top">
//           <div className="viewtitle">{props.title}</div>
//           <div className="sub">
//             <div className="sub_left">
//               <div className="sub_profilebox">
//                 <img className="sub_profile" src={props.profile}></img>
//               </div>
//               <div className="writername">{props.nickname}</div>
//               <div className="time"> {props.writetime} </div>
//             </div>
//             <div className="editbtn">
//               <EditBtn />
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr className="hr_op16"></hr>
//       <div className="postview_img">
//         <img className="img" src={props.post_image}></img>
//       </div>
//       <div className="postview_text">
//         <div className="text">{props.post_text}</div>
//       </div>
//       <div className="statbox">
//         <div className="stat">
//           <div className="viewcount">
//             <br></br>조회수
//           </div>
//           <div className="comment">
//             <br></br>댓글
//           </div>
//         </div>
//       </div>
//       <hr className="hr_op16"></hr>
//     </>
//   );
// }
function Postview() {
    return (
      <>
        <div className="postview_top">
          <div className="post_top">
            <div className="viewtitle">게시물 제목</div>
            <div className="sub">
              <div className="sub_left">
                <div className="sub_profilebox">
                  <img className="sub_profile" src="/images/profilecat.jpeg"></img>
                </div>
                <div className="post_writername">wenn</div>
                <div className="post_time"> 2024-04-28 02:10:14</div>
              </div>
              <div className="editbtn">
                <EditBtn />
              </div>
            </div>
          </div>
        </div>
        <hr className="hr_op16"></hr>
        <div className="postview_img">
          <img className="img" src=""></img>
        </div>
        <div className="postview_text">
          <div className="text">안녕하세요ㅎㅎ</div>
        </div>
        <div className="statbox">
          <div className="stat">
            <div className="count">
                100
              <br></br>조회수
            </div>
            <div className="count">
                1
              <br></br>댓글
            </div>
          </div>
        </div>
      </>
    );
  }
function WriteComment() {
  return (
    <form method="get" class="writecomment">
      <textarea
        placeholder="댓글을 남겨주세요!"
        style={{resize: "none"}}
        class="commentbox"
      ></textarea>
      <hr className="hr_op16"></hr>
      <UploadBtn value="댓글 등록"/>
    </form>
  );
}

function Commentview() {
  return (
    <div className="commented">
      <div className="commented_left">
        <div className="commented_log">
          <div className="commented_profilebox">
            <img className="commented_profile" src="/images/profileimg.png"></img>
          </div>
          <div className="post_writername">wendy</div>
          <div className="post_time">2024-05-05 02:59:59</div>
        </div>
        <div className="comment_content">귀여워요</div>
      </div>
      <div className="commented_right">
        <EditBtn />
      </div>
    </div>
  );
}

export { Postview, WriteComment, Commentview };
