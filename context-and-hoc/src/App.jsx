import React, { useState, useEffect } from "react";

function useLocalState(key, initial) {
  const [value, setValue] = useState(() => {
    return initial;
  });

  useEffect(() => {
    //value값을 JSON.stringify()한 이유? 값이 리터럴이 아니라 객체일수도 있어서
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

const App = () => {
  const [inputValue, setInputValue] = useLocalState("memorable", "");
  return (
    <div className="App">
      <label>something memorable</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default App;
