import { useContext } from 'react';
import { Context } from '../Context';

import './filterStyles.css';

function Filters() {
  const { settings, setSettings } = useContext(Context);

  return (
    <div className="my-filters">
      <div className="buttons">
        <b>Filter by:</b>
        <a className="button is-secondary">Most recent</a>
        <a className="button is-secondary">Lowest price</a>
        <a className="button is-secondary">Highest price</a>
      </div>
    </div>
  );
}

export default Filters;
