import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { dateFormat } from "@/app/utils/dateFormat";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const Chart = ({ incomes, expenses, transactionHistoryLabel }) => {
  const [...history] = transactionHistoryLabel();

  const data = {
    labels: history.map((item) => dateFormat(item.date)),
    datasets: [
      {
        label: "History",
        data: [...history.map((item) => item.amount)],
        backgroundColor: "rgba(239, 68, 68, 0.5)",
        bordercolor: "rgb(239, 68, 68)",
        tension: 0.2,
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default Chart;

// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { dateFormat } from "@/app/utils/dateFormat";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   interaction: {
//     mode: "index",
//     intersect: false,
//   },
//   stacked: false,
//   plugins: {
//     title: {
//       display: true,
//       text: "Chart.js Line Chart - Multi Axis",
//     },
//   },
//   scales: {
//     y: {
//       type: "linear",
//       display: true,
//       position: "left",
//     },
//     y1: {
//       type: "linear",
//       display: true,
//       position: "right",
//       grid: {
//         drawOnChartArea: false,
//       },
//     },
//   },
// };

// const Chart = ({ incomes, expenses, transactionHistoryLabel }) => {
//   const [...history] = transactionHistoryLabel();
//   const data = {
//     labels: history.map((item) => dateFormat(item.date)),
//     datasets: [
//       {
//         label: "Incomes",
//         data: [...incomes.map((income) => income.amount)],
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         yAxisID: "y",
//       },
//       {
//         label: "Expenses",
//         data: [...expenses.map((expense) => expense.amount)],
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//         yAxisID: "y1",
//       },
//     ],
//   };

//   return <Line data={data} options={options} />;
// };

// export default Chart;
