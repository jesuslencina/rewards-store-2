import { useContext } from 'react';

import { Context } from '../Context';

import HistoryItem from './HistoryItem';

function History() {
  const { userData } = useContext(Context);

  const historyList = Object.values(userData.user.redeemHistory).map((item) => {
    return (
      <HistoryItem
        key={item._id}
        img={item.img.url}
        name={item.name}
        category={item.category}
        id={item._id}
        cost={item.cost}
      />
    );
  });

  return (
    <div className="history">
      <h1>History</h1>
      <div className="container my-product-container">{historyList}</div>
    </div>
  );
}

export default History;
