import styles from "./InputForm.css";

function InputProfiletitle() {
  return <h4 className="logintext">프로필 사진</h4>;
}
function InputProfile() {
  return (
    <div className="inputProfile">
      <div className="inputProfile_box">
        <img src="/images/plus.png" className="get_img" />
        <div className="filebox">
          <label for="change"></label>
          <input
            type="file"
            id="change"
            accept="image/*"
            //   onchange="allcheck()"
          />
        </div>
      </div>
    </div>
  );
}

function InputEmailtitle(){
  return(
    <h4 className="logintext">이메일</h4>
  )
}

function InputEmail(props) {
  return (
      <input
        type="email"
        placeholder="이메일을 입력하세요"
        className="inlogin"
        value={props.value}
        onChange={props.onChange}
      ></input>
  );
}

function InputPwd(props) {
  return (
    <>
      <h4 className="logintext">비밀번호</h4>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        className="inlogin"
        value={props.value}
        onChange={props.onChange}
      ></input>
    </>
  );
}

function InputRepwd() {
  return (
    <>
      <h4 className="logintext">비밀번호 확인</h4>
      <input
        type="password"
        placeholder="비밀번호를 한번 더 입력하세요"
        className="inlogin"
      ></input>
    </>
  );
}

function InputNickname() {
  return (
    <>
      <h4 className="logintext">닉네임*</h4>
      <input type="name" placeholder="닉네임을 입력하세요" className="inlogin" />
    </>
  );
}

function HelpText(props) {
  return (
    <h6 className="helptext">
      {props.text}
    </h6>
  );
}

export {
  InputProfiletitle,
  InputProfile,
  InputEmailtitle,
  InputEmail,
  InputPwd,
  InputRepwd,
  InputNickname,
  HelpText,
};
