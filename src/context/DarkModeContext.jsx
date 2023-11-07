import React, { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  // Obtener el estado inicial del modo oscuro desde localStorage
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  // Actualizar localStorage cuando el estado del modo oscuro cambie
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    // Cambiar el estado del modo oscuro y se guardar automaticamente en localStorage
    setDarkMode(!darkMode);
  };

  return (

    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
    
  );
};

export { DarkModeContext, DarkModeProvider };
