import { React } from "react";
import "./NowBox.scss";

const NowBox = (props) => {
  const { data } = props;
  return (
    <>
      <div className="grid-box now-box">
        <div className="title-wrap">
          <h3 className="title">
            <span className="title-sub-img now"></span>
            <span className="blind">티비 방영</span>
          </h3>
          <a href="#!" className="link">
            편성표
          </a>
        </div>
        <div className="now-list">
          <ul className="now-list-inner">
            {data.nowData &&
              data.nowData.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href="#!">
                      <span
                        className={
                          item.state
                            ? item.state === "live"
                              ? "state live"
                              : "state d-day"
                            : null
                        }
                      >
                        {item.state}
                      </span>
                      <img src={item.img} alt="" className="img" />
                      <p className="info"> {item.info}</p>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NowBox;
