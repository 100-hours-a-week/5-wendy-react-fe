import styles from '../App.css'
import { UploadBtn } from '../Components/BtnForm';
import Header from '../Components/Header';
import PostBox from '../Components/PostBox';

function ViewlistPage(){
    return(
        <>
        <Header/>
        <hr></hr>
        <div class="wrap">
        <h3 class="explain">안녕하세요,<br></br>아무 말 대잔치 게시판 입니다.</h3>
        <UploadBtn value={"게시글 작성"}/>
        <PostBox title={"제목"} like={0} comment={0} viewcount={0} writetime={"2024-05-09 12:18:13"} profile={""} nickname={"wendy"}/>
        <PostBox title={"제목"} like={0} comment={0} viewcount={0} writetime={"2024-05-09 12:18:13"} profile={""} nickname={"wendy"}/>
        <PostBox title={"제목"} like={0} comment={0} viewcount={0} writetime={"2024-05-09 12:18:13"} profile={""} nickname={"wendy"}/>
        </div>
        </>
    );
}

export default ViewlistPage;