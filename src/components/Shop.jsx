/* eslint-disable react/prop-types */

import Product from "./Product"
const Shop = ({handleAddToCart, products}) => {
  return (
    <>
        <Product onAddToCart={handleAddToCart} products={products} />
    </>
  )
}

export default Shop
