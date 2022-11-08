/*
 * @Author: alan_mf
 * @Date: 2022-11-08 14:20:52
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 14:29:44
 * @FilePath: /react-app-start/src/compents/About.tsx
 * @Description: 
 * 
 */
import React from "react";
import { Link } from "react-router-dom";

class About extends React.PureComponent{
    render(){
        return (
            <div>
                this is about<br/>
                <Link to={'/home'}>to home</Link>
            </div>
        )
    }
}

export default About;