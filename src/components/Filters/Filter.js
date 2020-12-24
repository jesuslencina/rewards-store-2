import { useContext } from 'react';
import { Context } from '../Context';

import './filterStyles.css';

function Filters() {
  const { settings, setSettings } = useContext(Context);

  return (
    <div className="my-filters">
      <div className="buttons">
        <b>Filter by:</b>
        <a className="button">Most recent</a>
        <a className="button">Lowest price</a>
        <a className="button">Highest price</a>
      </div>
    </div>
  );
}

export default Filters;
