import React, { Component } from "react";
// import "chartjs-top-round-bar";
// import "./Chart.roundedBarCharts";
import { Bar } from "react-chartjs-2";

export default class BarGrouped extends Component {
  static defaultProps = {
    labels: ["Hospital", "Doctor", "Pharmacy", "Laboratary", "Patient"],
    data: {
      data1: [65, 59, 80, 81, 56],
      data2: [45, 79, 50, 41, 16],
      data3: [35, 99, 100, 61, 6]
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
        barThickness: "flex",
        hoverBackgroundColor: "#2E5BFF",
        hoverBorderColor: "#2E5BFF",
        data: this.props.data.data1
      },

      {
        label: "Pending",
        backgroundColor: "#2CC2A5",
        borderColor: "#2CC2A5",
        borderWidth: 0.3,
        barThickness: "flex",
        hoverBackgroundColor: "#2CC2A5",
        hoverBorderColor: "#2CC2A5",
        data: this.props.data.data2
      },

      {
        label: "Rejected",
        backgroundColor: "#8C54FF",
        borderColor: "#8C54FF",
        borderWidth: 0.3,
        barThickness: "flex",
        hoverBackgroundColor: "#8C54FF",
        hoverBorderColor: "#8C54FF",
        data: this.props.data.data3
      }
    ]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 80,
    barValueSpacing: 10,
    legend: {
      display: false
    },
    type: "bar",
    scales: {
      yAxes: [
        {
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
