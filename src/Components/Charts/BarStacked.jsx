import React, { Component } from "react";
// import "chartjs-top-round-bar";
// import "./Chart.roundedBarCharts";
import { Bar } from "react-chartjs-2";

export default class BarStacked extends Component {
  static defaultProps = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ],
    data: {
      accepted: [65, 59, 80, 81, 56, 59, 45, 150, 2, 54, 88, 23],
      pending: [45, 79, 50, 41, 16, 45, 23, 78, 56, 12, 32, 12],
      rejected: [35, 99, 100, 61, 6, 65, 59, 80, 81, 56, 45, 79]
    }
  };

  data = {
    labels: this.props.labels,
    datasets: [
      {
        label: "Accepted",
        backgroundColor: "#2E5BFF",
        borderColor: "#2E5BFF",
        borderWidth: 0.3,
        barThickness: 20,
        hoverBackgroundColor: "#2E5BFF",
        hoverBorderColor: "#2E5BFF",
        data: this.props.data.accepted
      },

      {
        label: "Pending",
        backgroundColor: "#2CC2A5",
        borderColor: "#2CC2A5",
        borderWidth: 0.3,
        barThickness: 20,
        hoverBackgroundColor: "#2CC2A5",
        hoverBorderColor: "#2CC2A5",
        data: this.props.data.pending
      },

      {
        label: "Rejected",
        backgroundColor: "#8C54FF",
        borderColor: "#8C54FF",
        borderWidth: 0.3,
        barThickness: 20,
        hoverBackgroundColor: "#8C54FF",
        hoverBorderColor: "#8C54FF",
        data: this.props.data.rejected
      }
    ]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 80,
    legend: {
      display: false
    },
    type: "bar",
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <Bar data={this.data} options={this.options} height="215%" />
      </div>
    );
  }
}
