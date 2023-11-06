import { Link } from "react-router-dom"
// import { Button, ButtonGroup } from '@chakra-ui/react'
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
        {
            name: 'Protected',
            path: '/protected'
        },
        {
            name: 'Not Found',
            path: '/ia'
        },

    ]
    return (
        <div>
            <ResponsiveAppBar listMenu={listMenu} />
        </div>
    )
}
