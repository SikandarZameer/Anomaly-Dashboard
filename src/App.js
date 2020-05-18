import React from "react";
// import BarGrouped from "./Components/Charts/BarGrouped";
// import LineCust from "./Components/Charts/LineCust";
// import Linestacked from "./Components/Charts/Linestacked";
// import DChart from "./Components/Charts/Doughnut";
// import PatientAnomalyDashboard from "./Components/Screens/PatientAnomalyDashboard";
// import ProvidersAnomalyDashboard from "./Components/Screens/ProvidersAnomalyDashboard";
import DoughnutCard from "./Components/Cards/DoughnutCard";
import "./styles.css";
import DChart from "./Components/Charts/Doughnut";

export default function App() {
  return (
    <div className="App">
      {/* <BarGrouped />
      <LineCust />
      <Linestacked />
      <DChart /> */}
      {/* <PatientAnomalyDashboard /> */}
      {/* <ProvidersAnomalyDashboard /> */}
      <DoughnutCard title="Percentage Anomalies" chart={<DChart />} />
    </div>
  );
}
