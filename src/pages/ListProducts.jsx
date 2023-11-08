import { Link } from "react-router-dom"
import LMain from "../layouts/LMain"

export default function ListProducts(props) {
  const list = [{
    name: 'Mouse',
    slug: 'mouse',
    description: ' Mouse and Keyboard'
  },
  {
    name: 'Keyboard',
    slug: 'keyboard',
    description: 'Keyboard'
  }
  ]

  return (
    <LMain>
      <h1>Product list</h1>
      <ul>
        {list.map(p => (

          <li key={p.slug}>
            <Link to={p.slug}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </LMain>
  )
}