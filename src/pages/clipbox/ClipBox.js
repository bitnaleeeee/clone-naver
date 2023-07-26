import React from "react";
import "./ClipBox.scss";

const ClipBox = () => {
  return (
    <>
      <div className="grid-box clip-box">
        <a href="#!">
          <img
            src="https://s.pstatic.net/static/www/mobile/edit/20230619_1095/upload_168716426807622Q5G.png"
            alt="너는 항상 남들보다 한발 먼저 내디뎠지 총 10억 펀딩! 숏폼 크리에이터 모집"
            className="banner"
          />
          <div className="info">
            <img
              src="https://s.pstatic.net/static/www/mobile/edit/20230619_1095/upload_1687164228849Rz6eE.png"
              alt=""
              className="logo-img"
            />
            <div className="info-sub">
              <strong>네이버 Clip</strong>
              <p>네이버 숏폼 클립 크리에이터 모집 중</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ClipBox;
