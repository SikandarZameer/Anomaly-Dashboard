import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
// import Select from "react-select";
import BarGrouped from "../Charts/BarGrouped";
import DChart from "../Charts/Doughnut";
import ChartCard from "../Cards/ChartCard";
export default class doctorsChart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{ padding: "15px", height:'100vh' }}>
        <CssBaseline />
        <div style={{ marginLeft: "20px",height:'50%', marginRight: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ChartCard title="Percentage Anomalies" chart={<BarGrouped />} />
            </Grid>

            <Grid item xs={4}>
              <ChartCard title="Total Anomalies" chart={<DChart />} />
            </Grid>
          </Grid>
        </div>
        <div style={{ marginTop: "10px", height:'50%' }}>
          <Grid container  justify="space-around">
            <Grid item xs={2}>
              <ChartCard title="Hospital" chart={<DChart />} />
            </Grid>

            <Grid item xs={2}>
              <ChartCard title="Doctor" chart={<DChart />} />
            </Grid>

            <Grid item xs={2}>
              <ChartCard title="Pharmacy" chart={<DChart />} />
            </Grid>

            <Grid item xs={2}>
              <ChartCard title="Labortary" chart={<DChart />} />
            </Grid>

            <Grid item xs={2}>
              <ChartCard title="Patient" chart={<DChart />} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
