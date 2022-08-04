import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import "./Dashboard.css";
import PieChart from './PieChart';
import SliderGroup from './SliderGroup';

const Dashboard = () => {

  const [id, setId] = useState();
  const [currentValue, setCurrentValue] = useState();

  const [mockData, setMockData] = useState([
    
    { title: "Water", value: 50, id: "water"},
    { title: "Lemon", value: 50, id: "lemon"},
    { title: "Sugar", value: 50, id: "sugar"},
    
  ])
  
  const handleSlider = (e, id) => {
    setId(id);
    setCurrentValue(e.target.value);

    setMockData(mockData.map((eachData) => {
      if(eachData.id === id){
        eachData.value = e.target.value;
      }
      return eachData;
    }))
  }

  return (
    <Layout>

      <PieChart mockData={mockData} id={id} value={currentValue}/>

      <div className="slider">

        <div className="sliderDiv">
          <SliderGroup dataArray={mockData} handleSlider={handleSlider}/>
        </div>

      </div>
    </Layout>
  )
}

export default Dashboard