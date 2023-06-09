import { useContext } from 'react';
import {Card} from '../card/index.jsx';
import './style.css';
import { CardsContext } from '../../contexts/card-context.js';

export function CardList({goods}) {
  return (
  <>
    <div className="cards content__cards">
      {goods.map((dataItem, index) => (<Card key={index} {...dataItem}/>))}
    </div>    
  </>
  );
}