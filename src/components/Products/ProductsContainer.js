import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import Product from './Product';

import './productStyles.css';

function ProductsContainer() {
  const { products, fetchProducts, filtering, amountToDisplay } = useContext(
    Context
  );

  const ProductList = Object.values(products).map((item) => {
    return (
      <Product
        key={item._id}
        img={item.img.url}
        name={item.name}
        category={item.category}
      />
    );
  });

  return <div className="container my-product-container">{ProductList}</div>;
}

export default ProductsContainer;
