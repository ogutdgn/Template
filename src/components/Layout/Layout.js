import React from 'react';
import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import Header from '../Header/Header';
import "./Layout.css";
import SideBar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  // console.log("window.innerHeight" + window.innerHeight);
  
  //!
  // const tabs = ["home","user","todos"];
  // const [activeTab, setActiveTab] = useState(tabs[0]);

  // const tabClicked = (tabIndex) => {
  //   setActiveTab(tabs[tabIndex]);
  //    console.log("tabIndex:");
  //    console.log(tabIndex);
  //!
    // let activeWidthNewAnimHeight = $(e.target).innerHeight();
    // let activeWidthNewAnimWidth = $(e.target).innerWidth();
    // let itemPosNewAnimTop = $(e.target).position();
    // let itemPosNewAnimLeft = $(e.target).position();
    // $(".hori-selector").css({
    //   "top":itemPosNewAnimTop.top + "px", 
    //   "left":itemPosNewAnimLeft.left + "px",
    //   "height": activeWidthNewAnimHeight + "px",
    //   "width": activeWidthNewAnimWidth + "px"
    // });
  // }
  const winHeight = window.innerHeight * 0.94
  return (
    <div className='allDiv'>
      <SideBar/>

      <div className='childs'>
        <div style={{height: winHeight}} className='bodyWrapper'>
          <div className='contentWrapper'>
            {children}
          </div>
        </div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Layout