import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-doughnutlabel2";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "webkit-fill-available",
    height: "260px"
  },
  chartSize: {
    width: "210px",
    height: "210px"
  },
  chartAlignment: {
    display: "flex",
    justifyContent: "center",
    marginTop: -10
  },
  chartTitle: {
    fontFamily: "Poppins",
    fontWeight: 400,
    marginLeft: 12,
    marginTop: 10
  }
});

const DChart = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.chartTitle}>Doctor</Typography>

      <div className={classes.chartAlignment}>
        <CardContent className={classes.chartSize}>
          <Doughnut
            data={{
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
            }}
            options={{
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
            }}
          />
        </CardContent>
      </div>
    </Card>
  );
};

export default DChart;
