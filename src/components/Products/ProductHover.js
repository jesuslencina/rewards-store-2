import Coin from '../../assets/icons/coin.svg';

function ProductHover(props) {
  return (
    <div
      className={`product-hover ${
        props.cost > props.userpoints ? 'doesnt-afford' : 'does-afford'
      }`}>
      {props.cost > props.userpoints ? (
        <div>
          <span>You're missing {props.cost - props.userpoints}</span>
          <img src={Coin} alt="Coins" />
        </div>
      ) : (
        <div>
          <p>REDEEM FOR {props.cost}</p>
          <img src={Coin} alt="Coins" />
        </div>
      )}
    </div>
  );
}
export default ProductHover;
