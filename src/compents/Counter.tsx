/*
 * @Author: alan_mf
 * @Date: 2022-11-08 14:52:27
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 16:10:47
 * @FilePath: /react-app-start/src/compents/Counter.tsx
 * @Description: 
 * 
 */
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement,increment } from "../store/countSlice";

function Counter(){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const count = useSelector((state:any) => state.counter.value)
    const dispatch = useDispatch()
    
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <div>
            <div>
                <button 
                aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    increment
                </button>
                <span>{count}</span>
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;