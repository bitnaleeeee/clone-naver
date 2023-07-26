import React from "react";
import "./ShoppingBox.scss";

const shoppingBox = (props) => {
  const { data } = props;

  return (
    <>
      <div className="grid-box shopping-box">
        <div className="title-wrap">
          <h3 className="title">
            <span className="title-sub-img shopping01"></span>
            <span className="title-sub-img shopping02"></span>
            <span className="blind">쇼핑 LIVE</span>
          </h3>
          <a href="#!" className="link">
            편성표
          </a>
        </div>
        <ul className="shopping-list">
          {data.shoppingData &&
            data.shoppingData.map((item, idx) => {
              return (
                <li key={idx}>
                  <div className="img-box">
                    <span className="time">
                      오전 {item.time.hours}: {item.time.minutes}
                    </span>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="info-box">
                    <div className="title">{item.info} </div>
                    <div className="title-sub">정경미 출연</div>
                    <div className="autor">
                      <span className="logo">
                        <img src={item.user.img} alt="" />
                      </span>
                      <span className="name">{item.user.name}</span>
                    </div>
                  </div>
                  <button type="button" className="alarm">
                    <span className="blind">알람설정</span>
                  </button>
                </li>
              );
            })}
        </ul>
        <div className="shopping-ad">
          <div className="img">
            <img
              src="https://s.pstatic.net/selected.phinf/MjAyMzA2MTZfMTAx/MDAxNjg2OTAyNjIzMjgx.GvKIaV96aZUfpTZMPBZYCwrkKscc57hjKWKXjclZQtAg.Dua939HamJYdE_qhGuEvmZLyyb27BduEyRMjJPcqMQIg.JPEG/live_up1.jpg?type=f78_78_q90"
              alt=""
            />
          </div>
          <p className="info">역대급 혜택으로 만나는 디지털/가전!</p>
        </div>
      </div>
    </>
  );
};

export default shoppingBox;
