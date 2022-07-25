import React from "react";
import { useState } from "react";
import { SmallCard, LongCard } from "../components";

const Game = (props) => {
  console.log("props", props);
  const {
    wallet,
    setWallet,
    overBudget,
    setOverBudget,
    setRockinpower,
    rockinpower,
  } = props;
  const [pickedList, setPickedList] = useState([]);

  return (
    <>
      <SmallCard
        wallet={wallet}
        setWallet={setWallet}
        setOverBudget={setOverBudget}
        overBudget={overBudget}
        pickedList={pickedList}
        setPickedList={setPickedList}
        setRockinpower={setRockinpower}
        rockinpower={rockinpower}
      />
      <LongCard pickedList={pickedList} wallet={wallet} />
    </>
  );
};

export default Game;
