import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search'
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
    return (
        <div className = "header">
           <Link to="/">
           <img className="header_logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

           </Link>
            <div className="header_search">
                <input
                 className="search_input" type="text"/>
                 <SearchIcon 
                 className="hader_serchIcone"/>
            </div>

            <div className="header_nav">
                <div className="header_option"><span className="header_line_one"> Hello Guest</span> <span className="header_line_two">Sign In</span></div>
                <div className="header_option"><span className="header_line_one"> Return</span> <span className="header_line_two"> order</span></div>
                <Link to="/checkout"><div className="header_basket"><LocalMallIcon/><span className="header_basketCount header_line_two">0</span></div></Link>

            </div>
        </div>
    )
} 

export default Header
