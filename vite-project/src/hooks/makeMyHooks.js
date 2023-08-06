// TODO: useEffect, useState 간단히 직접 구현해보기
// 1. 클로저, IIFE 사용해서 return => 구조 분해 할당 후 export 까지
// ! 항상 동일한 순서로 hook들이 호출되어야 하기 때문에 최상위에서 호출해야 한다. => 원하는 값을 제대로 뽑아오게 보장하기 위함

import { render } from "../main";

// interface of useState
// [state, setState] 튜플형식으로 리턴
// state -> saved state || initialValue
// setState: (value) => void;
// saved state = value;
// re-render

//? key point: state는 여러번호출 될 수 있다. state가 여러개 => 배열(array)에 저장
// 함수가 호출될 때마다 값이 초기화되면 안되니까 바깥에(클로저활용) hooks라는 배열을 만들어서 저장

export const { useState, useEffect } = (function makeMyHooks() {
  const hooks = [];
  let hookIndex = 0; // 몇번째 배열에 어떤 값이 매칭되어있는 지 알아야 하기 때문에

  function useState(initialValue) {
    if (hooks[hookIndex] === undefined) {
      hooks[hookIndex] = initialValue;
    }

    //initialValue가 함수이고 맨 처음 실행되는 거라면 함수 실행
    //리액트에서 초기값으로 콜백함수를 허용하는데 연산이 크거나 복잡한 값을 최초 렌더링 첫번째에만 실행하고 그 뒤로는 저장된 값을 사용하게 한다.
    if (typeof initialValue === "function") {
      if (hooks[hookIndex] === undefined) {
        hooks[hookIndex] = initialValue();
      }
    }
    const state = hooks[hookIndex];

    // setStaet 내부에도 클로저를 만들어서 이 함수에 해당하는 state값의 index를 고정시켜줘야 한다.
    // setState는 아래 함수를 즉시실행(IIFE)시킨 리턴값
    // 실행시점: useState가 호출될 때
    const setState = (function () {
      const currentIndex = hookIndex;
      return function (value) {
        console.log("currentIndex", currentIndex);
        console.log("hookIndex", hookIndex);
        hooks[currentIndex] = value;
        //re-render, 그리고 re-render됐으면 hookIndex를 초기화
        render();
        //hookIndex를 초기화시켜주지 않으면 hookIndex의 값이 점점늘어난다
        hookIndex = 0;
      };
    })();

    hookIndex++;
    return [state, setState];
  }

  // interface

  // 클린업함수 제외
  // effect함수, deps 배열
  // isFirstCall -> effect();
  // isDepsNotProvided -> effect();
  // hasDepsChanged -> effect();

  // useEffect에서 기억해야하는 값?
  // -> 의존성 배열 안의 값!
  function useEffect(effect, dpes) {
    const prevDeps = hooks[hookIndex];

    // 이전 의존값이 undefined이면 처음호출된 애라는것을 검증하는 로직
    //? 왜 변수가 아니라 함수로 만들어서 사용? => 함수를 활용한 `지연 평가`를 사용하기 위해, 특히 hasDepsChanged 의 경우 deps.some()을 쓰고 있는데 이 deps가 함수가 호출됐을 때 제공되지 않을수도 있다 그렇게되면 undefined.some()을 호출하게 되는 셈
    // 함수 지연 평가: 호출되기 전에는 평가되지 않는것 ,useState의 초기값으로 함수를 넘겨주는 것도 허용 lazy load
    const isFirstCall = () => prevDeps === undefined;
    const isDepsNotProvided = () => deps === undefined;
    //tips: 내장 배열 메서드 중 some()함수의 콜백은 순회하는 배열의 값중 하나라도 true를 리턴하면 true를 반환한다. (forEach, map 과 비슷)
    const hasDepsChanged = () =>
      deps.some((dep, index) => dep !== prevDeps[index]);

    // OR연산자는 앞에서 하나라도 true면 이후 것들은 평가하지 않음 위에 함수 지연평가를 같이 활용한 예
    if (isFirstCall() || isDepsNotProvided() || hasDepsChanged()) {
      effect();
    }

    // 검증이 다 끝나고 나서 deps 업데이트
    hooks[hookIndex] = deps;
    console.log("hooks", JSON.stringify(hooks));
    // ? 참고로 chrome에서 hooks를 콘솔에 찍어볼 때,값이 undefined가 아니라 null로 찍히는 경우
    // 오류가 아니라 내부적으로 그렇게 개발자들이 만들어놓았다고 함 그래서 보기 편하려고 stringify사용 -> undefined가 null로 찍힘
    hookIndex++;
  }

  return { useState, useEffect };
})();
