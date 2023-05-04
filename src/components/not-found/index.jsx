import s from './styles.module.css';
import {ReactComponent as NotFoundIcon} from './image/ic-notfound.svg';
import { Button } from '../button';

export function NotFound({children,title,buttonText="На главную", buttonAction}) {
  return (
      <>
      <div className={s.notFound}>
        <NotFoundIcon className={s.image} aria-hidden='true'/>
        <h1 className={s.title}>{title}</h1>
        {children && children}
        {buttonAction
            ? <Button type='secondary' href='#' action={buttonAction}>{buttonText}</Button>
            : <Button type='secondary' href='/' action={buttonAction}>{buttonText}</Button>
        }
      </div>
      </>
    );
  }
