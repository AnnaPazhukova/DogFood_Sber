import cn from 'classnames';

import s from './style.module.css'; 

export function Header({ children }) {
  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}> {children} </div>
    </header>
  );
  }
