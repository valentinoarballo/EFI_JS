import { createContext, useState } from "react";
import PropTypes from 'prop-types';

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

LoginContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LoginContext, LoginContextProvider }