import styles from './PaginaPadrao.module.scss';
import stylesThema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesThema.container}>
        <Outlet />
        { children }
      </div>
    </>
  );
}