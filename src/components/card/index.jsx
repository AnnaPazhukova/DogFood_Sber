import cn from 'classnames';
import './style.css';
import likeIcon from '../../image/save.svg';

export function Card({name, price, discount, wigth, description, picture, tags})
{const discount_price = Math.round(price - (price*discount)/100); {
  return (
    <article className='card'>
      <div className="card__sticky card__sticky_type_top-left">
        {discount !== 0 && (<span className="card__discount">{`-${discount}%`}</span>)}
      {tags && tags.map(tagName => 
        <span className={cn('tag',{[`tag_type_${tagName}`]: tagName})}>{tagName}</span>
        )}
      </div>

      <div className="card__sticky card__sticky_type_top-right">
        <button className="card__favorite">
          <img src={likeIcon} alt="" className='card__favorite-icon'/>
        </button>
      </div>

      <a href="#" className="card__link">
        <img src={picture} alt={name} className="card__image" />
        <div className="card__desc">
{/* разобраться с span */}
          <span className={discount !== 0 ? "card__old-price" : "card__price"}>{price}&nbsp;P</span>
          {discount !== 0 && <span className="card__price card__pricetype_discount">{discount_price}&nbsp;P</span>}
          <span className="card_wight">{wigth}</span>
          <h3 className="card__name">{name}</h3>
        </div>
      </a>
      <a href="" className="card__cart btn btn_type_primary">В корзину</a>
    </article>
  );
}}

