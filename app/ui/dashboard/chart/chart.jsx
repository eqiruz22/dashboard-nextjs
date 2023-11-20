"use client";
import React from "react";
import styles from "./chart.module.css";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    name: "Sun",
    visit: 3900,
    click: 2000,
  },
  {
    name: "Mon",
    visit: 3800,
    click: 1900,
  },
  {
    name: "Tue",
    visit: 3700,
    click: 1800,
  },
  {
    name: "Wed",
    visit: 3700,
    click: 1700,
  },
  {
    name: "Thu",
    visit: 3600,
    click: 1600,
  },
  {
    name: "Fri",
    visit: 3500,
    click: 1500,
  },
  {
    name: "Sat",
    visit: 3400,
    click: 1400,
  },
];
const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
