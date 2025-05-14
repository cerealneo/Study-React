import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassTypeComponent from "./components/ClassTypeComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ParentComponent from "./components/ParentComponent";
import PropsComponent from "./components/PropsComponent";
import { ContentComponent } from "./components/ContentComponent";
import StateComponent from "./components/StateComponent";
import LifeCycleComponent from "./components/LifeCycleComponent";

/* 
  날짜 : 2025/05/13
  이름 : 이민성
  내용 : ch03. 리액트 컴포넌트  

  단축키
    - rcc : 클래스 컴포넌트
    - rfc : 컴포넌트 작성과 동시에 export
    - rsf : props를 가진 컴포넌트
    - rsc : 빈 div를 가진 화살표 함수 컴포넌트
    - rafc : 화살표 함수 컴포넌트를 생성과 함께 export하고, 컴포넌트가 있는 js파일명이 div안에 작성됨
*/

function App() {
  return (
    <>
      <h3>3장 리액트 컴포넌트</h3>

      {/* 클래스형 컴포넌트 */}
      <ClassTypeComponent />

      {/* 함수형 컴포넌트 */}
      <FunctionalComponent />

      {/* 중첩 컴포넌트 */}
      <ParentComponent />

      {/* Props 컴포넌트 */}
      <PropsComponent
        title="프로퍼티 컴포넌트"
        message="속성을 갖는 컴포넌트"
      />

      {/* 내용을 갖는 컴포넌트 */}
      <ContentComponent>
        <h5>내용제목입니다.</h5>
        <p>내용을 갖는 컴포넌트 입니다.</p>
      </ContentComponent>

      {/* State 컴포넌트 */}
      <StateComponent />

      {/* 컴포넌트 생명주기 */}
      <LifeCycleComponent />
    </>
  );
}

export default App;
