import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

// import Select from "react-select";
import LineCust from "../Charts/LineCust";
import BarStacked from "../Charts/BarStacked";
import ChartCard from "../Cards/ChartCard";

export default class doctorsChart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{ padding: "15px", height: "100vh" }}>
        <CssBaseline />
        <div style={{ marginLeft: "20px", height: "40%", marginRight: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ChartCard title="Patient" chart={<LineCust />} />
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            height: "50%",
            marginRight: "20px"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ChartCard
                title="Symptom to Doctor Anomaly"
                chart={<BarStacked />}
              />
            </Grid>

            <Grid item xs={6}>
              <ChartCard
                title="Symptom to Test Anomaly"
                chart={<BarStacked />}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
