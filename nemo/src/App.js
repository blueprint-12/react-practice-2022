import React from "react";
import Nemo from "./Nemo";
import ReactPortal from "./ReactPortal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  componentDidMount() {}

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //remove를 할 때에는 버튼의 값이 0아래로내려가지않게 조건문활용
  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없습니다.");
    }
  };

  render() {
    // const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    // console.log(nemo_count); 배열이 잘 만들어지는 지 확인

    //state가 변하는 것을 확인해보려면 render에서 return하기 전에 확인해본다.
    // console.log(this.state);

    return (
      <div className="App">
        <Nemo />
        {/* {nemo_count.map((n, index) => {
          return (
            <div
              key={index}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#ddd",
                margin: "40px",
              }}
            >
              nemo
            </div>
          );
        })} */}

        {/* <div>
          <button onClick={this.addNemo}>하나 추가</button>
          <button onClick={this.removeNemo}>하나 빼기</button>
        </div> */}
        <ReactPortal>
          <p>안녕하세요</p>
        </ReactPortal>
      </div>
    );
  }
}
export default App;
