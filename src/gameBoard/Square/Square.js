import React, { useState } from "react";

function Square(props) {
  const key = props.x + " " + props.y;
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("initial");
  const [pos, setPos] = useState([props.x, props.y]);
  const [type, setType] = useState(props.type);

  const onBtnClick = () => {
    if (type === "Bomb") {
      alert("You lose sucker at " + pos);
    }
    setClicked(!clicked);
    setText(type);
  };

  return (
    <button key={key} onClick={onBtnClick}>
      {text}
    </button>
  );
}

export default Square;
