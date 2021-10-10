import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Supply Chain", value: 2400 },
  { name: "Biz Funds", value: 4567 },
  { name: "Funds Available", value: 1398 },
];
const COLORS = ["#18CDA2", "#54E9C5", "#EEFAF7"];

export default function App() {
  return (
    <PieChart width={200} height={240} style={{ margin: "auto" }}>
      <Pie
        dataKey="value"
        data={data}
        innerRadius={60}
        outerRadius={80}
        fill="#18CDA2"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
