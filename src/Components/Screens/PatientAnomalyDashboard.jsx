import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

// import Select from "react-select";
import LineCust from "../Charts/LineCust";
import BarStacked from "../Charts/BarStacked";
import ChartCard from "../Cards/ChartCard";

const url1 = "";
const url2 = "";
const url3 = "";

export default class doctorsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      lineGraphData: [],
      stackedBarData_1: {},
      stackedBarData_2: {}
    };
  }
  componentDidMount() {
    Promise.all([
      fetch(`${url1}/${this.props.patient_id}`),
      fetch(`${url2}/${this.props.patient_id}`),
      fetch(`${url3}/${this.props.patient_id}`)
    ])
      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([res1, res2, res3]) => {
        this.setState(st => {
          return {
            isLoaded: true,
            lineGraphData: res1,
            stackedBarData_1: res2,
            stackedBarData_2: res3
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
            <Grid item xs={12}>
              <ChartCard title="Patient" chart={<LineCust />} />
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
