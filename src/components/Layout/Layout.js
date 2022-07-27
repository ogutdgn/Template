import React from 'react';
import "./Layout.css";
import SideBar from '../Sidebar/Sidebar';
import AlertDialog from '../Alert/Alert';
import ButtonAppBar from '../Header/Header';
import { getPageTitleByRoute } from '../Urls';


const Layout = ({ children, error }) => {
  
  const winHeight = window.innerHeight * 0.8


  return (
    <div className='allDiv'>
      <SideBar/>
      {
        error && <AlertDialog/>
      }
      <div className='childs'>
        <ButtonAppBar/>

        <div className='pathName'>
          {
            getPageTitleByRoute(window.location.pathname)
          }
        </div>

        <div style={{height: winHeight}} className='bodyWrapper'>
          <div className='contentWrapper'>
            {children}
          </div>
        </div>
        {/* <Footer/> */}
      </div>
      
    </div>
  )
}

export default Layout