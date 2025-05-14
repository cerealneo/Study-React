import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UseRefComponent } from "./components/UseRefComponent";
import { UseStateComponent } from "./components/UseStateComponent";
import { UseReducerComponent } from "./components/UseReducerComponent";
import { UseEffectComponent } from "./components/UseEffectComponent";
import { UseMemoComponent } from "./components/UseMemoComponent";
import { UseCallbackComponent } from "./components/UseCallbackComponent";
import { UseCustomComponent } from "./components/UseCustomComponent";
/* 
  날짜 : 2025/05/13
  이름 : 이민성
  내용 : ch04. 리액트 훅

  prettier-ignore : 주석안에 태그시 prettier 변환 제외됨
  ref 선언 : 컴포넌트 DOM 요소에 대한 참조값을 생성하고 참조하기 위한 Hook
  state 선언 : state는 컴포넌트 내부에서 사용되는 값
*/

function App() {
  return (
    <>
      <h3>4장 리액트 훅</h3>

      {/* useRef hook */}
      <UseRefComponent />
      <UseRefComponent />

      {/* useState hook */}
      <UseStateComponent />

      {/* useReducer hook */}
      <UseReducerComponent />

      {/* useEffect hook */}
      <UseEffectComponent />

      {/* useMemo hook */}
      <UseMemoComponent />

      {/* useCallback hook */}
      <UseCallbackComponent />

      {/* useCustom hook */}
      <UseCustomComponent />
    </>
  );
}

export default App;
