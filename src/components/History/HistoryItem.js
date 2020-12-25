import Coin from '../../assets/icons/coin.svg';

function HistoryItem(props) {
  return (
    <div className="card m-3 my-product">
      <div className="top-right">
        <div>
          <span>{props.cost}</span>
          <img src={Coin} alt="Coin" />
        </div>
      </div>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} alt={props.name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="has-text-primary m-0 p-0">{props.category}</p>
        <h4 className="is-size-5 m-0">{props.name}</h4>
      </div>
    </div>
  );
}

export default HistoryItem;
