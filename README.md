# 방명록 frontend

## 프로젝트 소개

전체적인 흐름은 소개페이지 -> 방명록남기기 입니다.

클라우드컴퓨팅실습 개인 과제를 위해 제작한 방명록 Frontend입니다.
React와 Vite를 이용하여 화면을 구현하고, Render에 배포된 FastAPI Backend와 API 통신이 이루어지도록 구성했습니다.
개인소개 페이지간 양방향 이동이 가능하도록 페이지를 구성하였습니다.

## 프로젝트 목적

React 기반 Frontend를 구현하고 FastAPI Backend API를 호출하여 실제 웹 환경에서 데이터를 조회, 작성 및 삭제하는 과정을 실습하는 것을 목표로 제작했습니다.

Vercel에 배포된 Frontend와 Render에 배포된 Backend를 연결하여 Frontend와 Backend 간 API 통신이 이루어지도록 구성했습니다.

## 주요 기능

- 방명록 목록 조회
- 새로운 방명록 작성
- 방명록 삭제
- FastAPI Backend API 연동
- 작성 및 삭제 후 방명록 목록 갱신
- 개인소개 페이지 이동 기능
- Vercel을 통한 Frontend 배포

## 사용 기술

- React
- Vite
- JavaScript
- Fetch API
- GitHub
- Vercel

## 파일 구성

- `src/App.jsx` : 방명록 화면 및 주요 기능 구현
- `src/main.jsx` : React 애플리케이션 실행
- `package.json` : 프로젝트 패키지 및 실행 설정
- `vite.config.js` : Vite 설정
- `.env` : Backend API 주소 설정

Frontend에서 FastAPI Backend의 REST API를 호출하여 데이터를 처리합니다.

- `GET /memos` : 방명록 목록 조회
- `POST /memos` : 새로운 방명록 작성
- `DELETE /memos/{id}` : 방명록 삭제

## 배포 주소

Vercel

https://memo-frontend-sand.vercel.app/

Backend API / Swagger UI

https://memo-backend-yeu0.onrender.com/docs

## 관련 프로젝트

- Personal Page  
  https://github.com/daerogu/my-page

- Guestbook Backend  
  https://github.com/daerogu/memo-backend

