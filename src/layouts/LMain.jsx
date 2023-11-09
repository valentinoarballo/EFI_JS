import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Content from "../components/Content";
import { DarkModeContext } from '../context/DarkModeContext';
import { LoginContext } from "../context/LoginContext";


export default function LMain({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { logged, loginToggle } = useContext(LoginContext)

  const navigate = useNavigate()


  useEffect(() => {
    if (!logged)
      navigate('/login')
  }, [navigate])

  return (
    <div style={{ background: `${darkMode ? 'black' : ''}` }}>
      <div style={{
        height: '10vh',
        width: '100%',
        padding: 0,

      }}>
        <nav style={{
          marginBottom: 0,
          display: 'block'
        }}>
          <Menu />
        </nav>

        <div style={{
          display: 'flex',
          width: '100%'
        }}
        >
          <Content>
            {children}
          </Content>
        </div>
      </div>
    </div>
  )
}