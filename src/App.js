import React from 'react'
import { Switch, Route,Link } from "react-router-dom";
import { Layout,Typography,Space } from "antd";
import { Navbar } from "./components";

const app = () => {
    return (
        <div className="app">
            <Navbar />
            <main className="main">

            </main>

            <footer className="footer">

            </footer>
        </div>
    )
}

export default app
