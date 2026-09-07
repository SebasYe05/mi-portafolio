import { useState } from 'react';
import PantallaSuperior from './components/Consola/PantallaSuperior';
import PantallaInferior from './components/Consola/PantallaInferior';
import ParteIzquierda from './components/Consola/ParteIzquierda';
import ParteDerecha from './components/Consola/ParteDerecha';
import Altavoces from './components/Consola/Altavoces';
import './index.css';
import Bisagra from './components/Consola/Bisagra';
import { apps } from './data/apps';

function App() {
  const [estado, setEstado] = useState('apagada');
  const [appSeleccionada, setAppSeleccionada] = useState(0);
  const [vistaInfo, setVistaInfo] = useState(false);
  const [scrollInfo, setScrollInfo] = useState(null);

  const manejarPower = () => {
    if (estado === 'apagada') {
      setEstado('encendida');
      setTimeout(() => setEstado('bienvenida'), 1500);
    } else {
      setEstado('apagada');
      setVistaInfo(false);
      setScrollInfo(null);
    }
  };

  const manejarNavegacion = (direccion) => {
    if (estado !== 'menu') return;

    if (vistaInfo) {
      if (direccion === 'arriba' || direccion === 'abajo') {
        setScrollInfo(direccion);
        setTimeout(() => setScrollInfo(null), 50);
      }
      return;
    }

    const totalApps = apps.length;

    switch (direccion) {
      case 'izquierda':
        setAppSeleccionada((prev) => (prev - 1 + totalApps) % totalApps);
        break;
      case 'derecha':
        setAppSeleccionada((prev) => (prev + 1) % totalApps);
        break;
      case 'arriba':
        setAppSeleccionada((prev) => (prev - 1 + totalApps) % totalApps);
        break;
      case 'abajo':
        setAppSeleccionada((prev) => (prev + 1) % totalApps);
        break;
      default:
        break;
    }
  };

  const manejarA = () => {
    if (estado === 'bienvenida') {
      setEstado('menu');
    } else if (estado === 'menu' && !vistaInfo) {
      setVistaInfo(true);
    }
  };

  const manejarB = () => {
    if (vistaInfo) {
      setVistaInfo(false);
      setScrollInfo(null);
    } else if (estado === 'menu') {
      setEstado('bienvenida');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[600px] bg-blue-500 p-5 rounded-[30px] shadow-lg">

        <div className="relative flex items-center justify-center h-64 mb-4">
          <Altavoces side="left" />
          <PantallaSuperior
            estado={estado}
            appSeleccionada={appSeleccionada}
            vistaInfo={vistaInfo}
            scrollInfo={scrollInfo}
          />
          <Altavoces side="right" />
        </div>

        <Bisagra />

        <div className="flex items-center justify-between px-2 h-64">
          <ParteIzquierda
            manejarPower={manejarPower}
            estado={estado}
            manejarNavegacion={manejarNavegacion}
          />
          <PantallaInferior
            estado={estado}
            appSeleccionada={appSeleccionada}
            setAppSeleccionada={setAppSeleccionada}
            alTocarPantalla={setEstado}
            vistaInfo={vistaInfo}
          />
          <ParteDerecha
            manejarA={manejarA}
            manejarB={manejarB}
            estado={estado}
            vistaInfo={vistaInfo}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
