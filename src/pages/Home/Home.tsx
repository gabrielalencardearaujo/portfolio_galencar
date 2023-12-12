import React from 'react';

function Home() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Pagina home</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Contador</button>
    </>
  )
}

export default Home;