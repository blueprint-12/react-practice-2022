import Container from "./components/Container";
import Counter from "./components/Counter";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import ErrorB from "./ErrorB";
import { ErrorBoundary } from "react-error-boundary";

//ErrorFallback 컴포넌트에는 err 객체를 받아서 로깅할 수 있다.
//이 err객체는 ErrorBoundary 컴포넌트 내부의 기존 컴포넌트가 throw한 err객체이다.

const ErrorFallback = (err) => {
  console.log(err);
  return <div>에러 폴백입니다. </div>;
};

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

  const data = { my_cat: "동글이", age: 20 };
  // try {
  //   try {
  //     let cat_age = data.age.age.age; //없는 값에 접근
  //     console.log(cat_age);
  //     const age_error = new Error("동글이의 나이가 틀렸어요");
  //     age_error.name = "inner_err";
  //     if (cat_age !== 20) {
  //       throw age_error;
  //     }
  //   } catch (err) {
  //     if (err.name !== "inner_err") {
  //       throw err;
  //     }
  //   } finally {
  //     console.log("끝났다.");
  //   }
  // } catch (err) {
  //   console.log("외부 catch:: ", err);
  // }

  let my_new_error = new Error("에러랍니다!!!");
  let my_custom_syntaxError = new SyntaxError("끾끼");

  return (
    <Container>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorB />
      </ErrorBoundary>
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
