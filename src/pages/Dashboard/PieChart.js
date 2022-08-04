import React, { useState } from 'react';
import Chart from "react-apexcharts";

const PieChart = ({ mockData }) => {

  // const [mockData, setMockData] = useState([
    
  //   { title: "Water", value: 50, id: "water"},
  //   { title: "Lemon", value: 50, id: "lemon"},
  //   { title: "Sugar", value: 50, id: "sugar"},
    
  // ])

  // setMockData(mockData.map((eachData) => {
  //   if(eachData.id === id){
  //     eachData.value = currentValue;
  //   }
  //   return eachData;
  // }))

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