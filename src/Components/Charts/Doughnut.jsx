import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-doughnutlabel2";

const data = {
  labels: ["Accepted", "Pending", "Rejected"],
  datasets: [
    {
      label: "# of Likes",
      data: [12, 19, 3],
      backgroundColor: ["#2E5BFF", "#2CC2A5", "#8C54FF"],
      hoverBorderColor: ["#2E5BFF", "#2CC2A5", "#8C54FF"],
      hoverBorderWidth: 2
    }
  ]
};

const options = {
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

const DChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DChart;
