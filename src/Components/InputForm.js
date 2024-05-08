import styles from "./InputForm.css";

function InputProfiletitle() {
  return <h4 class="logintext">프로필 사진</h4>;
}
function InputProfile() {
  return (
    <div class="inputProfile">
      <div class="inputProfile_box">
        <img src="/images/plus.png" class="get_img" />
        <div class="filebox">
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

function InputEmail() {
  return (
    <>
      <h4 class="logintext">이메일</h4>
      <input
        type="email"
        placeholder="이메일을 입력하세요"
        class="inlogin"
      ></input>
    </>
  );
}

function InputPwd() {
  return (
    <>
      <h4 class="logintext">비밀번호</h4>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        class="inlogin"
      ></input>
    </>
  );
}

function InputRepwd() {
  return (
    <>
      <h4 class="logintext">비밀번호 확인</h4>
      <input
        type="password"
        placeholder="비밀번호를 한번 더 입력하세요"
        class="inlogin"
      ></input>
    </>
  );
}

function InputNickname() {
  return (
    <>
      <h4 class="logintext">닉네임*</h4>
      <input type="name" placeholder="닉네임을 입력하세요" class="inlogin" />
    </>
  );
}

function HelpText() {
  return (
    <h6 class="helptext" id="login_help">
      * helper text
    </h6>
  );
}

export {
  InputProfiletitle,
  InputProfile,
  InputEmail,
  InputPwd,
  InputRepwd,
  InputNickname,
  HelpText,
};
