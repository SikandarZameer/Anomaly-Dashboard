import React, { Component } from "react";
// import "chartjs-top-round-bar";
// import "./Chart.roundedBarCharts";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Hospital", "Doctor", "Pharmacy", "Laboratary", "Patient"],
  datasets: [
    {
      label: "Accepted",
      backgroundColor: "#2E5BFF",
      borderColor: "#2E5BFF",
      borderWidth: 0.3,
      barThickness: 20,
      hoverBackgroundColor: "#2E5BFF",
      hoverBorderColor: "#2E5BFF",
      data: [65, 59, 80, 81, 56],
    },

    {
      label: "Pending",
      backgroundColor: "#2CC2A5",
      borderColor: "#2CC2A5",
      borderWidth: 0.3,
      barThickness: 20,
      hoverBackgroundColor: "#2CC2A5",
      hoverBorderColor: "#2CC2A5",
      data: [45, 79, 50, 41, 16],
    },

    {
      label: "Rejected",
      backgroundColor: "#8C54FF",
      borderColor: "#8C54FF",
      borderWidth: 0.3,
      barThickness: 20,
      hoverBackgroundColor: "#8C54FF",
      hoverBorderColor: "#8C54FF",
      data: [35, 99, 100, 61, 6],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cornerRadius: 80,
  legend: {
    display: false,
  },
  type: "bar",
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default class BarStacked extends Component {
  render() {
    return (
      <div>
        <Bar data={data} options={options} height="215%" />
      </div>
    );
  }
}
