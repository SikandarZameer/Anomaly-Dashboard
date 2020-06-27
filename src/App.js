import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PatientAnomalyDashboard from "./Components/Screens/PatientAnomalyDashboard";
import ProvidersAnomalyDashboard from "./Components/Screens/ProvidersAnomalyDashboard";
import NavBar from "./Components/NavBar/NavBar";

import "./styles.css";

export default function App() {
  const [patient_id, set_patient_id] = useState(null);

  const patient_id_changed = handle => {
    set_patient_id(handle.target.value);
  };
  return (
    <div className="App" style={{ height: "100%" }}>
      <NavBar callback_func={patient_id_changed} />
      <Switch>
        <Route exact path="/" component={ProvidersAnomalyDashboard} />
        <Route exact path="/home" component={ProvidersAnomalyDashboard} />

        <Route exact path="/patientanomalydashboard">
          <PatientAnomalyDashboard patient_id={patient_id} />
        </Route>
      </Switch>
    </div>
  );
}
