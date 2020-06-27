import React from "react";
import { Route, Switch } from "react-router-dom";
import PatientAnomalyDashboard from "./Components/Screens/PatientAnomalyDashboard";
import ProvidersAnomalyDashboard from "./Components/Screens/ProvidersAnomalyDashboard";
import NavBar from "./Components/NavBar/NavBar";

import "./styles.css";

export default function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProvidersAnomalyDashboard} />
        <Route exact path="/home" component={ProvidersAnomalyDashboard} />

        <Route
          exact
          path="/patientanomalydashboard"
          component={PatientAnomalyDashboard}
        />
      </Switch>
    </div>
  );
}
