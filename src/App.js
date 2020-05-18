import React from "react";
// import BarGrouped from "./Components/Charts/BarGrouped";
// import LineCust from "./Components/Charts/LineCust";
// import Linestacked from "./Components/Charts/Linestacked";
// import DChart from "./Components/Charts/Doughnut";
// import PatientAnomalyDashboard from "./Components/Screens/PatientAnomalyDashboard";
import ProvidersAnomalyDashboard from "./Components/Screens/ProvidersAnomalyDashboard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <BarGrouped />
      <LineCust />
      <Linestacked />
      <DChart /> */}
      {/* <PatientAnomalyDashboard /> */}
      <ProvidersAnomalyDashboard />
    </div>
  );
}
