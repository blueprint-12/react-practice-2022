import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import instance from "./shared/axios";

// axios.get, post()는 axios객체를 사용한 것
// 전역 axios 객체를 만들어서 사용해봅시다.
function App() {
  useEffect(() => {
    instance.get("http://localhost:5001/DUMMY_ROOM_LIST");
  }, []);
  return <div className="App"></div>;
}

export default App;
