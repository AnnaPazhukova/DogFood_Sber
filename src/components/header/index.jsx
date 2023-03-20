import {Logo} from '../logo/index.jsx';
import {Search} from '../search/index.jsx';
import './style.css';

export function Header() {
  return (
    <header className='header'>
      <div className="container header__wrapper">
        <Logo/>
        <Search/>
      </div>
    </header>
  );
  }
