// bucket.js
// firebase랑 통신하는 함수만들어야하니까 import 이전에 만들었던 db해줌
// 파이어베이스 CRUD할 때 썼던 내장함수들도 다 가져온다.
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

/*😎덕스 구조 - 리덕스 방법론 중 하나로, 기능별로 묶어서 관련 기능을 다 때려넣은 것
 여기서 기능 별이란 뜻은 버켓 리스트 라는 기능이 있으면 그 기능에
 관련된 모든 리덕스 동작을 전부 여기에 넣어놓은 것
 */

//😎 Actions
//-얘네가 액션 객체는 아니고 액션 type(key명)들임

const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

// 우리한테 없는 기능은 주석처리
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";

//😎 state의 초기값 지정하기 (당연히 딕셔너리 형태로 들어가야겠죠, App.js에 있는 내용을 가져오면 됨)
const initialState = {
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 하기", completed: false },
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
export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list: bucket_list };
}
//액션 생성 함수 - 생성
export function createBucket(bucket) {
  return { type: CREATE, bucket: bucket };
}
//액션 생성 함수 - 수정
export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}
//액션 생성 함수 - 삭제
export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

/* 
  우리가 반환해야 하는 action 객체는 딕셔너리 형인데
  왜 뒤에있는 value는 key: value형태가 아님?
  **JS는 key와 value가 똑같이 생겼으면 생략가능함
  {widget: widget } = { widget}
  export function createWidget(widget) {
   return { type: REMOVE, widget };
 } 
*/

//😎 middlewares
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "bucket"));
    console.log("버킷데이터", bucket_data);

    //위에서 받아온 데이터를 우리가 쓰기 쉬운 형태인 [] 배열로 만들기
    //여기서 doc은 document 즉, 버켓 정보가 담긴 document하나를 말한다.
    let bucket_list = [];
    bucket_data.forEach((doc) => {
      console.log(doc.data());
      //우리가 가져온 데베의 데이터는 아이디도 있어야 하니까 그것도 넣어준다.
      bucket_list.push({ id: doc.id, ...doc.data() });
    });
    // console.log("버킷리스트 서버에서 받아온거", bucket_list);

    dispatch(loadBucket(bucket_list));
  };
};

//DB 버켓 생성부터는
//액션도 액션 생성함수도 있으니까 미들웨어 함수만 만들어주면 된다.
export const addBucketFB = (bucket) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "bucket"), bucket);
    //그냥 docRef.data() 안되는이유 docRef가 참조값이라 그럼
    // const _bucket = await getDoc(docRef); 어차피 우리 bucket에 내용 다 가지고 있어서 굳이 안받아와도됨
    const bucket_data = { id: docRef.id, ...bucket };
    // console.log((await getDoc(docRef)).data());
    console.log("DB버켓 생성된 거", bucket_data);

    //이제 액션을 일으켜줍니다.
    dispatch(createBucket(bucket_data));
  };
};

//DB수정 -
export const updateBucketFB = () => {
  return function (dispatch) {};
};

//😎 Reducer
/* 
보면 export default로 reducer를 내보내고 있음
위에서 초기값을 만들어줬으니까 여기에는 state에는 {}대신 initial state를 넣어줍시다.
*/
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
      return { list: action.bucket_list };
    }

    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case "bucket/UPDATE": {
      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          return { ...l, completed: true };
        } else {
          //인덱스가 같지 않은 애들은 그냥 원래 값 그대로 넣어 줘!라는 의미
          return l;
        }
      });

      return { list: new_bucket_list };
    }

    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((l, idx) => {
        console.log("액션버켓인덱스", action.bucket_index, action.bucket_index);
        return parseInt(action.bucket_index) !== idx;
      });
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
