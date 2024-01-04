import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import simpleParallax from 'simple-parallax-js';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import Swup from 'swup';
const swup = new Swup();





const textSlice = createSlice({
  name: "number",
  initialState: 1,
  reducers: {
    changeText: state => {
      state += 1
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
  ,
)





