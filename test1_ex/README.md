## **key word**

node_modules 폴더가 없는 상태로 파일을 클론해올 경우

```Bash
npm i //npm의 경우, i는 install의 약자
yarn install //yarn의 경우
```

명령어를 통해 노드 모듈즈 설치 가능(실수로 삭제했을 경우도 ok, package.json에서 의존 패키지를 기억하고 있음)

- 인라인 스타일을 객체로 만들어서 JSX에 넣기
- prop로 Component를 내려주는 children(레이아웃 Compoenent만들어서 사용)
- 내려준 prop로 조건부 렌더링 활용
- 여러 개의 prop를 일일이 prop이름을 붙여 내려주는 거 대신에 객체로 만들어 해당 객체를 전개연산자로 내려주기 e.g) container라는 객체를 만든 뒤 해당 컴포넌트에 {...containerprops} 해주면 된다. -> prop명 작성 필요X
- 컴포넌트명.defaultProps = { prop명: 기본값 } 을 통해 부모컴포넌트에서 해당 값을 내려주는 것을 까먹었을 때, undefined로 받아오는 오류를 방지하기 위해 사용
