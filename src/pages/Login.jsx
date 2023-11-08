import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import ControlledField from "../components/ControlledField"
import { LoginContext } from "../context/LoginContext"

export default function Login() {
  const fields = [
    { name: 'Nombre de usuario', failmsg: 'incorrecto', type: 'text', value: 'admin', },
    { name: 'Contraseña', failmsg: 'incorrecta', type: 'password', value: 'admin', }
  ]

  const [failed, setFailed] = useState({ display: false, field: 'none', failmsg: 'none' })
  const { logged, loginToggle } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    var count = fields.length
    for (var i = 0; i < count; i++) {
      if (event.target[i].value != fields[i].value) {
        return setFailed({ display: true, field: fields[i].name, failmsg: fields[i].failmsg })
      }
    }
    loginToggle()
    navigate('/')
  }

  return (
    <>
      <p style={{
        display: failed.display ? '' : 'none'
      }}>{failed.field} {failed.failmsg}</p>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <ControlledField key={index} name={field.name} type={field.type} />
        ))}
        <button type='submit'>Entrar</button>
      </form>
    </>
  )

}