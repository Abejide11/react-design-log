import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Header'
import Content from './Component/Content'
import style from './App.module.css'
function App() {

  return (
    <div className={style.cont}>
    <Header/>
    <Content/>
  

    </div>
  )
}

export default App
