// import "./App.css";
import Container from "./components/Container";
import Counter from "./components/Counter";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

function App() {
  //인라인 스타일을 객체로 만들어서 적용하기
  //카멜케이스 적용
  const style = {
    App: {
      backgroundColor: "mediumaquamarine",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  //어떤 컴포넌트에 내려줘야 하는 props가 많을 경우,
  //전개연산자를 통해 여러개의 props를 한번에 내려 줄 수 있습니다.
  // {...couterProps} 이런 식으로 원래는 props 명을 붙여야 하지만 이렇게 보내면
  // props의 명을 붙일 필요가 없나봄
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    initialValue: 5,
  };

  //Counter 컴포에 initialValue 라는 이름으로 5를 보냄
  // const number = 4;
  return (
    <Container>
      <div className="App" style={style.App}>
        <MyHeader />
        <h2 style={style.h2}>안녕하세용 😎</h2>
        <b id="bold_text" style={style.bold_text}>
          React.js
        </b>
        <Counter {...counterProps} />
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
