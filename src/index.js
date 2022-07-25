// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";

// // import App from "./App";

import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Tutorial, Game, Results, Lose } from "./Pages";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";

const App = () => {
  const [wallet, setWallet] = useState(250);
  const [overBudget, setOverBudget] = useState(false);
  const [rockinpower, setRockinpower] = useState(0);

  console.log("rockinpower", rockinpower);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Tutorial />} />
        <Route
          exact
          path="/game"
          element={
            <Game
              wallet={wallet}
              setWallet={setWallet}
              overBudget={overBudget}
              setOverBudget={setOverBudget}
              setRockinpower={setRockinpower}
              rockinpower={rockinpower}
            />
          }
        />
        <Route
          exact
          path="/results"
          element={
            <Results
              rockinpower={rockinpower}
              setRockinpower={setRockinpower}
              wallet={wallet}
              setWallet={setWallet}
            />
          }
        />
        <Route exact path="/lose" element={<Lose />} />
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
