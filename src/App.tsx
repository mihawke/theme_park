import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Themes from './styles/themes'
import { useTheme } from './components/ThemeContext'

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flex:1,
        flexDirection: 'row',
        backgroundColor:theme.background,
      }}>
      <Navbar></Navbar>
      <div
      style={{
        display: 'flex',
        flex:1,
        flexDirection: 'column'
      }}>
        <Header></Header>
        <Home></Home>
      </div>
    </div>
  )
}

export default App
