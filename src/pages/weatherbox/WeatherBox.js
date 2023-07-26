import { React } from "react";

const WeatherBox = (props) => {
  const { data } = props;

  function dustResult(data) {
    let dust = ["매우 맑음", "맑음", "보통", "나쁨", "매우 나쁨", "최악"];
    return dust[data.weatherData.dust.value];
  }

  return (
    <>
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
    </>
  );
};

export default WeatherBox;
