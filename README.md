


## 개인 프로젝트: 네이버 모바일 페이지를 모티브로한 웹 페이지 제작
이 프로젝트는 NAVER 모바일 페이지를 클론하여 다양한 웹 기술을 탐구하고 구현하는 것을 목표로 합니다.

## 배포 URL: [Clone NAVER](https://clone-naver.vercel.app/)

## 현재 기능
- 연관 검색어: NAVER 검색 API를 사용하여 연관 검색어 로직을 구현 중입니다.
- 날씨 섹션: 미세먼지와 초미세먼지 값에 대한 공기질 지수 표시.
- 숫자로 된 미세먼지 값을 설명적 상태(예: '매우 좋음'에서 '매우 나쁨'까지)로 변환하는 사용자 정의 함수 사용**코드 예시**

```javascript
"dust": {
	"value": 0, // 초미세먼지
	"bigValue": 3 // 미세먼지
}
```
- 주식 가격:
	- 주식 가격을 소수점 둘째 자리까지 표시.
	- 주가 변동을 시각적으로 표시: 가격 상승은 빨간색(up 클래스), 하락은 파란색(down 클래스)으로 표시.
	- info-sub01 항목에 화살표로 가격 변동을, info-sub02 항목에 실제 가격 차이를, info-sub03 항목에 백분율 차이를 표시.

- 편성표:
상태(live 또는 dday)에 따라 적절한 클래스를 할당.

## 프로젝트 소개
이 NAVER 모바일 페이지 클론은 NAVER 검색 API를 통한 연관 검색어 로직 구현을 목표로 합니다. 이 프로젝트는 Vercel에서 호스팅되며 SCSS, JavaScript, HTML, CSS를 광범위하게 사용합니다.

