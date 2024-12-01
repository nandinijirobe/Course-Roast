import React from "react";
import styles from "./RatingGraph.module.css";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import {Rate} from "antd";

const RatingGraph = () => {
  // Make a function to actually compute scores from backend
  const data = [
    { name: "1-star", users: 2000 },
    { name: "2-star", users: 1500 },
    { name: "3-star", users: 1000 },
    { name: "4-star", users: 3500 },
    { name: "5-star", users: 4000 }
  ];

  return (
    <div className={styles.container}>

      <div className = {styles.top_half}>
        <div className={styles.graph_title}>Reviews and Ratings</div>
        <div className= {styles.rating_stars_caption}>
          <div className= {styles.rating}>4.9</div>
          <div className= {styles.stars_caption}>
            <Rate defaultValue={5} allowHalf disabled className = {styles.stars}/>
            {/* <div className={styles.stars}>⭐⭐⭐⭐⭐</div> */}
            <div className={styles.caption}>Based on 565 ratings</div>
          </div>
        </div>
      </div>
        <ResponsiveContainer width="90%" height="60%" className={styles.chartWrapper}> {/*actual-graph*/}
          <BarChart data={data}>
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "whitesmoke" }} radius={[10, 10, 10, 10]}/>
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default RatingGraph;
