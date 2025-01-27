import React from 'react';
import "./Layout.css";
import SideBar from '../Sidebar/Sidebar';
import ButtonAppBar from '../Header/Header';
import { getPageTitleByRoute } from '../Urls';


const Layout = ({ children }) => {
  
  let winHeight = window.innerHeight * 0.8

  console.log("layout");
  return (
    <div className='allDiv'>
        <SideBar/>

        <div className="headerSide">
          <div>
              <div className="disable-text-selection">
                <ButtonAppBar/>
                <div className='pathName'>
                  {
                    getPageTitleByRoute(window.location.pathname)
                  }
                </div>
              </div>

              <div className='childs'>
                
                <div style={{height: winHeight}} className='bodyWrapper'>
                  <div className='contentWrapper enable-text-selection'>
                    {children}
                  </div>
              </div>
          </div>

          </div>
        </div>  
      
    </div>
  )
}

export default Layout