import { useContext } from 'react';
import { Context } from '../Context';
import leftArrow from '../../assets/icons/arrow-left.svg';
import rightArrow from '../../assets/icons/arrow-right.svg';

import './filterStyles.css';

function Filters() {
  const { settings, setSettings, products } = useContext(Context);

  const handleFilterChange = (filter) => {
    setSettings({ ...settings, filtering: filter, displayOffset: 0 });
  };

  const handlePaginationNext = () => {
    if (Object.values(products).length / settings.displayOffset === Infinity) {
      setSettings({ ...settings, displayOffset: settings.amountToDisplay });
    } else if (
      Object.values(products).length - settings.amountToDisplay >
      settings.displayOffset
    ) {
      let newOffset = settings.displayOffset + settings.amountToDisplay;
      setSettings({ ...settings, displayOffset: newOffset });
    }
  };

  const handlePaginationPrevious = () => {
    if (settings.displayOffset >= settings.amountToDisplay) {
      let newOffset = settings.displayOffset - settings.amountToDisplay;
      setSettings({ ...settings, displayOffset: newOffset });
    }
  };

  return (
    <div className="my-filters">
      <div className="buttons">
        <b>Filter by:</b>
        <a
          onClick={() => handleFilterChange(1)}
          className={`button ${settings.filtering === 1 ? 'orange' : ''}`}>
          Most recent
        </a>
        <a
          onClick={() => handleFilterChange(2)}
          className={`button ${settings.filtering === 2 ? 'orange' : ''}`}>
          Lowest price
        </a>
        <a
          onClick={() => handleFilterChange(3)}
          className={`button ${settings.filtering === 3 ? 'orange' : ''}`}>
          Highest price
        </a>
      </div>
      <div className="pag-buttons">
        {settings.displayOffset + settings.amountToDisplay < products.length ? (
          <p className="has-text-black">
            {settings.displayOffset + settings.amountToDisplay} of{' '}
            {products.length}
          </p>
        ) : (
          <p className="has-text-black">
            {products.length} of {products.length}
          </p>
        )}
        <img
          src={leftArrow}
          onClick={handlePaginationPrevious}
          alt="Left arrow"
        />
        <img
          src={rightArrow}
          onClick={handlePaginationNext}
          alt="Right arrow"
        />
      </div>
    </div>
  );
}

export default Filters;
