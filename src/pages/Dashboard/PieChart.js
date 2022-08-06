import React from 'react';
import Chart from "react-apexcharts";

const PieChart = ({ mockData }) => {


  return (
    <div>
        <Chart
        type="pie"
        width={500}
        height={400}

        series={mockData[0].value + mockData[1].value + mockData[2].value === 0 ? [] : [mockData[0].value, mockData[2].value, mockData[1].value]}

        options = {
          {
            noData: {text: "Empty Data"},
            labels:["Water", "Sugar", "Lemon"],
            chart: {
              height: 160
            },
            legend: {
              position: 'bottom',
              horizontalAlign: 'center'
            },
          }
        }
      >
      </Chart>
    </div>
  )
}

export default PieChart