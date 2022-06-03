// bucket.js
// firebase랑 통신하는 함수만들어야하니까 import 이전에 만들었던 db해줌
// 파이어베이스 CRUD할 때 썼던 내장함수들도 다 가져온다.
// import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

//😎 Actions
//-얘네가 액션 객체는 아니고 액션 type(key명)들임

// const LOAD = "bucket/LOAD";
const CREATE = "word/CREATE";
const DELETE = "word/DELETE";
const UPDATE = "word/UPDATE";

//😎 state의 초기값 지정하기 (당연히 딕셔너리 형태로 들어가야겠죠, App.js에 있는 내용을 가져오면 됨)
const initialState = {
  voca: [
    {
      name: "단어명1",
      completed: false,
      description: "단어 설명1",
      example: "단어 예시1",
    },
    {
      name: "단어명2",
      completed: false,
      description: "단어 설명2",
      example: "단어 예시2",
    },
    {
      name: "단어명3",
      completed: false,
      description: "단어 설명3",
      example: "단어 예시3",
    },
    {
      name: "단어명4",
      completed: false,
      description: "단어 설명4",
      example: "단어 예시4",
    },
  ],
  //아래처럼 단순 텍스트가 아니라 위처럼 딕셔너리가 됐음
  // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "과자 먹기"],
};

//😎 Action Creators(액션 생성 함수)
/*
우리가 액션을 전달값으로 넘겨주려면 항상 {key: value} 형태로
귀찮게 써줘야 하는데 액션 생성 함수를 사용하면 쉽게 처리할 수 있다.
param으로 들어온 거는 새로운 버켓 정보
*/

//액션 생성 함수 - 로드
/*파이어스토어(DB대체)에서 넘어온 data를 그대로 넣어주는 역할이니까
 변수명(param)은 bucket_list로 준다. 
*/

//액션 생성 함수 - 생성
export function createWord(word) {
  return { type: CREATE, word };
}
//액션 생성 함수 - 수정
export function updateWord(word_index) {
  return { type: UPDATE, word_index };
}
//액션 생성 함수 - 삭제
export function deleteWord(word_index) {
  return { type: DELETE, word_index };
}

//😎 Reducer
/* 
보면 export default로 reducer를 내보내고 있음
위에서 초기값을 만들어줬으니까 여기에는 state에는 {}대신 initial state를 넣어줍시다.
*/
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // case "bucket/LOAD": {
    //   return { list: action.bucket_list };
    // }

    case "word/CREATE": {
      const new_word_voca = [...state.voca, action.word];
      return { voca: new_word_voca };
    }

    case "word/UPDATE": {
      const new_word_voca = state.voca.map((v, idx) => {
        if (parseInt(action.word_index) === idx) {
          return { ...v, completed: true };
        } else {
          //인덱스가 같지 않은 애들은 그냥 원래 값 그대로 넣어 줘!라는 의미
          return v;
        }
      });

      return { voca: new_word_voca };
    }

    case "word/DELETE": {
      console.log("스테이트 & 액션 확인", state, action);
      const new_word_voca = state.voca.filter((l, idx) => {
        console.log("액션워드인덱스", action.bucket_index, action.bucket_index);
        return parseInt(action.word_index) !== idx;
      });
      return { voca: new_word_voca };
    }
    default:
      return state;
  }
}
