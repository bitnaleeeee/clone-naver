import React from "react";
import "./StockBox.scss";

const StockBox = (props) => {
  const { data } = props;

  function stockResult(data) {
    let a = data.value.today;
    let str = String(a); //스트링 형태임
    let answer = str.slice(-2); //두개 2개 문자
    let test = Number(str.slice(0, -2)); //앞에 문자
    let c = test.toLocaleString(); // 콤마 찍은 앞에 수
    let d = String(answer);
    let e = c + "." + d;
    return e;
  }
  function func(a, b) {
    let result = false;
    if (a - b > 0) {
      result = true;
    }
    return result;
  }

  return (
    <>
      <div className="grid-box stock-box">
        <div className="stock-list">
          <ul className="stock-list-inner">
            {data.stockData &&
              data.stockData.map((item, idx) => {
                console.log(item);
                return (
                  <li key={idx}>
                    <strong className="title"> {item && item.name}</strong>
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
                        {(item.value.today - item.value.yesterday) * 0.01 + "%"}
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
    </>
  );
};

export default StockBox;
