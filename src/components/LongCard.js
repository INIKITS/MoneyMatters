import React from "react";
import { useNavigate } from "react-router-dom";

const LongCard = (props) => {
  const { pickedList, wallet } = props;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  console.log("pickedList", pickedList);
  return (
    <>
      <div id="sidebar">
        <h3 id="long-card-title"> Wallet: ${wallet} </h3>
        <ul>
          {pickedList.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <button onClick={handleClick} id="small-button">
          Play Show!
        </button>
      </div>
    </>
  );
};

export default LongCard;
