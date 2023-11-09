import ResponsiveAppBar from './ResponsiveAppBar'

export default function Menu() {

  const listMenu = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Manual',
      path: '/manual'
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
