import React from 'react';
import { Button,Menu,Typography,Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOulined, MenuOutlined } from "@ant-design/icons";
import icon from '../img/icon.png'

const Navbar = () => {
    return (
       <div className="nav-container">
           <div className="logo-container">
               <Avatar src={icon} size="large"/>
               <Typography.Title level={2} className="logo">
                <Link to='/'>Crypto Canvas </Link>
               </Typography.Title>
               {/* <Button className="menu-control-container"></Button> */}
           </div>
       </div>
    )
}

export default Navbar
