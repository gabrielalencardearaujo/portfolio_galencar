import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <>
      <h1>Pagina nao encontrada</h1>
      <button onClick={handleClick}>ir para a pagina Home</button>
    </>
  );
}

export default Error404;
