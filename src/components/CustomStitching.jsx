/* eslint-disable react/prop-types */

import Product from "./Product"
const CustomStitching = ({handleAddToCart, products}) => {
  return (
    <>
        <Product onAddToCart={handleAddToCart} products={products} />
    </>
  )
}
export default CustomStitching
