import { React, useState } from "react";
import Header from "../../components/Header";
import SearchPopup from "../../popup/SearchPopup";
import "./Main.scss";

const Main = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  /**
   * 검색 팝업 오픈
   * @param {object} e 이벤트 객체 
   */
  const openSearchPopup = (e) => {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <>
      <Header />

      <SearchPopup isPopupOpen={isPopupOpen} openSearchPopup={openSearchPopup} />
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
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20230508_0/upload_1683512720230Vr2gk.png"
                  alt=""
                />
                <span>뉴스판</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20230508_0/upload_1683512791912c66Bt.png"
                  alt=""
                />
                <span>쇼핑판</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20230508_0/upload_1683512696361X4su0.png"
                  alt=""
                />
                <span>경제판</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20230508_0/upload_16835128325991gQ16.png"
                  alt=""
                />
                <span>스포츠판</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20230509_0/upload_1683614331473O5jI4.png"
                  alt=""
                />
                <span>메일</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20230509_0/upload_1683615368135Oq7ZA.png"
                  alt=""
                />
                <span>카페</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20230509_0/upload_16836153967537rYTc.png"
                  alt=""
                />
                <span>블로그</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/2021/0427/upload_1619497854375Q53rw.png"
                  alt=""
                />
                <span>더보기</span>
              </a>
            </li>
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
                    <span className="temperature">26.8°</span>서울
                  </div>
                  <div className="info-sub">
                    미세<span className="state good">좋음</span> · 초미세
                    <span className="state ">보통</span>
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
                <li>
                  <div className="img-box">
                    <span className="time">오전 11:00</span>
                    <img
                      src="https://s.pstatic.net/selected.phinf/MjAyMzA2MTRfMTQ4/MDAxNjg2NzE2Nzg5NTA3.1YT0Bp6tQPDzMUCa7ZoaYlWEh4yXPqaK8x264iMgvgEg.lAS8ZeVi4ASp0DqoMgt1iYnSAAjm_QcwE1UkxteK8A0g.PNG/image.png?type=f258_258_q90"
                      alt=""
                    />
                  </div>
                  <div className="info-box">
                    <div className="title">
                      방문판매 정경미 CJ제일제당에서 나왔습니다
                    </div>
                    <div className="title-sub">정경미 출연</div>
                    <div className="autor">
                      <span className="logo">
                        <img
                          src="https://s.pstatic.net/selected.phinf/MjAyMjA5MDVfMjk3/MDAxNjYyMzY4OTMxNTM3.qjjyEvFLg66XKHIAjZxJOz5liGPlZXutJFIk_OFyBwkg.Hhty0K6uOyTzbImPy5YwUMsBQUFw1bpCj4SKsAMWIwMg.JPEG/image.jpg?type=f54_54_q90"
                          alt=""
                        />
                      </span>
                      <span className="name">방문판매 정경미</span>
                    </div>
                  </div>
                  <button type="button" className="alarm">
                    <span className="blind">알람설정</span>
                  </button>
                </li>
                <li>
                  <div className="img-box">
                    <span className="time">오전 11:00</span>
                    <img
                      src="https://s.pstatic.net/selected.phinf/MjAyMzA2MTRfMjAw/MDAxNjg2NzA2OTY1NTQ0.YhPJS-WWDIe4zVeWStVWMZ6oR6sSgGVfD5iDTCoPbHkg.AckFaoIXRt_QVSZaLX7PnUqEcqa0-3YeZJMPlOnAP4cg.PNG/image.png?type=f258_258_q90"
                      alt=""
                    />
                  </div>
                  <div className="info-box">
                    <div className="title">
                      이디야커피x산리오 콜라보♥_치팅데이
                    </div>
                    <div className="title-sub">아메리카노 기프티콘 증정</div>
                    <div className="autor">
                      <span className="logo">
                        <img
                          src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fg-selected.pstatic.net%2FMjAyMTA3MzBfMjg5%2FMDAxNjI3NjI1NzA4NDk4.GhSc5e74dvJn74nxR88ck255heNYLQ4MkruYPj-BNz8g.7htz1GnfHiNV5RpH8YqzqXt6IfyO8fQSDc8RCC89qhsg.JPEG%2Fimage.jpg%22&service=selective&type=f54_54_q90"
                          alt=""
                        />
                      </span>
                      <span className="name">리코</span>
                    </div>
                  </div>
                  <button type="button" className="alarm">
                    <span className="blind">알람설정</span>
                  </button>
                </li>
                <li>
                  <div className="img-box">
                    <span className="time">오전 11:00</span>
                    <img
                      src="https://s.pstatic.net/selected.phinf/MjAyMzA2MTlfMjc2/MDAxNjg3MTY2NDUzNDQx.gbDYV6cc894Y-IDKh8jgADEtSSEEXRP6Z_o76rZxJlYg.S1q41FfHgA6d6jXb_p1KExmUvVpNWqRHj2JurdK9YSEg.JPEG/image.jpg?type=f258_258_q90"
                      alt=""
                    />
                  </div>
                  <div className="info-box">
                    <div className="title">
                      [신상EAT쇼] 네추럴라이즈X노티드 꾸미 영양제 신상!
                    </div>
                    <div className="title-sub">쇼호스트 노금미 출연</div>
                    <div className="autor">
                      <span className="logo">
                        <img
                          src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fg-selected.pstatic.net%2FMjAyMTAxMjZfMjIx%2FMDAxNjExNjE1MzQ3NDQx.Uh_X-AjdjzlRjZuJTlq2JDsgVj_tyXEKiYKeXEHjlgwg.im8ie3H6Kdg2_kKGMrlCKZq26hN59mfmRutwIF7SfOog.JPEG%2Fimage.jpg%22&service=selective&type=f54_54_q90"
                          alt=""
                        />
                      </span>
                      <span className="name">미미언니 노금미</span>
                    </div>
                  </div>
                  <button type="button" className="alarm">
                    <span className="blind">알람설정</span>
                  </button>
                </li>
                <li>
                  <div className="img-box">
                    <span className="time">오전 11:00</span>
                    <img
                      src="https://s.pstatic.net/selected.phinf/MjAyMzA2MDlfNzEg/MDAxNjg2MjkwNTUyNDU3.ixPWsnE4XrauuN_7jCtCF37XsvarQNk40Zv8vdsrG3Ig.hvr417Webd6VN1UoctTWK58wfpU4ZIGWFrck-ItgVIQg.JPEG/image.jpg?type=f258_258_q90"
                      alt=""
                    />
                  </div>
                  <div className="info-box">
                    <div className="title">
                      [슈퍼위크] 비스포크 그랑데AI 세탁기건조기 라이브
                    </div>
                    <div className="title-sub">10만명 라이브 시청</div>
                    <div className="autor">
                      <span className="logo">
                        <img
                          src="https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fshop1.phinf.naver.net%2F20200806_273%2F1596701799362OwRSa_PNG%2F120009051954483891_1605415639.png%22&service=selective&type=f54_54_q90"
                          alt=""
                        />
                      </span>
                      <span className="name">삼성전자 브랜드스토어</span>
                    </div>
                  </div>
                  <button type="button" className="alarm">
                    <span className="blind">알람설정</span>
                  </button>
                </li>
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
                  <li>
                    <strong className="title">코스피</strong>
                    <strong className="price">2,570.10</strong>
                    <div className="info down">
                      <span className="info-sub01">▼</span>
                      <span className="info-sub02">23.60</span>
                      <span className="info-sub03">-0.91%</span>
                    </div>
                  </li>
                  <li>
                    <strong className="title">코스닥</strong>
                    <strong className="price">872.72</strong>
                    <div className="info up">
                      <span className="info-sub01">▲</span>
                      <span className="info-sub02">3.66</span>
                      <span className="info-sub03">+0.42%</span>
                    </div>
                  </li>
                  <li>
                    <strong className="title">나스닥100 선물</strong>
                    <strong className="price">2,570.10</strong>
                    <div className="info down">
                      <span className="info-sub01">▼</span>
                      <span className="info-sub02">23.60</span>
                      <span className="info-sub03">-0.91%</span>
                    </div>
                  </li>
                  <li>
                    <strong className="title">S&P500 선물</strong>
                    <strong className="price">872.72</strong>
                    <div className="info up">
                      <span className="info-sub01">▲</span>
                      <span className="info-sub02">3.66</span>
                      <span className="info-sub03">+0.42%</span>
                    </div>
                  </li>
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
                  <span className="blind">쇼핑 LIVE</span>
                </h3>
                <a href="#!" className="link">
                  편성표
                </a>
              </div>
              <div className="now-list">
                <ul className="now-list-inner">
                  <li>
                    <a href="#!">
                      <span className="state live">LIVE</span>
                      <img
                        src="https://s.pstatic.net/tvcast.phinf/20230621_136/h9RGu_1687332970316PIjsi_PNG/1687332970154.png?type=m180_240"
                        alt=""
                        className="img"
                      />
                      <p className="info">장동윤X오대환 악마들 무비토크</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="state d-day">D-day</span>
                      <img
                        src="https://s.pstatic.net/tvcast.phinf/20230616_237/JinRc_1686892655074rBMA1_PNG/1686892655019.png?type=m180_240"
                        alt=""
                        className="img"
                      />
                      <p className="info">📌6/22 10PM 토크쇼 선공개</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/tvcast.phinf/20230621_146/3i63G_1687324200114u1M0k_JPEG/1687324200022.jpg?type=m180_240"
                        alt=""
                        className="img"
                      />
                      <p className="info">두시의 데이트 재재입니다❣</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/tvcast.phinf/20230622_99/5DpGT_1687408374437Dq2bB_PNG/1687408374354.png?type=m180_240"
                        alt=""
                        className="img"
                      />
                      <p className="info">📌오늘 낮 12시 김병철 인터뷰</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/tvcast.phinf/20230620_259/qYEeL_1687244282273ymkTK_PNG/1687244282168.png?type=m180_240"
                        alt=""
                        className="img"
                      />
                      <p className="info">범죄도시3 흥행감사GV</p>
                    </a>
                  </li>
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
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230612_88%2FcKYqA_1686537519966rFoBa_PNG%2F1686537515187.png%22&type=f264_396_q90&service=navermain"
                        alt=""
                        className="img"
                      />
                      <p className="info">
                        세상 모든 반짝이는 이모지는 💎티파니✨ 거예요
                        [범죄도시3]
                      </p>
                      <p className="brand">씨네플레이 CINEPLAY</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fmoment-phinf.pstatic.net%2FMjAyMzA2MTFfMjEx%2FMDAxNjg2NDkwMTc4NDE5.WcSXVM2BekHotjJKlaZKFiLLAm5wc9_pvkWRu6DEAAgg.vZuGpp5AZfGVnixbwA_tvwWlcWT-9gFlJa9DyFYe92Eg.JPEG%2F4EA44604-AE2C-4065-A414-EA55B5E40DD6.jpg%22&type=f264_396_q90&service=navermain"
                        alt=""
                        className="img"
                      />
                      <p className="info">
                        용산 도토리카페입니다:) 지브리느낌 가득한 카페에요.
                      </p>
                      <p className="brand">뭐라도 해야지</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230530_298%2FqcIST_1685425386480mPeRN_JPEG%2F1685425384938.jpeg%22&type=f264_396_q90&service=navermain"
                        alt=""
                        className="img"
                      />
                      <p className="info">
                        전소연 프로듀서님과 함께 Queencard 🤘
                        #QueencardChallenge
                      </p>
                      <p className="brand">
                        FANTASYBOYS - 방과후 설렘 시즌2 LIVE
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fvideo-phinf.pstatic.net%2F20230611_131%2F1686444999037wfEg4_JPEG%2Fcb2f789f-07f2-11ee-9971-48df37ae3dc4_01.jpg%22&type=f264_396_q90&service=navermain"
                        alt=""
                        className="img"
                      />
                      <p className="info">귀한컬러! 슬림핏그레이팬츠</p>
                      <p className="brand">coolmood</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img
                        src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230526_97%2F7dwfV_1685082790940zA6WF_JPEG%2Fe9269165-fb8e-11ed-837b-505dac8c3721_03.jpg%22&type=f264_396_q90&service=navermain"
                        alt=""
                        className="img"
                      />
                      <p className="info">
                        Box Interview : 백호의 귀염뽀짝 모먼트 🐯😘❣️
                      </p>
                      <p className="brand">2023 Weverse Con Festival</p>
                    </a>
                  </li>
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