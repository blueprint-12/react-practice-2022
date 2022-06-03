import React from "react";
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router-dom";

import Main from "./Main";
import AddPage from "./AddPage";
import NotFound from "./NotFound";

function App() {
  const history = useHistory();

  return (
    <AppWrap className="App">
      <Container>
        <Title
          onClick={() => {
            history.push("/");
          }}
        >
          MY DICTIONARY
        </Title>
        <Line />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/addpage/">
            <AddPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #eee;
  /* 100vh 는 화면비율로해서 100%주겠다는 의미 */
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  /* width: 1000px; */
  min-width: 350px;

  /* & > * {
    min-width: 350px;
  } */

  // min-height는 자동으로 스크롤생김
  /* min-height: 60vh; */
  background-color: #f8d1d1;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
const Title = styled.div`
  cursor: pointer;
  color: slateblue;
  font-weight: bold;
  font-size: 1.3rem;
`;
const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #fff;
`;

export default App;
