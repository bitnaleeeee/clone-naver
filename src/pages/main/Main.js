import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
import SearchPopup from "../../popup/SearchPopup";
import "./Main.scss";

const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [data, setData] = useState([]);
  // const [value, setValue] = useState("");
  // const [bigValue, setBigValue] = useState("");

  useEffect(() => {
    fetch(`https://clone-naver.vercel.app/data/mock.json`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        // dustResult(result);
      });
  }, []);

  /**
   * 검색 팝업 오픈
   * @param {object} e 이벤트 객체
   */
  const openSearchPopup = (e) => {
    setIsPopupOpen(!isPopupOpen);
  };

  function dustResult(data) {
    let dust = ["매우 맑음", "맑음", "보통", "나쁨", "매우 나쁨", "최악"];
    return dust[data.weatherData.dust.value];
    // setValue(dust[data.weatherData.dust.value]);
    // setBigValue(dust[data.weatherData.dust.bigValue]);
  }

  function func(a, b) {
    let result = false;
    if (a - b > 0) {
      result = true;
    }
    return result;
  }

  function stockResult(data) {
    let a = data.value.today;
    let str = String(a); //스트링 형태임
    let answer = str.slice(-2); //두개 2개 문자
    let test = Number(str.slice(0, -2)); //앞에 문자
    let c = test.toLocaleString(); // 콤마 찍은 앞에 수
    debugger;
    let d = String(answer);
    let e = c + "." + d;
    return e;
  }

  return (
    <>
      <Header />
      <SearchPopup
        isPopupOpen={isPopupOpen}
        openSearchPopup={openSearchPopup}
      />
      <main className="main">
        <div className="search-wrap">
          <div className="search-box">
            <div className="search-inner">
              <h1 className="search-logo">
                <a href="#!">
                  <span className="blind">네이버</span>
                </a>
              </h1>
              <input
                type="text"
                className="search-input"
                title="검색어 입력"
                placeholder="검색어를 입력해주세요."
                onFocus={openSearchPopup}
                // onBlur={onBlurSearchInput}
              />
              <button type="button" className="search-voice-btn">
                <span className="blind">음성검색</span>
              </button>
            </div>
          </div>
        </div>

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

            {/* 
            {data.subMenu &&
              data.subMenu.map((item, idx) => {
                console.log(item);
              })}

            {data.subMenu
              ? data.subMenu.map((item, idx) => {
                  console.log(item);
                })
              : ""} 
              */}
          </ul>
        </div>

        <div className="hone-ad">
          <a href="#!">
            <img
              src="https://ssl.pstatic.net/melona/libs/1446/1446969/490025e74241bc2bc330_20230621141420854.png"
              alt=""
            />
          </a>
        </div>

        <div className="grid-wrap">
          {/* 왼쪽 컬럼 */}
          <div className="grid-vertical">
            <div className="grid-box weather-box">
              <div className="weather-inner">
                <div className="bg-img"></div>
                <div className="info">
                  <div className="info-title">
                    <span className="temperature">
                      {" "}
                      {data.weatherData && data.weatherData.temperature.value}
                    </span>
                    {data.weatherData && data.weatherData.temperature.position}
                  </div>
                  <div className="info-sub">
                    미세
                    <span className="state good">
                      {data.weatherData && dustResult(data)}
                    </span>{" "}
                    · 초미세
                    <span className="state ">
                      {data.weatherData && dustResult(data)}
                    </span>
                  </div>
                </div>
                <button type="button" className="my-location">
                  내 위치 찾기
                </button>
              </div>
              <p className="weather-guide">
                위치 찾기를 눌러 현 위치의 시간대별·주간날씨와 미세먼지 예보를
                여기에서 바로 보세요
              </p>
            </div>

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

            <div className="grid-box stock-box">
              <div className="stock-list">
                <ul className="stock-list-inner">
                  {data.stockData &&
                    data.stockData.map((item, idx) => {
                      console.log(item);
                      return (
                        <li key={idx}>
                          <strong className="title">
                            {" "}
                            {item && item.name}
                          </strong>
                          <strong className="price">{stockResult(item)}</strong>
                          <div
                            className={
                              func(item.value.today, item.value.yesterday)
                                ? "info up"
                                : "info down"
                            }
                          >
                            <span className="info-sub01">
                              {func(item.value.today, item.value.yesterday)
                                ? "▴"
                                : "▼"}
                            </span>
                            <span className="info-sub02">
                              {item.value.today - item.value.yesterday}
                            </span>
                            <span className="info-sub03">
                              {(item.value.today - item.value.yesterday) *
                                0.01 +
                                "%"}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>

              <ul className="stock-link">
                <li>
                  <a href="#!">국내증시</a>
                </li>
                <li>
                  <a href="#!">해외증시</a>
                </li>
                <li>
                  <a href="#!">경제지표</a>
                </li>
              </ul>
            </div>
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="grid-vertical">
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
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
