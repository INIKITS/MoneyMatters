import React from "react";
import { BigCard } from "../components";

const Tutorial = (props) => {
  const [message, setMessage] = React.useState("");
  const { wallet, setWallet, rockinpower, setRockinpower } = props;
  return (
    <BigCard
      rockinpower={rockinpower}
      setRockinpower={setRockinpower}
      wallet={wallet}
      setWallet={setWallet}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default Tutorial;
