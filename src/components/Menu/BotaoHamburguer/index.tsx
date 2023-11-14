import styles from './BotaoHamburguer.module.scss';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { CgMenuHotdog } from 'react-icons/cg';
import classNames from 'classnames';

interface Props {
  menu: boolean,
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BotaoHamburguer({ menu, setMenu }: Props) {
  return (
    <button
      className={classNames({
        [styles.botaoHamburguer]: true,
        [styles['botaoHamburguer--ativo']]: menu,
      })}
      onClick={() => setMenu(!menu)}
    >
      {!menu && <CgMenuHotdog size={25} /> || <MdOutlineRestaurantMenu size={25} />}
    </button>
  );
}