import React from "react";
import "./NaverAdBox.scss";

const NaverAdBox = () => {
  return (
    <>
      {" "}
      <div className="grid-box naver-ad-box">
        <div className="logo-img">
          <span className="blind">네이버 로고</span>
        </div>
        <p className="info">
          더 편리해진 AI 검색 기능
          <br />
          <strong>네이버앱</strong>
          <span>에서 만나보세요</span>
        </p>
        <a href="#!" className="link">
          앱 사용하기&gt;
        </a>
      </div>
    </>
  );
};

export default NaverAdBox;
