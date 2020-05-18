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
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
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
        <Grid container spacing={4} justify="flex-start">
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
    );
  }
}
