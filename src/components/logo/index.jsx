import './style.css';
import logoSrc from './img/logo.svg'

export function Logo() {
  return (
    <a href='#' className='logo'>
      <img src={logoSrc} alt="логотип компании" className='logo__pic' />
    </a>
  );
  }
