import styles from '../App.css'
import { UploadBtn } from '../Components/BtnForm';
import {Header} from '../Components/Header';
import PostBox from '../Components/PostBox';

function ViewlistPage(){
    return(
        <>
        <Header/>
        <hr></hr>
        <div class="wrap">
        <h3 class="explain">안녕하세요,<br></br>아무 말 대잔치 게시판 입니다.</h3>
        <UploadBtn value={"게시글 작성"}/>
        <PostBox title={"제목"} like={1} comment={0} viewcount={1} writetime={"2024-05-09 12:18:13"} profile={"/images/profileimg.png"} nickname={"wendy"}/>
        <PostBox title={"제목2"} like={0} comment={1} viewcount={2} writetime={"2024-05-10 12:18:13"} profile={"/images/profileimg1.png"} nickname={"wendy"}/>
        <PostBox title={"제목3"} like={3} comment={0} viewcount={4} writetime={"2024-05-08 12:18:13"} profile={"/images/profilecat.jpeg"} nickname={"wendy"}/>
        </div>
        </>
    );
}

export default ViewlistPage;