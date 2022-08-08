import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import "./Dashboard.css";
import PieChart from './PieChart';
import SliderGroup from './SliderGroup';
import { dashboardStore } from '../../store/dashboardStore';

const Dashboard = () => {

  const { getRandomNum, randomNums } = dashboardStore();

  

//! Data
  const [mockData, setMockData] = useState([
    { title: "Water", value: 50, id: "water", color: "blue", index: 0},
    { title: "Lemon", value: 50, id: "lemon", color: "yellow", index: 1},
    { title: "Sugar", value: 50, id: "sugar", color: "green", index: 2},   
  ])
  
  const lemonPercentage = mockData[1].value * 100 / (mockData[0].value + mockData[1].value + mockData[2].value)
  const lemonPercentageRounded = lemonPercentage.toFixed(1)
//! Page Load
  useEffect(() => {
    getRandomNum();
  }, [getRandomNum, mockData])

//! Functions
  const handleSuprize = () => {
    setMockData(mockData.map((eachData, i) => {
      eachData.value = randomNums[i];
      return eachData;
    }))
    console.log(randomNums);
  }

  const handleSlider = (e, id) => {
    setMockData(mockData.map((eachData) => {
      if(eachData.id === id){
        eachData.value = e.target.value;
      }
      return eachData;
    }))
  }

//! Render Page
  return (
    <Layout>
      <div className="dashBoard">
      <PieChart mockData={mockData}/>

        <div className="sliderDiv">
          <SliderGroup mockData={mockData} handleSlider={handleSlider}/>
        </div>

      </div>
      <button className="suprizeMe" onClick={handleSuprize}>Surprize Me</button>
      <p>We made you <span className="percantageSpan">{lemonPercentageRounded}%</span> lemonade solution</p>
    </Layout>
  )
}

export default Dashboard;