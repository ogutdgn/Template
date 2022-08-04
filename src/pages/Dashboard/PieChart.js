import React, { useState } from 'react';
import Chart from "react-apexcharts";

const PieChart = ({ mockData }) => {

    // const [values, setValues] = useState(
    //     [
    //         {id: "water", value: value},
    //         {id: "lemon", value: value},
    //         {id: "sugar", value: value},
    //     ]
    // )

  return (
    <div>
        <Chart
        type="pie"
        width={1450}
        height={450}

        series={mockData[0] + mockData[1].value + mockData[2].value === 0 ? [] : [mockData[0].value, mockData[1].value, mockData[2].value]}

        options = {
          {
            title:{
              text: "Lemonade Percantege"
            },
            noData: {text: "Empty Data"},
            labels:["Water", "Sugar", "Lemon"],
          }
        }
      >
      </Chart>
    </div>
  )
}

export default PieChart