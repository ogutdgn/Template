import React from 'react';
import "./Layout.css";
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/Sidebar';
import AlertDialog from '../Alert/Alert';


const Layout = ({ children, error }) => {
  
  const winHeight = window.innerHeight * 0.94
  

  return (
    <div className='allDiv'>
      <SideBar/>
      {
        error && <AlertDialog/>
      }
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