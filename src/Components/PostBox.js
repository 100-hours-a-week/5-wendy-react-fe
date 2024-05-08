import styles from './PostBox.css'

function PostBox({title, like, comment, viewcount, writetime, profile, nickname}){
    return(
        <div class="listbox">
                <div class="writetop">
                    <div class="title">{title}</div>
                    <div class="num">
                        <div class="num_count"> 좋아요 {
                          like
                        } </div>
                        <div class="num_count"> 댓글 {comment
                        } </div>
                        <div class="num_count"> 조회수 {viewcount
                        } </div>
                        <div class="time"> {writetime} </div>
                    </div>
                </div>
                <hr class="hr_op16"></hr>
                <div class="writer">
                    <div class="boxchange"><img src={profile}></img></div>
                    <div class="writername">{nickname}</div>
                </div>
        </div>
    )
}

export default PostBox;