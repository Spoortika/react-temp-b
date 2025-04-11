import React from "react";
import { useRef, useState } from "react";
export default function App11() {
  const msgRef = useRef();
  const [color, setColor] = useState();
  const handleSubmit = () => {
    msgRef.current.style.color = color
  };
  return (
    <div>
      <h3>This is App11</h3>
      {/* <h3><b>useRef:</b>This React component changes the "Hello World" text color based on the user's input.
       The color is stored using useState and applied using useRef on button click. 
       when the user clicks the Submit button, msgRef.current.style.color applies that color to the "Hello World" text using the useRef reference.
       </h3> */}
      <p>
        <input type="text" onChange={(e)=>setColor(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>
        <h4 ref={msgRef}>Hello World</h4>
      </p>
    </div>
  );
}