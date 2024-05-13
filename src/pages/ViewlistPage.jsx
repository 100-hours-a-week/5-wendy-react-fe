import { useNavigate } from "react-router-dom";
import styles from "../App.css";
import { UploadBtn } from "../Components/BtnForm";
import Header from "../Components/Header";
import PostBox from "../Components/PostBox";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

function ViewlistPage() {
  // let [posts, setPosts] = useState([]);
  const { data, error, loading } = useFetch("http://localhost:8081/posts");
  const navigate = useNavigate();

  function writepost(e) {
    navigate("/writepost");
  }

  return (
    <>
      <Header />
      <hr></hr>
      <main className="wrap">
        <h3 className="explain">
          안녕하세요,<br></br>아무 말 대잔치 게시판 입니다.
        </h3>
        <UploadBtn value={"게시글 작성"} path={writepost}/>
        {data?.posts.map((post) => {
          return <PostBox postboxData={post} key={post.id}></PostBox>;
        })}
      </main>
    </>
  );
}

export default ViewlistPage;
