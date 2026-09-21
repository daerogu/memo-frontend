# 방명록 frontend

> 전체 과제는 개인 소개 페이지 → 방명록 Frontend → FastAPI Backend → Supabase Database 구조로 구성되어 있습니다.

## 프로젝트 소개

클라우드컴퓨팅실습 개인과제를 위해 제작한 방명록 Frontend입니다.

React와 Vite를 이용하여 화면을 구현하고,
Render에 배포된 FastAPI Backend와 API 통신이 이루어지도록 구성했습니다.

기존 메모 앱 실습을 개인 소개 페이지와 연결되는 방명록 형태로 변형했으며,
개인 소개 페이지와 양방향 이동이 가능하도록 구성했습니다.

## 프로젝트 목적

Frontend는 사용자의 입력을 받고 FastAPI Backend API를 호출하여
방명록 데이터를 조회, 등록, 삭제합니다.

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

## 주요 파일 구성

- `src/App.jsx` : 방명록 화면 및 주요 기능 구현
- `src/main.jsx` : React 애플리케이션 실행
- `package.json` : 프로젝트 패키지 및 실행 설정
- `vite.config.js` : Vite 설정
- `.env` : Backend API 주소 설정

## API 연동

Frontend에서 FastAPI Backend의 REST API를 호출하여 데이터를 처리합니다.

- `GET /memos` : 방명록 목록 조회
- `POST /memos` : 새로운 방명록 작성
- `DELETE /memos/{id}` : 방명록 삭제

## 배포 주소

| 구분 | 주소 |
| --- | --- |
| 개인 소개 페이지 | https://my-page-lake-gamma.vercel.app/ |
| 방명록 Frontend | https://memo-frontend-sand.vercel.app/ |
| 방명록 Swagger UI | https://memo-backend-yeu0.onrender.com/docs |

## GitHub 저장소

| 프로젝트 | 저장소 |
| --- | --- |
| 개인 소개 페이지 | https://github.com/daerogu/my-page |
| 방명록 Frontend | https://github.com/daerogu/memo-frontend |
| 방명록 Backend | https://github.com/daerogu/memo-backend |
