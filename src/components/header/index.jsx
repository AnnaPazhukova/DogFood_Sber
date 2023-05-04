import cn from 'classnames';
import './style.css';
import s from './styles.module.css'; 
import { Button } from '../button';
import { useContext } from 'react';
import { UserContext } from '../contexts/current-user-context';
import { ThemeContext } from '../contexts/theme-context';

export function Header({ children}) {

  const {currentUser, onUpdateUser} = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);
  const handleClickButtonEdit = () => {
    onUpdateUser({name: '', about : ''})
  }
  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}> 
      {children} 
      <Button action={handleClickButtonEdit}>
        Изменить
      </Button>
      <label class="wraper" for="something">
          <div class="switch-wrap">
            <input type="checkbox" id="something" onChange={toggleTheme} />
            <div class="switch"></div>
          </div>
        </label>
      </div>
    </header>
  );
  }
