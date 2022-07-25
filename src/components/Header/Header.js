import React from 'react';
import Urls from '../Urls';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="headerDiv">

        <div className="title">
            <h1>Template</h1>
        </div>

        <div className="links">
            <ul>
                {
                    Urls.map((item) => {
                        return(
                            <li key={item.route}>
                                <Link to={item.route} key={item.route} className="true">
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    </div>
  )
}

export default Header