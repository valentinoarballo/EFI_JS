import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LMain from "../layouts/LMain"

export default function Protected({ token = null }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!token)
      navigate('/')
  }, [navigate, token])

  return (
    <LMain>
      <h1>Page protected!</h1>
    </LMain>
  )
}