import React, { Component } from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import Select from "react-select";
import BarGrouped from "../Charts/BarGrouped";
import DChart from "../Charts/Doughnut";

export default class doctorsChart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{ padding: "15px" }}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card>
                <CardContent>
                  <Typography styles={{ textAlign: "start" }} variant="h6">
                    Percentage Anomalies
                  </Typography>
                  <BarGrouped />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <DChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Grid container spacing={1} justify="space-around">
            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <DChart />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <DChart />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <DChart />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <DChart />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <DChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
