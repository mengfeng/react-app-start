/*
 * @Author: alan_mf
 * @Date: 2022-11-08 08:48:19
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 16:51:03
 * @FilePath: /react-app-start/src/index.tsx
 * @Description: 
 * 
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store  from './store/store';
import { Provider } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)
root.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>  
    </BrowserRouter>
)