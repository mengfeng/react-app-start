/*
 * @Author: alan_mf
 * @Date: 2022-11-08 08:48:12
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 16:52:10
 * @FilePath: /react-app-start/src/App.tsx
 * @Description: 
 * 
 */
import React from "react";
import { Routes,Route } from "react-router-dom";
import About from "./compents/About";
import Home from "./compents/Home";
import Counter from "./compents/Counter";

class App extends React.PureComponent{
    render(){
        return (
            // eslint-disable-next-line react/jsx-filename-extension
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>
                </Routes>
            </div>
          );
    }
}

export default App
