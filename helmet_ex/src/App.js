import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

//헬멧이 잘 적용됐는 지 확인하려면 개발자툴(F12)에서 element를 확인해보면 됩니다.
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>안녕하세요!</title>
        <meta property="og:title" content="page one" />
      </Helmet>
    </div>
  );
}

export default App;
