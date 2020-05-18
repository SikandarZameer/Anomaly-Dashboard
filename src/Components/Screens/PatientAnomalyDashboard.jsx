import React, { Component } from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
// import Select from "react-select";
import LineCust from "../Charts/LineCust";
import Linestacked from "../Charts/Linestacked";
import ChartCard from "../Cards/ChartCard";

export default class doctorsChart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{ padding: "15px" }}>
        <Grid container spacing={4} justify="space-between">
          <Grid item xs={12}>
            <ChartCard title="Patient" chart={<LineCust />} />
          </Grid>
        </Grid>
        <Grid container spacing={4} justify="space-between">
          <Grid item xs={4}>
            <ChartCard
              title="Symptom to Doctor Anomaly"
              chart={<Linestacked />}
            />
          </Grid>

          <Grid item xs={4}>
            <ChartCard
              title="Symptom to Test Anomaly"
              chart={<Linestacked />}
            />
          </Grid>

          <Grid item xs={4}>
            <ChartCard
              title="Symptom to Medication Anomaly"
              chart={<Linestacked />}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
