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

function Header({ titleOnly=false }) {
  return (
    <>
      <div className="headerbox">
        <div className="header">
          <div  className="backwrap" style={titleOnly?{visibility:"hidden"}:{}}>
            <button type="button" className="toparrow">
              <img className="arrow" src="/images/arrow.png"></img>
            </button>
          </div>
          <div className="topname">아무 말 대잔치</div>
          <div className="dropdownList" style={titleOnly?{visibility:"hidden"}:{}}>
            <button className="dropdown_btn">
              <img
                className="profile"
                src="/images/profileimg.png"
                onClick={dropdown}
              ></img>
            </button>
            <div className="dropdown_options">
              <button type="button" className="go_btn">
                회원정보수정
              </button>
              <button type="button" className="go_btn">
                비밀번호수정
              </button>
              <button type="button" className="go_btn">
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
