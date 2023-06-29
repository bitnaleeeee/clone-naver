import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import "./SearchPopup.scss";

// 중복 실행 방지
let timer = null;

const SearchPopup = (props) => {
  const { isPopupOpen, openSearchPopup } = props;
  const [searchData, setSearchData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const focusRef = useRef();
  useEffect(() => {
    if (isPopupOpen) {
      focusRef.current.focus();
    }
  });

  /**
   * 통신 API
   * @param {string} params 검색 키워드
   */
  const callAPI = (params) => {
    axios
      .get(`https://json-server-beryl.vercel.app/api/sick?q=${params}`)
      .then((respon) => {
        console.log("Respon", respon);
        setHighlight(respon.data, params);
      })
      .catch(() => {
        console.log("Fail");
      });
  };

  /**
   * 검색어 하이라이트
   * @param {*} respon 검색 응답값
   * @param {*} params 검색 키워드
   */
  const setHighlight = (data, params) => {
    let newData = [];
    let responData = data;
    responData.forEach(function (item) {
      let regex = new RegExp(params, "gi");
      let result = item.sickNm.replace(
        regex,
        "<strong>" + params + "</strong>"
      );
      newData.push({
        sickNm: result,
      });
    });
    setSearchData(newData);
  };

  /**
   * 인풋 변경 이벤트
   * @param {object} e 이벤트 객체
   */
  const changeSearchInput = (e) => {
    let str = e.target.value;

    if (str.length > 0) {
      let blank_pattern = /^\s+|\s+$/g;
      if (str.replace(blank_pattern, '') === '') {
        return false;
      }

      // 중복 실행 방지
      clearTimeout(timer);
      timer = setTimeout(function () {
        callAPI(str);
      }, 300);

    } else {
      setSearchData([]);
    }
  };

  return (
    <div className={isPopupOpen ? "search-popup on" : "search-popup off"}>
      <div className="search-popup-inner">
        <div className="input-wrap">
          <button type="button" className="back-btn" onClick={openSearchPopup}>
            <span className="blind">뒤로가기</span>
          </button>
          <input
            type="text"
            className="search-input"
            title="검색어 입력"
            placeholder="검색어를 입력해주세요."
            onChange={changeSearchInput}
            ref={focusRef}
          />
          <button type="button" className="search-btn">
            <span className="blind">검색</span>
          </button>
        </div>

        <div className="result-wrap">
          {searchData.length ? (
            <ul className="result-list">
              {searchData.map((item, idx) => {

                if (idx <= 10) {
                  return (
                    <li key={idx}>
                      <button type="button" className="search-btn">
                        <span className="blind">검색</span>
                      </button>
                      <a href="#!" className="text" dangerouslySetInnerHTML={{ __html: item.sickNm }} />
                      <button type="button" className="auto-set-btn">
                        <span className="blind">키워드 자동완성</span>
                      </button>
                    </li>
                  );
                }
              })}
              <li className="auto-set-text">
                관심사를 반영한 컨텍스트 자동완성
                <button className="help-btn">
                  <span className="blind">도움말</span>
                </button>
              </li>
            </ul>
          ) : (
            <div className="info-text">
              <p>최근 검색어 내역이 없습니다.</p>
              <p>
                설정이 초기화된다면 <span>도움말</span>을 확인해주세요.
              </p>
            </div>
          )}
        </div>

        <div className="added-wrap">
          <button type="button" className="auto-save-btn">
            자동저장 끄기
          </button>
          <button type="button" className="advice-btn">
            도움말
          </button>
          <button type="button" className="close-btn" onClick={openSearchPopup}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchPopup;