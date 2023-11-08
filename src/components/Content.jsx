import { Children, useContext, cloneElement } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import '../index.css'

export default function Content({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'dark-content main-page' : 'light-content main-page'}>
      {Children.map(children, (child) =>
        cloneElement(child, { darkMode })
      )}
    </div>
  )
}
