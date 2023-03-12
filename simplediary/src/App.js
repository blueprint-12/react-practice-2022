import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import "./App.css";
import DiaryList from "./components/DiaryList";
import DiaryEditor from "./DiaryEditor";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((item) => item.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((item) =>
        //기존 state의 item의 아이디가 수정하려는 item의 아이디(targetId) 와 같으면
        //해당 객체의 기존 프로퍼티는 그대로 두고, 콘텐츠의 내용만 새로운 아이로 업데이트
        //주의점: contents가 뒤로 가게 전개 연산자와 같이 사용
        //수정하려는 item이 아니라면 원래 item 그대로 return
        item.id === action.targetId
          ? { ...item, contents: action.newContents }
          : item
      );
    }
    default:
      return state;
  }
};
export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

function App() {
  //useReducer를 통해 상태관리를 할 것이라서 useState는 주석처리
  // const [data, setData] = useState([]);

  //useReducer의 2번째 인자는 항상 dispatch로
  const [data, dispatch] = useReducer(reducer, []);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    console.log(res);

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        contents: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    //action 객체에 타입을 적어주고 어떤 데이터로 state를 변경할지도 넘겨줘야 하기 때문에
    //setData로 전달해준 새로운 state를 data라는 이름으로 액션객체에 같이 실어줍니다.
    dispatch({ type: "INIT", data: initData });
    // setData(initData);
  };
  useEffect(() => {
    getData();
  }, []);

  //useRef를 사용하여 고유 아이디를 만들 수 있다.
  const dataId = useRef(0);

  //리스트 아이템 추가 기능
  const onCreate = useCallback((author, contents, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, contents, emotion, id: dataId.current },
    });

    dataId.current += 1;
  }, []);

  //리스트 아이템 삭제 기능
  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  //리스트 아이템 수정 기능
  const onEdit = useCallback((targetId, newContents) => {
    dispatch({ type: "EDIT", targetId, newContents });
  }, []);

  //useMemo를 사용하지않고 그냥 객체로 묶어주게되면 컴포넌트가 재생성될 때 같이 다시 만들어지게 된다.
  //그렇기 때문에 useMemo를 통해 묶어줘야 한다.
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  //리액트에서는 return을 가지고 있는 함수를 메모이제이션할 수 있다.
  //메모이제이션하고 싶은 함수를 useMemo를 통해 감싸주면 된다.
  //useMemo()의 첫번째 인자로 콜백함수를 받고 이 콜백함수가 리턴하는 값(연산)을 최적화할 수 있도록 도와준다.
  //useMemo(콜백함수, [deps])-> 콜백함수를 유즈메모로 감싸주면 리턴해주는 아이는 더 이상 함수가 아니다.
  //그렇기 때문에 호출할 때에 ()는 없애줘야 한다. deps는 useEffect의 의존성 배열과 같은 역할을 한다.
  //해당 값에 어떤 값이 변했을 때에만 콜백 연산을 다시 수행할 지 알려준다.

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((item) => item.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = Math.floor((goodCount / data.length) * 100);
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  //useMemo를 함수에 씌워주었으니
  // const { goodCount, badCount, goodRatio } = getDiaryAnalysis();
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor />
          <div>전체 일기: {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 안좋은 일기 개수: {badCount}</div>
          <div>기분 좋은 일기 퍼센트: {goodRatio}%</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
