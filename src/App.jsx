import { DarkModeProvider } from '../context/DarkModeContext';
import Lmain from './layouts/LMain';
import './App.css'

function App() {

  return (
    <DarkModeProvider>
      <Lmain />
    </DarkModeProvider>
  )
}

export default App
