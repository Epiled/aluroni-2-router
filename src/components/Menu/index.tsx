import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import BotaoHamburguer from './BotaoHamburguer';
import { useState } from 'react';
import classNames from 'classnames';

export default function Menu() {
  const rotas = [
    {
      label: 'Início',
      to: '/',
    }, {
      label: 'Cardápio',
      to: '/cardapio',
    }, {
      label: 'Sobre',
      to: '/sobre',
    }
  ];

  const [menu, setMenu] = useState(false);

  return (
    <nav className={styles.menu}>
      <Logo />
      <BotaoHamburguer menu={menu} setMenu={setMenu} />
      <ul className={classNames({
        [styles.menu__list]: true,
        [styles['menu__list--ativo']]: menu
      })}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>);
}