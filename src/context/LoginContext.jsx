import { createContext, useState, useEffect } from "react";
const LoginContext = createContext()

const LoginContextProvider = (props) => {
  const [logged, setLogged] = useState(false)

  const loginToggle = () => {
    setLogged(!logged)
  }

  return (
    <LoginContext.Provider value={{ logged, loginToggle }}>
      {props.children}
    </LoginContext.Provider>
  )

}

export { LoginContext, LoginContextProvider }