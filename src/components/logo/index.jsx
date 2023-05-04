import './style.css';
import logoSrc from './img/logo.svg'
import { Link } from 'react-router-dom';
import cn from 'classnames';

export function Logo({className, href, ...props}) {
  const hrefValue = href ? href : null;
  return (
    hrefValue
    ? <Link to={{pathname: hrefValue}} className={cn("logo", {className : className})}>
      <img src={logoSrc} alt="Логотип компании"  className='logo__pic'/>
    </Link>
    : <span className={cn("logo", {className : className})} {...props}>
      <img src={logoSrc} alt='Логотип компании' className='logo__pic'/>
    </span>
  );
  }
