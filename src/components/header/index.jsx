import cn from 'classnames';
import './style.css';
import s from './styles.module.css'; 
import { Button } from '../button';
import { useContext } from 'react';
import { UserContext } from '../../contexts/current-user-context';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsContext } from '../../contexts/card-context';
import {ReactComponent as FavouriteIcon} from './img/favourites.svg';
import { Link } from 'react-router-dom';

export function Header({ children}) {

  const {currentUser, onUpdateUser} = useContext(UserContext);
  const {favourites} = useContext(CardsContext);
  const { toggleTheme } = useContext(ThemeContext);
  const handleClickButtonEdit = () => {
    onUpdateUser({name: '', about : ''})
  }
  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}> 
      {children} 
      <div className={s.iconsMenu}>
        <Link className={s.favouritesLink} to={{pathname:'/favourites'}}>
          <FavouriteIcon/>
          {favourites.length !== 0 && <span className={s.iconBubble}>{favourites.length}</span>}
        </Link>
      </div>
      {/* <Button action={handleClickButtonEdit}>
        Изменить
      </Button> */}
      <label className="wraper" htmlFor="something">
          <div className="switch-wrap">
            <input type="checkbox" id="something" onChange={toggleTheme} />
            <div className="switch"></div>
          </div>
        </label>
      </div>
    </header>
  );
  }
