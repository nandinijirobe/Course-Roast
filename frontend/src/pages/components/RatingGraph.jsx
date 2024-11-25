import React from "react";
import styles from "./RatingGraph.module.css";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";

const RatingGraph = () => {
  const data = [
    { name: "1-star", users: 2000 },
    { name: "2-star", users: 1500 },
    { name: "3-star", users: 1000 },
    { name: "4-star", users: 3500 },
    { name: "5-star", users: 4000 }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Social Media Users</h1>
      <div className={styles.chartWrapper}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{top: 5, right: 30, left: 80, bottom: 5,}}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default RatingGraph;
