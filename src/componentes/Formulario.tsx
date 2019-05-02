import React, { useState } from 'react';

export interface IBusqueda {
  artista: string;
  cancion: string;
}
interface IFormularioProps {
  obtenerBusqueda: (busqueda: IBusqueda) => void;
}
function Formulario(props: IFormularioProps) {
  const [busqueda, agregarBusqueda] = useState<IBusqueda>({
    artista: '',
    cancion: ''
  });

  const { obtenerBusqueda } = props;

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    obtenerBusqueda(busqueda);
  };

  const actualizarState = (e: React.ChangeEvent<HTMLInputElement>) => {
    agregarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleOnSubmit}
            className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Canción"
                      onChange={actualizarState}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
