import { useContext } from "react";
import Menu from "../components/Menu";
import Content from "../components/Content";
import { DarkModeContext, DarkModeProvider } from '../context/DarkModeContext';

export default function LMain({ children }) {

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