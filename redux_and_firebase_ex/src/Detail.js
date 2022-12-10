import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket, updateBucket } from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;
  console.log(params);
  console.log("버켓 인덱스", bucket_index);
  const bucket_list = useSelector((state) => state.bucket.list);
  // console.log(bucket_list);
  // console.log(params);
  console.log("디테일", bucket_list);
  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <button
        onClick={() => {
          dispatch(updateBucket(bucket_index));
        }}
      >
        완료하기
      </button>
      <button
        onClick={() => {
          console.log("뒤로 가욧~!");
          //디스패치에 디스패치함수(이 함수에도 버켓의 index를 넘겨줘야함!)를 넣어줘야겠죠? + 액션생성함수를 임포트해옵니다
          //deleteBucket으로가서 내용에 console.log("지울 버켓 인덱스"+ bucket_index) 를 추가해서 작동을 확인해봅시다.
          dispatch(deleteBucket(bucket_index));
          history.goBack();
          // history.push("/");
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default Detail;
