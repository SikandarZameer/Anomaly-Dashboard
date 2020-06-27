import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-doughnutlabel2";

export default class DChart extends Component {
  static defaultProps = {
    labels: ["Accepted", "Pending", "Rejected"],
    data: [12, 19, 3]
  };

  data = {
    labels: this.props.labels,
    datasets: [
      {
        label: "# of Likes",
        data: this.props.data,
        backgroundColor: ["#2E5BFF", "#2CC2A5", "#8C54FF"],
        hoverBorderColor: ["#2E5BFF", "#2CC2A5", "#8C54FF"],
        hoverBorderWidth: 2
      }
    ]
  };

  options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    cutoutPercentage: 60,
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: "102",
            font: {
              size: "150",
              family: "Poppins",
              weight: "bold"
            }
          },
          {
            text: "Anomalies",
            font: {
              size: "60"
            }
          }
          // {
          //   text: 'This is one line of text',
          //   font: {
          //     size: '60',
          //     family: 'Arial, Helvetica, sans-serif',
          //     style: 'italic',
          //     weight: 'bold'
          //   },
          //   color: '#bc2c1a'
          // }
        ]
      }
    }
  };

  render() {
    return <Doughnut data={this.data} options={this.options} />;
  }
}
