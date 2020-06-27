import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineCust extends Component {
  static defaultProps = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [65, 59, 80, 81, 56, 55, 40]
  };

  data = {
    labels: this.props.labels,
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.props.data
      }
    ]
  };

  options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    }
  };

  render() {
    return (
      <div>
        <Line data={this.data} options={this.options} height="215%" />
      </div>
    );
  }
}
