import React, { useState } from "react";
import { gameData } from "../gameData/gameData";

const SmallCard = (props) => {
  const [isCheckedBand, setIsCheckedBand] = useState("");
  const [isCheckedPromo, setIsCheckedPromo] = useState("");
  const [isCheckedVenue, setIsCheckedVenue] = useState("");
  const [isCheckedSecurity, setIsCheckedSecurity] = useState("");
  const {
    wallet,
    setWallet,
    overBudget,
    setOverBudget,
    pickedList,
    setPickedList,
    setRockinpower,
    rockinpower,
  } = props;
  let totalCost = 0;

  // this could also be handled more gracefully

  const handleRadio = (event, power) => {
    console.log("event", event);
    const playerChoice = event.value;

    // event.checked = true;

    totalCost += playerChoice;
    setRockinpower(rockinpower + power);
    setPickedList([...pickedList, event.name]);
    setIsCheckedBand(event.name);
    setWallet(wallet - totalCost);
  };

  const handleRadioVenue = (event, power) => {
    console.log("event", event);
    setIsCheckedVenue(event.name);
    const playerChoice = event.value;
    // event.checked = true;

    totalCost += playerChoice;

    setRockinpower(rockinpower + power);
    setPickedList([...pickedList, event.name]);
    setIsCheckedVenue(event.name);
    setWallet(wallet - totalCost);
  };

  const handleRadioPromo = (event, power) => {
    console.log("event", event);
    setIsCheckedPromo(event.name);
    const playerChoice = event.value;
    // event.checked = true;

    totalCost += playerChoice;

    setRockinpower(rockinpower + power);
    setPickedList([...pickedList, event.name]);
    setIsCheckedPromo(event.name);
    setWallet(wallet - totalCost);
  };
  const handleRadioSecurity = (event, power) => {
    console.log("event", event);
    setIsCheckedSecurity(event.name);
    const playerChoice = event.value;
    // event.checked = true;

    totalCost += playerChoice;

    setRockinpower(rockinpower + power);
    setPickedList([...pickedList, event.name]);
    setIsCheckedSecurity(event.name);
    setWallet(wallet - totalCost);
  };

  if (wallet <= 0) {
    setOverBudget(true);
  }

  // this could have been immensely shortened had I thought one more step ahead, but I kind of messed myself
  // up with the database and didnt have time to fix it. This would definitely be a TODO.

  return (
    <>
      <div id="main-content">
        <div id="small-card-container">
          <h3 id="small-card-title">Bands</h3>
          {gameData.bands.map((data) => {
            return (
              <div key={data.name} id="small-card">
                <input
                  checked={isCheckedBand === data.name}
                  type="radio"
                  value={data.cost}
                  name={data.name}
                  onChange={(event) =>
                    handleRadio(event.target, data.rockinpower)
                  }
                  disabled={overBudget}
                />
                ${data.cost} {data.name}
              </div>
            );
          })}
        </div>
        <div id="small-card-container">
          <h3 id="small-card-title">Promotion Style</h3>
          {gameData.promotion.map((data) => {
            return (
              <div key={data.name} id="small-card">
                <input
                  checked={isCheckedPromo === data.name}
                  type="radio"
                  value={data.cost}
                  name={data.name}
                  onChange={(event) =>
                    handleRadioPromo(event.target, data.rockinpower)
                  }
                  disabled={overBudget}
                />
                ${data.cost} {data.name}
              </div>
            );
          })}
        </div>
        <div id="small-card-container">
          <h3 id="small-card-title">Venues</h3>
          {gameData.venues.map((data) => {
            return (
              <div key={data.name} id="small-card">
                <input
                  checked={isCheckedVenue === data.name}
                  type="radio"
                  value={data.cost}
                  name={data.name}
                  onChange={(event) =>
                    handleRadioVenue(event.target, data.rockinpower)
                  }
                  disabled={overBudget}
                />
                ${data.cost} {data.name}
              </div>
            );
          })}
        </div>
        <div id="small-card-container">
          <h3 id="small-card-title">Security</h3>
          {gameData.security.map((data) => {
            return (
              <div key={data.name} id="small-card">
                <input
                  checked={isCheckedSecurity === data.name}
                  type="radio"
                  value={data.cost}
                  name={data.name}
                  onChange={(event) =>
                    handleRadioSecurity(event.target, data.rockinpower)
                  }
                  disabled={overBudget}
                />
                ${data.cost} {data.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SmallCard;
