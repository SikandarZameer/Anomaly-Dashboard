import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Select from "react-select";
import LineCust from "../Charts/LineCust";
import Linestacked from "../Charts/Linestacked";

export default class doctorsChart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <LineCust />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Linestacked />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Linestacked />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Linestacked />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
