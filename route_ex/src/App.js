// import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">cat으로 가기</Link>
        <Link to="/dog">dog으로 가기</Link>
      </div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cat" component={Cat}>
        {/* <Cat /> */}
      </Route>
      <Route path="/dog" component={Dog}>
        {/* <Dog /> */}
      </Route>
    </div>
  );
}

export default App;
