import { useState } from "react";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <p>hello there! COUNT: {count}</p>
         <button
            onClick={() => {
               setCount((state) => state + 1);
            }}>
            버튼이에용
         </button>
      </>
   );
}

export default App;
