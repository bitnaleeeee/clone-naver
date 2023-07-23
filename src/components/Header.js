import React from "react";
import './Header.scss';

const Header = () => {
  return (
    <header className="header" id="header">
      {/* 홈버튼 */}
      <button type="button" className="home-menu-btn">
          <span className="blind">홈메뉴</span>
      </button>

      {/* 유틸메뉴 */}
      <div className="utility-menu">
        <a href="#!" className="naver-pay-btn">
          <span className="blind">네이버 페이</span>
        </a>
        <a href="#!" className="naver-alarm-btn">
          <span className="blind">네이버 알림</span>
        </a>
        <a href="#!" className="my-page-btn">
          <span className="blind">마이페이지</span>
        </a>
      </div>
    </header>
  );
};
export default Header;