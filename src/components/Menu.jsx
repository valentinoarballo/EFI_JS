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
      name: 'Product',
      path: '/products'
    },
  ]
  return (
    <div>
      <ResponsiveAppBar listMenu={listMenu} />
    </div>
  )
}
