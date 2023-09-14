import React from "react";
import { chart } from "../Constacts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
  ReferenceLine,
  Brush,
} from "recharts";

const BarCharts = () => {
  return (
    <div className="w-full border shadow-lg mb-2 ">
      <BarChart
        width={330} //390
        height={350} //350
        data={chart}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" interval={"preserveStartEnd"} />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="date" height={30} stroke="#8884d8" />
        <Bar dataKey="Total_medicine" fill="#82ca9d" />
        <Bar dataKey="medicine_eat" fill="#000080">
          {chart.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                item.medicine_eat < item.Total_medicine ? "#000080" : "#d14"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default BarCharts;
