import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function Admin() {
  const users = [
    {
      user: 'Felipe'
    }, {
      user: 'Amélia'
    }, {
      user: 'Laura'
    }
  ];

  const estiloTitulo = {
    color: '#333',       // Cor do texto
    fontSize: '48px',    // Tamanho da fonte
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const, // Alinhamento de texto
    flex: 1, // Absorver todo o espaço disponível
    // Adicione mais estilos conforme necessário
  };

  const { user } = useParams();
  const validacaoUser = users.find(item => item.user.toLowerCase() === String(user).toLowerCase());

  if (!validacaoUser) {
    return <Navigate to='/' />;
  }

  return (
    <h1 style={estiloTitulo}>
      Usuário valido, Seja Bem-Vindo! {user ? user.charAt(0).toUpperCase() + user.substring(1) : ''}
    </h1>
  );
}