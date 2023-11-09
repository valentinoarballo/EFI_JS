import ResponsiveAppBar from './ResponsiveAppBar'

export default function Menu() {

  const listMenu = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Contacto',
      path: '/contact'
    },
    {
      name: 'Users',
      path: '/users'
    },
  ]
  return (
    <div>
      <ResponsiveAppBar listMenu={listMenu} />
    </div>
  )
}
