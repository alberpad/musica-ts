import React from 'react';

interface ICancionProps {
  letra: string;
}
function Cancion(props: ICancionProps) {
  const { letra } = props;
  if (letra.length === 0) return null;
  return (
    <React.Fragment>
      <h2>Letra Canción</h2>
      <p className="letra">{letra}</p>
    </React.Fragment>
  );
}

export default Cancion;
