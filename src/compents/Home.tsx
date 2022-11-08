/*
 * @Author: alan_mf
 * @Date: 2022-11-08 14:21:02
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 15:31:16
 * @FilePath: /react-app-start/src/compents/Home.tsx
 * @Description: 
 * 
 */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Home extends React.PureComponent{
    render(){
        return (
            // eslint-disable-next-line react/jsx-filename-extension
            <div>
                this is home<br/>
                <Link to={'/about'}>
                    <Button type={'primary'}>to about</Button>
                </Link>
                <Link to={'/counter'}>
                    <Button type={'primary'}>to counter</Button> 
                </Link>
            </div>
        )
    }
}

export default Home;