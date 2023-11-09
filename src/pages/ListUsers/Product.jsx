import { useParams } from "react-router-dom";
import LMain from "../../layouts/LMain"


export default function Product(props) {
  let { productId } = useParams();
  return (
    <LMain>
      <h1> Product: {productId}</h1>
      <p> Description of {productId}</p>
    </LMain>
  )
}