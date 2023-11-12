import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesThema from 'styles/Tema.module.scss';
import nossacasa from 'assets/nossa_casa.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let pratosRecomedados = [...cardapio];
  pratosRecomedados = pratosRecomedados.sort(() => .5 - Math.random()).splice(0, 3);

  const navigate = useNavigate();

  function redirecionaPrato(prato: Prato) {
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <section>
      <h3 className={stylesThema.titulo}>
        Recomendação da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomedados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => { redirecionaPrato(item); }}
            >
              Ver Mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesThema.titulo}>
        Conheça nossa casa
      </h3>
      <div className={styles.nossaCasa}>
        <img src={nossacasa} alt="Casa da Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}