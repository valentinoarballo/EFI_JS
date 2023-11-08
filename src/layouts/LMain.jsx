import { useContext, useEffect } from "react";
import Menu from "../components/Menu";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";
import { DarkModeContext, DarkModeProvider } from '../context/DarkModeContext';
import { LoginContext } from "../context/LoginContext";

export default function LMain({ children }) {

  const {logged, loginToggle} = useContext(LoginContext)
  const navigate = useNavigate()

  useEffect(()=>{
    console.log("dfsfsdf")
    if (!logged)
      navigate('/login') 
  },[navigate])

    return (
        <DarkModeProvider>
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
                    height: '90vh',
                    width: '100%'
                }}
                >
                    <Content>
                        {children}
                    </Content>
                </div>
            </div>
        </DarkModeProvider>
    )
}