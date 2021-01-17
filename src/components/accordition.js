import React, { useState, useRef } from "react";
import Cros from "../assets/Icons/Cros";

function Accordition(props) {
  const content = useRef(null);
  const [state, setState] = useState({
    active: false,
    height: "0px",
  });

  const toggle = () => {
    setState({
      ...state,
      active: !state.active,
      height: !state.active ? `${content.current.scrollHeight}px` : "0px",
    });
  };

  return (
    <div className="section" style={{ width: `${props.width}` }}>
      <button className="top" onClick={() => toggle()}>
        <p>{props.title}</p>
        <Cros
          className={`${state.active ? "" : "rotate"}`}
          width="25"
          height="25"
          fill="white"
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${state.height}` }}
        className="_content"
      >
        <div
          className="_text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </div>
  );
}

export default Accordition;
