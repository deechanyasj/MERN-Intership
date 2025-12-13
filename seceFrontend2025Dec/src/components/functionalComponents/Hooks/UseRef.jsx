import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [text, setText] = useState("");
  const prevText = useRef("");

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <h2>This is UseRef Hook</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>The current render is {text}</h2>
      <h3>The prev render is {prevText.current}</h3>
    </div>
  );
};

export default UseRef;