/*
 * @Author: alan_mf
 * @Date: 2022-11-08 14:42:31
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 15:15:47
 * @FilePath: /react-app-start/src/store/countSlice.ts
 * @Description: 
 * 
 */
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state) => {
            state.value += 1
        },
        decrement:(state) =>{
            state.value -= 1
        },
        incrementByAmount:(state,action) => {
            state.value += action.payload
        }
    }
})

export const { increment,decrement,incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
