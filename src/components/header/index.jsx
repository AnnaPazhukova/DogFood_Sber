import cn from 'classnames';
import './style.css';
import s from './styles.module.css'; 
import { Button } from '../button';
import { useContext } from 'react';
import { UserContext } from '../../contexts/current-user-context';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsContext } from '../../contexts/card-context';
import {ReactComponent as FavouriteIcon} from './img/favourites.svg';
import { Link, useLocation } from 'react-router-dom';

export function Header({ children}) {

  const {currentUser, onUpdateUser} = useContext(UserContext);
  const {favourites} = useContext(CardsContext);
  const { toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

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
        <Link to='/login' replace state={{backgroundLocation: location, initialPath: location.pathname}}> Войти</Link>
      </div>
    </header>
  );
  }
