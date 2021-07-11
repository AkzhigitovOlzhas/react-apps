import React from "react";

function Square(props) {
  return (
    <button
      className={
        props.value === "X"
          ? "square isX"
          : props.value === "O"
          ? "square isO"
          : "square"
      }
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

export default Square;
