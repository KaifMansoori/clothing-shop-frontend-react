/* eslint-disable react/prop-types */
import ProductCard from './ProductCard';

const Product = ({products}) => {


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          item={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
