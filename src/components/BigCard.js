import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BigCard = (props) => {
  console.log("props", props);

  const {
    wallet,
    setWallet,
    message,
    setMessage,
    rockinpower,
    setRockinpower,
  } = props;

  useEffect(() => {
    const HandlePower = () => {
      if (rockinpower > 12) {
        setWallet(wallet + 350);
        setMessage(`great job!`);
      } else if (rockinpower > 7) {
        setWallet(wallet + 200);
        setMessage("You made it this round!");
      } else if (rockinpower < 7) {
        setWallet(wallet - 50);
        setMessage(`oh no! This one didn't pan out. Try again. `);
      }
    };
    HandlePower();
    //   };
  }, []);

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    setRockinpower(0);
    navigate("/");
  };

  return (
    <>
      <div id="main-content">
        <div id="big-card">
          <h3 id="big-card-title">Your wallet: ${wallet}</h3>
          <p>{message}</p>
          <button id="big-button" onClick={handleClick}>
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default BigCard;
