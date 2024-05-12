import Header from "../Components/Header";
import { Commentview, Postview, WriteComment } from "../Components/PostView";

function PostviewPage() {
  return (
    <>
      <Header />
      <hr></hr>
      <div className="wrap">
        <div id="postview_wrap">
          <Postview />
        </div>
        <hr className="hr_op16"></hr>
        <div className="bottom">
          <WriteComment />
          <Commentview />
        </div>
      </div>
    </>
  );
}

export default PostviewPage;
