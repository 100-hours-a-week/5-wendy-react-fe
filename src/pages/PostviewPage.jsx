import Header from "../Components/Header";
import { Commentview, Postview, WriteComment } from "../Components/PostView";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function PostviewPage() {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    "http://localhost:8081/posts/" + id
  );
  return (
    <>
      <Header />
      <hr></hr>
      <main className="wrap">
        <article id="postview_wrap">
          <Postview data={data} />
        </article>
        <hr className="hr_op16"></hr>
        <div className="bottom">
          <WriteComment />
          {data?.comments.map((comment) => (
            <Commentview data={comment} key={comment.commentid} />
          ))}
        </div>
      </main>
    </>
  );
}

export default PostviewPage;
