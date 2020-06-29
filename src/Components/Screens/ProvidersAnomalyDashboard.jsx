import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Select from "react-select";
import BarGrouped from "../Charts/BarGrouped";
import BarStacked from "../Charts/BarStacked";
import DChart from "../Charts/Doughnut";
import ChartCard from "../Cards/ChartCard";

const url1 = "";
const url2 = "";
const url3 = "";
const url4 = "";

export default class doctorsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      barGroupedData: {},
      doughnutData: [],
      stackedBarData_1: {},
      stackedBarData_2: {}
    };
  }

  componentDidMount() {
    Promise.all([
      fetch({ url1 }),
      fetch({ url2 }),
      fetch({ url3 }),
      fetch({ url4 })
    ])
      .then(([res1, res2, res3, res4]) => {
        return Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json()
        ]);
      })
      .then(([res1, res2, res3, res4]) => {
        this.setState(st => {
          return {
            isLoaded: true,
            barGroupedData: res1,
            doughnutData: res2,
            stackedBarData_1: res3,
            stackedBarData_2: res4
          };
        });
      })
      .catch(err => console.log(err));
  }

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
              <ChartCard
                title="Symptom to Diagnosis Anomalies"
                chart={<BarStacked />}
              />
            </Grid>

            <Grid item xs={6}>
              <ChartCard
                title="Disgnosis to Services Anomalies"
                chart={<BarStacked />}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
