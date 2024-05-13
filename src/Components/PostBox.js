import styles from './PostBox.css'

function PostBox(props){
    // {title, like, comment, viewcount, writetime, profile, nickname}
    return(
        <article className="listbox">
                <div className="writetop">
                    <div className="title">{props.postboxData.title}</div>
                    <div className="num">
                        <div className="num_count"> 좋아요 {
                          props.postboxData.like
                        } </div>
                        <div className="num_count"> 댓글 {props.postboxData.comment
                        } </div>
                        <div className="num_count"> 조회수 {props.postboxData.viewcount
                        } </div>
                        <div className="time"> {props.postboxData.writetime} </div>
                    </div>
                </div>
                <hr className="hr_op16"></hr>
                <div className="writer">
                    <div className="boxchange"><img src={props.postboxData.profile} alt='profile'></img></div>
                    <div className="writername">{props.postboxData.nickname}</div>
                </div>
        </article>
    )
}

export default PostBox;