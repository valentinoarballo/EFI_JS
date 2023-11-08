import { DarkModeProvider } from '../context/DarkModeContext';
import { LoginContext } from './context/LoginContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LMain from './layouts/LMain';
import './App.css'

function App() {

  return (
      <DarkModeProvider>
        <LMain />
      </ DarkModeProvider>
  )
}

export default App
