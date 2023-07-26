import { React } from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { openSearchPopup } = props;
  return (
    <>
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
    </>
  );
};

export default SearchBar;
