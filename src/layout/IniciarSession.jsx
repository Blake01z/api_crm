import { Outlet } from "react-router-dom"

const IniciarSession = () => {
  return (
    <div>
        <h1>Desde Iniciar sesion</h1>
        <Outlet />
    </div>
  )
}

export default IniciarSession