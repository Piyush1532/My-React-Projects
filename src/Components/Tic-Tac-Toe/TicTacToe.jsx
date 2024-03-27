import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_icon from "./Assets/circle.png";
import cross_icon from "./Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  const [count, setcount] = useState(0);
  const [lock, setlock] = useState(false);
  let titleRef = useRef(null);
  let box1=useRef(null)
  let box2=useRef(null)
  let box3=useRef(null)
  let box4=useRef(null)
  let box5=useRef(null)
  let box6=useRef(null)
  let box7=useRef(null)
  let box8=useRef(null)
  let box9=useRef(null)
 

  let boxarray=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
  const toogle = (e, num) => {
    if (lock) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "X";
      setcount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "O";
      setcount(count + 1);
    }
    checkWinner();
  };

  const checkWinner = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      Won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      Won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      Won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      Won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      Won(data[6]);
    }
  };
  

  const Won = (winner) => {
    setlock(true);
    if (winner === "X") {
      titleRef.current.innerHTML = `Congratulations :<img src='${cross_icon}'> Wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations :<img src='${circle_icon}' Wins>`;
    }
  };

  const reset=()=>{
    setlock(false)
    data = ["", "", "", "", "", "", "", "", ""]
    titleRef.current.innerHTML=`Tic Tac Toe In <span>React</span>`
    boxarray.map((e)=>{
e.current.innerHTML=""
    })
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 0);
            }}
            ref={box1}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 1);
            }}
            ref={box2}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 2);
          
            }}
            ref={box3}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 3);
            }}
            ref={box4}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 4);
            }}
            ref={box5}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 5);
            }}
            ref={box6}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 6);
            }}
            ref={box7}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 7);
            }}
            ref={box8}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toogle(e, 8);
            }}
            ref={box9}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  );
};

export default TicTacToe;
