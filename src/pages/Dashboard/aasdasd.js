import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Layout from '../../components/Layout/Layout';
import { Slider, Stack } from '@mui/material';
import "./Dashboard.css";

const Dashboard = () => {
  const [waterValue, setWaterValue] = useState();
  const [lemonValue, setLemonValue] = useState();
  const [sugarValue, setSugarValue] = useState();


  const handleChange = (e, index) => {

    let currentValue = e.target.value;

    if(index === 0){
      setWaterValue(currentValue)
    }else if(index === 1){
      setLemonValue(currentValue)
    }else{
      setSugarValue(currentValue)
    }
  }

  const mockData = [
    
    { title: "Water", value: 50, index: 0},
    { title: "Lemon", value: 50, index: 1},
    { title: "Sugar", value: 50, index: 2},
    
  ]

  

  return (
    <Layout>
      <Chart
        type="pie"
        width={1450}
        height={450}

        series={mockData[0].value + mockData[1].value + mockData[2].value === 0 ? [] : [waterValue, sugarValue, lemonValue]}

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
      <div className="slider">
        <div className="sliderDiv">
          {
            mockData.map((eachData,index) => {
              return(
                <Stack spacing={5} direction="row" sx={{ mb: 1 }} alignItems="center">
                  {eachData.title}
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"onChange={(e) => handleChange(e, index)}/>
                </Stack>
              )
            })
          }

        </div>
      </div>
    </Layout>
  )
}

export default Dashboard