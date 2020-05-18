import React from "react";
import BarGrouped from "./Components/Charts/BarGrouped";
import LineCust from "./Components/Charts/LineCust";
import Linestacked from "./Components/Charts/Linestacked";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BarGrouped />
      <LineCust />
      <Linestacked />
    </div>
  );
}
