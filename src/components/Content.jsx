import ResponsiveAppBar from './ResponsiveAppBar'
import * as React from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Content({ children }) {
    const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);
    return (
        <div className={darkMode ? 'dark-content main-page' : 'light-content main-page'}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { darkMode })
            )}
        </div>
    )
}
