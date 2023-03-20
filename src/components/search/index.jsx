import './style.css';
import { ReactComponent as  SearchIcon} from './img/ic-close-input.svg';
import { ReactComponent as CloseIcon} from './img/ic-search.svg';

export function Search() {
  return (
    <form className='search'>
      <input type="text" className="search__input" placeholder='Поиск'/>
      <button className="search__button">
        <SearchIcon/>
        <CloseIcon/>
      </button>
    </form>
  );
  }
