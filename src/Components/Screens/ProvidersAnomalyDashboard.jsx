import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Select from "react-select";
import BarGrouped from "../Charts/BarGrouped";
import BarStacked from "../Charts/BarStacked";
import DChart from "../Charts/Doughnut";
import ChartCard from "../Cards/ChartCard";
export default class doctorsChart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{ padding: "15px", marginTop: "40px" }}>
        <CssBaseline />
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <ChartCard title="Percentage Anomalies" chart={<BarGrouped />} />
            </Grid>

            <Grid item xs={4}>
              <ChartCard title="Total Anomalies" chart={<DChart />} />
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            marginTop: "5px",
            marginLeft: "20px",
            marginRight: "20px"
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ChartCard title="Hospital" chart={<BarStacked />} />
            </Grid>

            <Grid item xs={6}>
              <ChartCard title="Doctor" chart={<BarStacked />} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
