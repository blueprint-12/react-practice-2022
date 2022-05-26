import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

const MyWeek = (props) => {
  const history = useHistory();
  const day_text_dict = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };

  //오늘 요일을 위로 올려서 요일을 정렬하게 만드는 로직
  const week_days = Object.keys(day_text_dict).map((_d, idx) => {
    let today = new Date().getDay();
    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);
    return day_text_dict[d];
  });

  //평점 합계
  let rate_sum = 0;

  //요일별 점수 랜덤으로 추가하는 과정
  // 리턴으로 {} 딕셔너리를 담은 배열을 week_rates에 담아줌
  const week_rates = week_days.map((w, idx) => {
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    rate_sum += random;

    //day에는 string 요일, rate에는 random값이 들어가 있음
    return {
      day: w,
      rate: random,
    };
  });

  //   console.log("평점이 랜덤하게 들어간 배열 확인:", week_rates, week_rates.length);
  // 배열길이 7, 화(오늘)수목금토일월 랜덤수 0~5까지 나옴
  // Number.prototype.toFixed(소수점자릿수) // 소수점을 어디까지 보여줄 지 정해준다.
  // 고정 소수점을 해주는데 소수점을 고정할 때 이전값을 반올림한다
  // 반환값은 숫자를 String으로 변환한 값이다.
  const rate_avg = (rate_sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);

  return (
    <Cont>
      <Header>내 일주일은?</Header>
      {week_rates.map((w, idx) => {
        return (
          <div
            key={`week_day_${idx}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem 0",
              width: "100%",
            }}
          >
            <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
              {w.day}
            </p>
            {Array.from({ length: 5 }, (item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                  }}
                ></div>
              );
            })}
            <div
              style={{
                appearance: "none",
                backgroundColor: "transparent",
                borderColor: "purple",
                width: "0",
                height: "0",
                borderTop: "1rem solid transparent",
                borderBottom: "1rem solid transparent",
                borderLeft: "1.6rem solid purple",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push(`/review/${w.day}`);
              }}
            ></div>
          </div>
        );
      })}
      <div
        style={{
          width: "8rem",
          margin: "1rem auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "blue",
          padding: "9px",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        평균 평점 {avg}
        <div
          style={{
            width: "inherit",
            height: "fit-content",
            backgroundColor: "dodgerblue",
            borderRadius: "6px",
            textAlign: "center",
            margin: "10px 0 0 0",
          }}
          onClick={() => {
            setAvg(parseInt(0).toFixed(1));
          }}
        >
          <p style={{ color: "white", fontSize: "18px" }}>Reset</p>
        </div>
      </div>
    </Cont>
  );
};

const Cont = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 5vh auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h3``;

export default MyWeek;
