import styles from "./Header.css";


const dropdown = () => {
    let dropdown_op = document.querySelector(".dropdown_options");
    //display 속성을 block로 변경
    if (dropdown_op.style.display == "") {
      dropdown_op.style.display = "block";
    } else if (dropdown_op.style.display == "block") {
      dropdown_op.style.display = "";
    }
};

function Header({left_state, right_state}) {
  return (
    <>
      <div class="headerbox">
        <div class="header">
          <div class="backwrap" type={left_state}>
            <button type="button" class="toparrow">
              <img class="arrow" src="/images/arrow.png"></img>
            </button>
          </div>
          <div class="topname">아무 말 대잔치</div>
          <div class="dropdownList" type={right_state}>
            <button class="dropdown_btn">
              <img class="myprofile" src="/images/profileimg.png" onClick={dropdown}></img>
            </button>
            <div class="dropdown_options">
              <button type="button" class="go_btn">
                회원정보수정
              </button>
              <button type="button" class="go_btn">
                비밀번호수정
              </button>
              <button type="button" class="go_btn">
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
