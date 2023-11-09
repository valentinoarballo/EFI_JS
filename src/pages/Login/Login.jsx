import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Box, Avatar, Button, Alert} from "@mui/material"
import ControlledField from "../../components/ControlledField"
import { LoginContext } from "../../context/LoginContext"
import "./Login.css"

export default function Login() {
  const fields = [
    { name: 'Nombre de usuario', failmsg: 'incorrecto', type: 'text', value: 'admin', },
    { name: 'Contraseña', failmsg: 'incorrecta', type: 'password', value: 'admin', }
  ]

  const [failed, setFailed] = useState({ display: false, field: 'none', failmsg: 'none' })
  const { loginToggle } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    var count = event.target.length
    var inputs = []
    for (var i = 0; i < count; i++) {
      if (event.target[i].nodeName == 'INPUT') {
        inputs.push(event.target[i])
      }
    }

    count = fields.length
    for (var x = 0; x < count; x++) {
      if (inputs[x].value != fields[x].value) {
        return setFailed({ display: true, field: fields[x].name, failmsg: fields[x].failmsg })
      }
    }
    loginToggle()
    navigate('/')
  }

  return (
    <Container 
      id='container' 
      component="main" 
      maxWidth="xs" 
      className="loginContainer"
      >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
      >

        <Avatar sx={{m:1}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

        <h3>Iniciar Sesión</h3>

        <form 
          onSubmit={handleSubmit}
          className="loginForm"
        >
          {fields.map((field, index) => (
            <ControlledField key={index} name={field.name} type={field.type} />
          ))}
          <Button sx={{m:5, width: '80%'}} type='submit' variant='contained'>Entrar</Button>
        </form>

        <Alert sx={{
          display: failed.display ? '' : 'none',
          borderRadius: '10px',
        }}
        color="error"
        icon={false}
        >{failed.field} {failed.failmsg}</Alert>


      </Box>
    </Container>
  )

}