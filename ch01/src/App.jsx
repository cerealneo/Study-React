import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*
  날짜 : 2025/05/12
  이름 : 이민성
  내용 : 1장 리액트 개요 및 개발환경 설정

  개발 환경 구축
    1) node.js 설치
    2) VSCode 플러그인 설치
      - ES7+ React/Redux/React-Native snippets
      - ESLint
      - Prettier - Code formatter
    3) 브라우저 확장 도구 
      - React Developer Tools

  프로젝트 생성
    > npm create vite@latest
      - React 선택, JavaScript + SWC 선택

  의존성 설치
    > npm install

  프로젝트 실행
    > npm run dev

  배포하기
    > npm run build
    > npx serve -s dist : 베시쉘

  format 설정
  - File -> Preferenses -> settings -> format 검색
    > Editor: Format On Save 체크
    > Default Formatter : prettier 선택
  
  eslint.config.js 
  - no-unused-vars : warn 으로 변경

  * 보안오류 해결
   - https://developer-cat.tistory.com/67
*/

function App() {
  return (
    <>
      <h3> ch01. React 개요 및 개발환경 설정</h3>
      <h4>Hello World!</h4>
      <h4>Hello React!</h4>
    </>
  );
}

export default App;
