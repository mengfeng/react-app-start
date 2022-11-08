/*
 * @Author: alan_mf
 * @Date: 2022-11-08 14:42:17
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 14:49:56
 * @FilePath: /react-app-start/src/store/store.ts
 * @Description: 
 * 
 */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './countSlice';

export default configureStore({
    reducer:{
        counter:counterReducer
    }
})