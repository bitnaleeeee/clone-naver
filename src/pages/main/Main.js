import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
import SearchPopup from "../../popup/SearchPopup";
import SubMenu from "../submenu/SubMenu";
import SearchBar from "../searchbar/SearchBar";
import WeatherBox from "../weatherbox/WeatherBox";
import ShoppingBox from "../shoppingbox/ShoppingBox";
import StockBox from "../stockbox/StockBox";
import NowBox from "../nowbox/NowBox";
import ShortfoamBox from "../shortfoambox/ShortfoamBox";
import ClipBox from "../clipbox/ClipBox";
import HomeAd from "../../components/homead/HomeAd";
import NaverAdBox from "../../components/naverad/NaverAdBox";
import "./Main.scss";

const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://clone-naver.vercel.app/data/mock.json`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  /**
   * 검색 팝업 오픈
   * @param {object} e 이벤트 객체
   */
  const openSearchPopup = (e) => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Header />
      <SearchPopup
        isPopupOpen={isPopupOpen}
        openSearchPopup={openSearchPopup}
      />
      <main className="main">
        <SearchBar openSearchPopup={openSearchPopup} />
        <SubMenu data={data} />
        <HomeAd />

        <div className="grid-wrap">
          {/* 왼쪽 컬럼 */}
          <div className="grid-vertical">
            <WeatherBox data={data} />
            <ShoppingBox data={data} />

            <NaverAdBox />
            <StockBox data={data} />
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="grid-vertical">
            <NowBox data={data} />
            <ShortfoamBox data={data} />

            <ClipBox />
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
