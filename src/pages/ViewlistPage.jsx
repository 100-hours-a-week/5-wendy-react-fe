import styles from "../App.css";
import { UploadBtn } from "../Components/BtnForm";
import  Header  from "../Components/Header";
import PostBox from "../Components/PostBox";
import { useState } from "react";

function ViewlistPage() {
  let [posts, setPosts] = useState([]);
  setTimeout(() => {
    setPosts([
      {
        id: 1,
        title: "제목",
        like: 1,
        comment: 0,
        viewcount: 1,
        writetime: "2024-05-09 12:18:13",
        profile: "/images/profileimg.png",
        nickname: "wendy",
      },
      {
        id: 2,
        title: "제목2",
        like: 1,
        comment: 0,
        viewcount: 1,
        writetime: "2024-05-09 12:18:13",
        profile: "/images/profileimg1.png",
        nickname: "minji",
      },
      {
        id: 3,
        title: "제목3",
        like: 1,
        comment: 0,
        viewcount: 1,
        writetime: "2024-05-09 12:18:13",
        profile: "/images/profilecat.jpeg",
        nickname: "wenn",
      },
    ]);
  }, 1000);

  return (
    <>
      <Header />
      <hr></hr>
      <div className="wrap">
        <h3 className="explain">
          안녕하세요,<br></br>아무 말 대잔치 게시판 입니다.
        </h3>
        <UploadBtn value={"게시글 작성"} />
        {posts.map((post) => {
          return <PostBox postboxData={post} key={post.id}></PostBox>;
        })}
      </div>
    </>
  );
}

export default ViewlistPage;
