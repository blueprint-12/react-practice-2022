import React, { useRef } from "react";
import "./App.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Test from "./Test";

const getDummyList = () => {
  return axios.get("http://localhost:5001/DUMMY_ROOM_LIST");
};

const addSleepData = (data) => {
  return axios.post("http://localhost:5001/DUMMY_ROOM_LIST", data);
};

function App() {
  const day_input = useRef("");
  const time_input = useRef("");

  //현재 쿼리데이터를 무효화시켜주는 hook useQueryClient
  //이 queryClient의 invalidateQueries라는 함수가 쿼리(유니크한 쿼리 키를 가지고 있는 쿼리)를 무효화 시켜준다.
  const queryclient = useQueryClient();

  //useQuery 훅은 첫번째 인자로 쿼리 키를 받는다.
  //두번째 인자로 API 요청 함수입니다. getData(), 프라미스 객체 이런거
  //세번째 인자로는 옵션객체(요청 성공시 머할지, 실패시 등등) 를 넘길 수 있습니다.
  const dummy_query = useQuery("dummy_list", getDummyList, {
    //dummyList를 5번호출하면 getDummyList함수는 1번실행되는데
    //옵션에 넣은 것들은 5번 연속실행된다. 이 점을 염두해둬야 한다.
    onSuccess: (data) => {
      console.log(data);
    },
  });

  //useQuery와 다르게 유니크 키값이 필요없이 바로 첫번째인자로 함수를 바로 넣어주고
  //두번째인자로 옵션이 들어갑니다.
  // mutate라는 함수를 구조분해할당으로 받아와야 합니다.
  //보통은 mutate함수를 이름을 따로 붙여서 뽑아내는데 그냥해도된다.

  // const { mutate: addSleepDataMutate } = useMutation(addSleepData);
  const { mutate } = useMutation(addSleepData, {
    onSuccess: () => {
      //데이터 목록을 다시 불러오면 ok!
      //invalidateQueries의 인자로 무효화시킬 쿼리의 키값을 넘겨주면된다.
      //쿼리 키를 안넘기게 되면 모든 쿼리가 날라갑니다.
      queryclient.invalidateQueries("dummy_list");
      day_input.current.value = "";
      time_input.current.value = "";
    },
  });

  //isLoading은 기본 프로퍼티로 제공된다. 따로 만들 필요가 없다. -> React.Suspense 로 처리해줌
  // if (dummy_query.isLoading) {
  //   return null;
  // }
  return (
    <div className="App">
      <Test />
      {dummy_query.data.data.map((el) => {
        return (
          <div key={el.id}>
            <p>{el.day}</p>
            <p>{el.sleep_time}</p>
          </div>
        );
      })}
      <input ref={day_input} />
      <input ref={time_input} />
      <button
        onClick={() => {
          const data = {
            day: day_input.current.value,
            sleep_time: time_input.current.value,
          };
          mutate(data);
        }}
      >
        데이터 추가하기
      </button>
    </div>
  );
}

export default App;
