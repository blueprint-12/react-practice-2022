import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWord } from "./redux/modules/word";

const AddPage = (props) => {
  const name = React.useRef(null);
  const description = React.useRef(null);
  const example = React.useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  // setList([...list, text.current.value]);
  // 모듈에 있는 액션 생성 함수를 임포트해오고 써준다
  // 액션 생성 함수가 {key : value} 이렇게 생긴 애를 리턴해주니까..
  // 액션 생성 함수에 새로운 bucket의 내용을 전달해준다. 참고로 이건 바로 리턴해줘야해서 바로 실행 ()
  // text.current.value가 input태그의 입력값이니까 이걸 전달해준다.
  // dispatch(createWord({ text: text.current.value, completed: false }));

  return (
    <>
      <Title>단어 추가하기</Title>
      <ContForm
        onSubmit={() => {
          dispatch(
            createWord({
              name: name.current.value,
              completed: false,
              description: description.current.value,
              example: example.current.value,
            })
          );
          alert("등록 완료!");
          history.push("/");
        }}
      >
        <Content>
          <div className="word-name">
            <SmallTitle>단어</SmallTitle>
            <SmallContent>
              <Input type="text" ref={name} required />
            </SmallContent>
          </div>
          <div className="word-explain">
            <SmallTitle>설명</SmallTitle>
            <SmallContent>
              <Input type="text" ref={description} required />
            </SmallContent>
          </div>
          <div className="word-example">
            <SmallTitle>예시</SmallTitle>
            <SmallContent>
              <Input type="text" ref={example} required />
            </SmallContent>
          </div>
        </Content>
        <SaveBtn>저장하기</SaveBtn>
      </ContForm>
      <BackBtn
        onClick={() => {
          history.push("/");
        }}
      >
        Back
      </BackBtn>
    </>
  );
};

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;
const ContForm = styled.form`
  /* min-width: 200px;
  border: 2px solid #a29e9d;
  border-radius: 7px;
  padding: 15px 10px;
  margin: 10px auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 20px auto;
  border-radius: 7px;
  background-color: #ffffff;
  & > * {
    margin: 10px;
  }
`;
const Content = styled.div`
  min-width: 200px;
  /* border: 2px solid #a29e9d; */
  border-radius: 7px;
  padding: 15px 10px;
  /* margin: 10px; */
`;
const SmallTitle = styled.div`
  text-decoration: underline;
  /* text-underline-position: under; */
  font-weight: 600;
  font-size: 0.8rem;
`;
const SmallContent = styled.div`
  /* font-size: 1.3rem; */
  max-width: 70%;
  margin: 12px 0 15px 0;
`;
const Input = styled.input`
  border: none;
  height: 28px;
  padding: 5px 0;
  border-bottom: 2px solid blue;
  font-size: 1rem;
  font-weight: 500;
  transition: border-color 300ms ease-in-out;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;
const SaveBtn = styled.button`
  color: #100c0b;
  width: 200px;
  height: 40px;
  align-self: center;
  border: none;
  border-radius: 5px;
  margin: 0 0 20px 0;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    background-color: #100c0b;
    color: white;
  }
`;
const BackBtn = styled.button`
  color: #100c0b;
  width: 90px;
  height: 30px;
  align-self: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    background-color: #100c0b;
    color: white;
  }
`;

export default AddPage;
