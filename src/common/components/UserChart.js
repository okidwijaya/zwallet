// // import styles from "src/common/styles/Dashboard.module.css";

// // export default function UserChart() {
// //   return (
// //     <div className={styles.userChart}>
// //       <p className="d-flex justify-content-center align-items-center mx-auto my-auto px-auto py-auto">
// //         chart
// //       </p>
// //     </div>
// //   );
// // }

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "+ Rp.62.000",
      color: "rgb(30, 193, 95)",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      label: "+ Rp.62.000",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(99, 121, 244)",
      stack: "Stack 3000",
      color: "rgb(30, 193, 95)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   backgroundColor: "rgb(75, 192, 192)",
    //   stack: "Stack 0",
    // },
    // {
    //   label: "Dataset 3",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   backgroundColor: "rgb(53, 162, 235)",
    //   stack: "Stack 1",
    // },
  ],
};

export default function UserChart() {
  return (
    <>
      {/* <div>
        <p>Income</p>
      </div>
      <div>
        <p>Expanse</p>
      </div> */}
      <div>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
