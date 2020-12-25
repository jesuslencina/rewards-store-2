import { useContext } from 'react';
import { Context } from '../Context';
import leftArrow from '../../assets/icons/arrow-left.svg';
import rightArrow from '../../assets/icons/arrow-right.svg';

import './filterStyles.css';

function Filters() {
  const { settings, setSettings, products } = useContext(Context);

  const handleFilterChange = (filter) => {
    setSettings({ ...settings, filtering: filter });
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
        <p className="has-text-black">
          {settings.displayOffset + settings.amountToDisplay} of{' '}
          {products.length}
        </p>
        <img src={leftArrow} alt="Left arrow" />
        <img src={rightArrow} alt="Right arrow" />
      </div>
    </div>
  );
}

export default Filters;
