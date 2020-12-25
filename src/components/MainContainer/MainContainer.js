import { useContext } from 'react';
import Filter from '../Filters/Filter';
import ProductsContainer from '../Products/ProductsContainer';
import History from '../History/History';
import { Context } from '../Context';

function MainContainer() {
  const { settings } = useContext(Context);
  return (
    <main>
      {settings.viewingHistory ? (
        <History />
      ) : (
        <>
          <Filter /> <ProductsContainer />
        </>
      )}
    </main>
  );
}

export default MainContainer;
