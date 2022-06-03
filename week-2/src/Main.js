import React from "react";
import styled from "styled-components";
//리덕스
import { useSelector, useDispatch } from "react-redux";
import { updateWord, deleteWord } from "./redux/modules/word";

import AddBtn from "./AddBtn";

const Main = (props) => {
  const dispatch = useDispatch();
  const my_voca = useSelector((state) => state.word.voca);
  console.log(my_voca);

  return (
    <>
      <WordContStyle>
        {my_voca.map((word, index) => {
          return (
            <WordStyle
              completed={word.completed}
              className="word_item"
              key={index}
            >
              <div className="word-name">
                <div
                  className="word-btn__flex"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <SmallTitle>단어</SmallTitle>
                  <div className="btn__cont" style={{ display: "flex" }}>
                    <Btn
                      onClick={() => {
                        //dispatch오류나려나
                        console.log("체크버튼", index);
                        // dispatch(updateWord(index));
                      }}
                    >
                      ✔
                    </Btn>
                    <Btn
                      onClick={() => {
                        console.log("삭제버튼", index);
                        dispatch(deleteWord(index));
                        window.alert("삭제 완료!");
                      }}
                    >
                      X
                    </Btn>
                  </div>
                </div>
                <SmallContent>{word.name}</SmallContent>
              </div>
              <div className="word-explain">
                <SmallTitle>설명</SmallTitle>
                <SmallContent>{word.description}</SmallContent>
              </div>
              <div className="word-example">
                <SmallTitle>예시</SmallTitle>
                <SmallContent style={{ color: "#696D6B" }}>
                  {word.example}
                </SmallContent>
              </div>
            </WordStyle>
          );
        })}
      </WordContStyle>
      <AddBtn />
    </>
  );
};

const WordContStyle = styled.div`
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;

  /* width: 80vw; */

  /* flex-direction: column; */
  /* max-height: 350px; */
  /* overflow-x: hidden;
  overflow-y: auto; */
  /* height: 50vh;
  max-height: 50vh; */
`;
const WordStyle = styled.div`
  min-width: 200px;
  border: 2px solid #a29e9d;
  border-radius: 7px;
  padding: 15px 10px;
  margin: 10px;

  & > * {
    /* padding: 16px; */
    margin: 10px 0;
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: red;
`;
const SmallTitle = styled.div`
  text-decoration: underline;
  /* text-underline-position: under; */
  font-weight: 600;
  font-size: 0.8rem;
`;
const SmallContent = styled.h3`
  /* font-size: 1.3rem; */
  max-width: 70%;
  margin: 12px 0 15px 0;
`;

export default Main;
