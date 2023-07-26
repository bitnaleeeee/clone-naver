import { React } from "react";
import "./SubMenu.scss";

const SubMenu = (props) => {
  const { data } = props;

  return (
    <>
      <div className="sub-menu-wrap">
        <ul className="sub-menu-list">
          {data.subMenu &&
            data.subMenu.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href="#!">
                    <img src={item.imgSrc} alt="" />
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default SubMenu;
