import React from "react";
import "./ShortfoamBox.scss";

const ShortfoamBox = (props) => {
  const { data } = props;
  return (
    <>
      <div className="grid-box short-form-box">
        <div className="title-wrap">
          <h3 className="title">
            <span className="title-sub">짧은 즐거움</span>
            <span className="title-sub short-form">숏폼</span>
            <span className="title-sub-img short-form"></span>
          </h3>
        </div>
        <div className="short-form-list">
          <ul className="short-form-list-inner">
            {data.shortData &&
              data.shortData.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href="#!">
                      <img src={item.img} alt="" className="img" />
                      <p className="info">{item.info}</p>
                      <p className="brand"> {item.name}</p>
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

export default ShortfoamBox;
