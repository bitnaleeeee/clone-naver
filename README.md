## NAVER 모바일 페이지 클론코딩

- 배포 URL: [https://clone-naver.vercel.app/](https://clone-naver.vercel.app/)
  - 네이버 검색 API를 통한 연관검색어 로직 작업중

# 날씨

- 날씨의 미세먼지와 초미세 먼지값을 넣으세요.
- 미세먼지의 값을 맑음 ~ 매우나쁨 값으로 변환하는 함수를 만들어 나타내주세요.
  - 0: 매우 맑음
  - 1: 맑음
  - 2: 보통
  - 3: 나쁨
  - 4: 매우나쁨
  - 5: 최악

**코드 예시**

```javascript
"dust": {
	"value": 0, // 초미세먼지
	"bigValue": 3 // 미세먼지
}
```

# 주식

- 주가는 소숫점 2번째 자리까지 변환해주세요.(예: 99293 >> 992.93)
- 어제와 오늘의 주가를 비교해서 금액이 올랐으면 붉은색(up 클래스), 내렸으면 파란색(down 클래스)로 표시해주세요.
- info-sub01 항목에는 화살표로 내림/올림 차이를 표시해주세요.
- info-sub02 항목에는 어제보다 차이나는 오늘의 주가의 값을 나타내주세요.
- info-sub03 항목에는 어제와 오늘의 주가의 차이를 백분률로 나타내주세요.

# 편성표

- state 항목에 들어가는 live 혹은 dday 항목에 맞게 클래스를 알맞게 설정해주세요.
