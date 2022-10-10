import React, { useState, useRef, useEffect, useContext } from "react";

import Todolist from "../components/Todolist";
import isLogin from "../utils/isLogin";

function Todo() {
  //   const location = useLocation().pathname;
  //   const navigate = useNavigate();

  //   const { onCreate, onInit } = useContext(TodoDispatchcontext);
  //   const Todo_ref = useRef();
  //   const [id, setId] = useState("");
  //   const [isCompleted, setIsCompleted] = useState(false);

  //   console.log(data);
  //   //로그인 여부로 페이지 경로 나누기
  //   useEffect(() => {
  //     if (!isLogin() && location === "/todos") {
  //       navigate("/");
  //     }
  //     GetTodoApi();
  //   }, []);

  //   //todo list 불러오기
  //   const GetTodoApi = () => {
  //     AuthAxiosInstance2.get("/todos")
  //       .then(function (res) {
  //         console.log(res.data);
  //         onInit(res.data);
  //       })
  //       .catch(function (error) {
  //         alert(error.response.data.message);
  //         console.log(error);
  //       });
  //   };

  //   //todo 항목 생성
  //   const createTodo = () => {
  //     const todo = Todo_ref.current.value;
  //     AuthAxiosInstance1.post("/todos", { todo: Todo_ref.current.value })
  //       .then(function (res) {
  //         setId(res.data.id);
  //         console.log(res);
  //         setIsCompleted(res.data.isCompleted);
  //         Todo_ref.current.value = "";
  //         onCreate(todo, id, isCompleted);
  //       })
  //       .catch(function (error) {
  //         alert(error.response.data.message);
  //         console.log(error);
  //       });
  //   };

  //   //로그아웃
  //   const logout = () => {
  //     localStorage.removeItem("access_token");
  //     navigate("/");
  //   };

  //   // Enter 입력이 되면 클릭 이벤트 실행
  //   const handleOnKeyPress = (e) => {
  //     if (e.key === "Enter") {
  //       createTodo();
  //     }
  //   };

  const data = [
    { id: 0, todo: "뭔가함0", isCompleted: false },
    { id: 1, todo: "뭔가함1", isCompleted: false },
    { id: 2, todo: "뭔가함2", isCompleted: false },
  ];

  return (
    <div>
      투두리스트 만드는곳
      <input
        type="text"
        placeholder="해야할 일을 적어주세요"
        // ref={Todo_ref}
        // onKeyPress={handleOnKeyPress}
      />
      {/* <button onClick={createTodo}>Make Todo</button>
      <button onClick={logout}>로그아웃</button> */}
      <div>
        <span>todolist</span>
        <div>
          {data.map((item, id) => (
            <Todolist
              key={id}
              id={item.id}
              text={item.todo}
              isCompleted={item.isCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
