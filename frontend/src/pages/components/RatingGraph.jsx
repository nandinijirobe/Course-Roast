import React, { useState, useEffect } from "react";
import styles from "./RatingGraph.module.css";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import {Rate} from "antd";

function RatingGraph (props) {

  const [ratingsData, setRatingsData] = useState([
    { name: "1-star", users: 1 },
    { name: "2-star", users: 1 },
    { name: "3-star", users: 1 },
    { name: "4-star", users: 1 },
    { name: "5-star", users: 1 }
  ]);

  function createDistribution () {
    for (const val in props.reviews) {
      const num = Math.round(props.reviews[val].rating)
      if (num >= 1 && num <=5 ) {
        const updatedRatingsData = [...ratingsData];
        updatedRatingsData[num-1].users += 1;
        setRatingsData(updatedRatingsData);
        ratingsData[num-1].users += 1
      }
    }
  }

  useEffect (() => {
    createDistribution()
  }, [props.reviews])

  return (
    <div className={styles.container}>

      <div className = {styles.top_half}>
        <div className={styles.graph_title}>Reviews and Ratings</div>
        <div className= {styles.rating_stars_caption}>
          <div className= {styles.rating}>{props.rating ? props.rating.toFixed(1) : 0}</div>
          <div className= {styles.stars_caption}>
            <Rate defaultValue={5} allowHalf disabled className = {styles.stars}/>
            {/* <div className={styles.stars}>⭐⭐⭐⭐⭐</div> */}
            <div className={styles.caption}>Based on {props.reviews ? props.reviews.length : 0} ratings</div>
          </div>
        </div>
      </div>
        <ResponsiveContainer width="90%" height="60%" className={styles.chartWrapper}> {/*actual-graph*/}
          <BarChart data={ratingsData}>
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "whitesmoke" }} radius={[10, 10, 10, 10]}/>
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default RatingGraph;
