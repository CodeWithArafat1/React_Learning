import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// চার্টের জন্য ডেমো ডেটা (Array of Objects)
// এই ডেটা একটি API থেকে বা আপনার state থেকে আসতে পারে
const chartSampleData = [
  {
    name: "Category A",
    count: 400,
  },
  {
    name: "Category B",
    count: 300,
  },
  {
    name: "Category C",
    count: 200,
  },
  {
    name: "Category D",
    count: 278,
  },
  {
    name: "Category E",
    count: 189,
  },
  {
    name: "Category F",
    count: 239,
  },
  {
    name: "Category G",
    count: 349,
  },
];

// চার্ট কম্পোনেন্ট
const TestChart = () => {
  return (
    <>
      <div className="">
        <LineChart width={800} height={800} data={chartSampleData}>
          <Line dataKey={"count"}></Line>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend/>
        </LineChart>
      </div>
    </>
  );
};

export default TestChart;
