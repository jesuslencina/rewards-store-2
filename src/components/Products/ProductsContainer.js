import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import Product from './Product';

import './productStyles.css';

function ProductsContainer() {
  const { products, fetchProducts, settings, amountToDisplay } = useContext(
    Context
  );

  const sortProducts = (list) => {
    switch (settings.filtering) {
      case 1:
        return list;

      case 2:
        function compare2(a, b) {
          if (a.cost < b.cost) {
            return -1;
          }
          if (a.cost > b.cost) {
            return 1;
          }
          return 0;
        }

        return [...list].sort(compare2);

      case 3:
        function compare3(a, b) {
          if (a.cost < b.cost) {
            return 1;
          }
          if (a.cost > b.cost) {
            return -1;
          }
          return 0;
        }

        return [...list].sort(compare3);

      default:
        return list;
    }
  };

  const ProductList = sortProducts(Object.values(products)).map((item) => {
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
