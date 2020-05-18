import React, { Component } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

export default class ChartChart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography align="left" variant="h6">
            {this.props.title}
          </Typography>
          {this.props.chart}
        </CardContent>
      </Card>
    );
  }
}
