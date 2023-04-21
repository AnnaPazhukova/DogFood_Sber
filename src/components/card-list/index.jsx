import {Card} from '../card/index.jsx';
import './style.css';

export function CardList({goods, onProductLike, currentUser}) {
  return (
  <>
    <div className="cards content__cards">
      {goods.map((dataItem, index) => (<Card key={index} {...dataItem} onProductLike={onProductLike} currentUser={currentUser}/>))}
    </div>    
  </>
  );
}