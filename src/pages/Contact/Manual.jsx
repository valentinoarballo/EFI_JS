import Paper from '@mui/material/Paper'
import LMain from "../../layouts/LMain"
import filtros from '../../assets/filtros.png'
import login from '../../assets/login.png'
import nav from '../../assets/nav.png'
import pag from '../../assets/pag.png'
import portada from '../../assets/portada.png'
import './Manual.css'
import "../../index.css"


export default function Manual() {
  return (
    <LMain>
      <h1>Manual de documentación</h1>
      <hr />
      <Paper elevation={3} className='contactCard'>
        <h2 className='contactHeader'>Router Dom + MaterialUI</h2>

        <p>Este trabajo práctico consiste en la implementación de una aplicación "to-do", con un login añadido, nav responsive, y funcionalidad de temas. Como buenas prácticas, utilizamos ESLint, así como PropTypes.</p>
      </Paper>

      <Paper elevation={3} className='contactCard'>
        <h3 className='contactHeader'>Login</h3>
        <p>
          Para utilizar esta aplicación, requerirá iniciar sesión. Por defecto, aceptará el nombre "admin" y contraseña "admin". Todas las rutas redireccionarán al login si no la sesión no está iniciada.
          Esta sección es un form con dos campos controlados. Al hacer clic o enter, la aplicación retirará los valores de los campos y los comparará con aquellos registrados. Esta función es fácilmente extensible; el formulario es generado a base de una lista de diccionarios con los mismos campos, y de añadirse, por ejemplo, un campo de email, continuarará funcionando igual. 
        </p>
      </Paper>
      
      <img src={login} className="contactCenter"></img>

      <Paper elevation={3} className='contactCard'>
        <h3 className='contactHeader'> Funcionalidades</h3>
        <h4 className='contactHeader'>NavBar</h4>
        <p>
          La barra de navegación consta con tres funcionalidades principales; navegación, cambio de tema, y logout. 
          Todos los botones a la izquierda son rutas a otras páginas. Están generados con una función map iterando a lo largo de una lista de objetos que incluyen ruta y nombre.
          El botón de cambio de tema funciona al clickearlo y guarda las preferencias en el caché de localStorage, de manera que incluso al cerrar sesión se conservará la preferencia. 
          El botón de logout, accessible mediante el "perfil" a la derecha extrema, cerrará la sesión y navegará automáticamente al login. Este también está generado con una función map, aunque solo implementa una función, para ser fácilmente extensible.
        </p>
      </Paper>

      <img src={nav} class="contactCenter"></img>

      <Paper elevation={3} className='contactCard'>
        <h4 className='contactHeader'>Filtros</h4>
        <p>Las cartas to-do pueden filtrarse de dos maneras; por cantidad, y por tipo. El filtro de páginas organiza las cartas en páginas de 12, 10 y 8, navegables al fondo de la aplicación (véase "Paginación"). El filtro de tipo permite seleccionar si desea ver los to-dos completos, incompletos, o ambos.</p>
      </Paper>

      <img src={filtros} class="contactCenter"></img>

      <Paper elevation={3} className='contactCard'>
        <h4 class='className'>Paginación</h4>
        <p>La sección de paginación permite navegar todas las páginas de cartas.</p>
      </Paper>
      <img src={pag} class="contactCenter"></img>


    </LMain>
  )
}