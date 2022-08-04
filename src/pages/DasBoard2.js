import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {

  const data = [
    { title: 'Water', value: 101 },
    { title: 'Sugar', value: 115 },
    { title: 'Lemon', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 190;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.8;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  console.log(data[0].title)
  return (
    <Layout>
          <div className="pieChart">
            <PieChart width={500} height={500}>
                <Pie
                  data={data}
                  startAngle={360}
                  endAngle={0}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <XAxis dataKey="title"/>
                <YAxis/>
                <Legend/>
                <Pie type="monotone" dataKey="student"/>

            </PieChart>   
          </div>
    </Layout>
  );
}

export default Dashboard