import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const AddBtn = () => {
  const history = useHistory();
  return (
    <BtnCont>
      <Btn
        onClick={() => {
          history.push("/addpage/");
        }}
      >
        ➕
      </Btn>
    </BtnCont>
  );
};

const BtnCont = styled.div`
  position: relative;
  display: flex;
`;

const Btn = styled.button`
  position: absolute;
  border: #ddd;
  width: 70px;
  height: 70px;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  color: white;
  font-size: 1.3rem;
  transition: 0.3s;
  bottom: 13px;
  right: 15px;

  &:hover {
    background-color: #100c0b;
  }
`;

export default AddBtn;
