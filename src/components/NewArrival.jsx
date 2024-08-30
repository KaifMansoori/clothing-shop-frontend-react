/* eslint-disable react/prop-types */

import Product from "./Product"
const NewArrival = ({handleAddToCart, products}) => {
  return (
    <>
        <Product onAddToCart={handleAddToCart} products={products} />
    </>
  )
}

export default NewArrival
