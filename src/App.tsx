import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Formulario, { IBusqueda } from './componentes/Formulario';
import Cancion from './componentes/Cancion';
import Informacion from './componentes/Informacion';

const App: React.FC = () => {
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState('');
  const [info, agregarInfo] = useState({});

  const consultarApiLetra = async (busqueda: IBusqueda) => {
    const url = `https://api.lyrics.ovh/v1/${busqueda.artista}/${
      busqueda.cancion
    }`;
    const response = await axios.get(url);
    agregarLetra(response.data.lyrics);
  };

  const consultarApiInfo = async () => {
    if (artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const response = await axios.get(url);
      console.log(response);
      if (response.data.artists[0]) {
        agregarInfo(response.data.artists[0]);
      }
    }
  };

  const obtenerBusqueda = (busqueda: IBusqueda) => {
    agregarArtista(busqueda.artista);
    if (artista.length > 2 && busqueda.cancion.length > 2) {
      consultarApiLetra(busqueda);
    }
  };

  useEffect(() => {
    consultarApiInfo();
  }, [artista]);

  return (
    <React.Fragment>
      <Formulario obtenerBusqueda={obtenerBusqueda} />
      <div className="container mt-">
        <div className="row">
          <div className="col-md-6">
            <Informacion info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
