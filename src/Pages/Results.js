import React from "react";
import { BigCard } from "../components";
import { useEffect, useState } from "react";

const Results = (props) => {
  const { rockinpower, setRockinpower, setWallet, wallet } = props;
  const [message, setMessage] = useState("");

  return (
    <BigCard
      setMessage={setMessage}
      message={message}
      rockinpower={rockinpower}
      setRockinpower={setRockinpower}
      setWallet={setWallet}
      wallet={wallet}
    />
  );
};

export default Results;
