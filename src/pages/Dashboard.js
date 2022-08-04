import React from 'react';
import Chart from "react-apexcharts";
import Layout from '../components/Layout/Layout';

const Dashboard = () => {
  const water = 50;
  const lemon = 100;
  const sugar = 200;
  return (
    <Layout>
      <Chart
        type="pie"
        width={1349}
        height={550}

        series={[water,lemon,sugar]}

        options = {
          {
            labels:["Water", "Lemon", "Sugar"]
          }
        }
      >

      </Chart>
    </Layout>
  )
}

export default Dashboard