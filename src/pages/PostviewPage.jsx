import Header from "../Components/Header";
import { Commentview, Postview, WriteComment } from "../Components/PostView";

function PostviewPage() {
  return (
    <>
      <Header />
      <hr></hr>
      <main className="wrap">
        <article id="postview_wrap">
          <Postview />
        </article>
        <hr className="hr_op16"></hr>
        <div className="bottom">
          <WriteComment />
          <Commentview />
        </div>
      </main>
    </>
  );
}

export default PostviewPage;
