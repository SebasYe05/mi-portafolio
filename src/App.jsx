import { useState } from 'react';
import PantallaSuperior from './components/Consola/PantallaSuperior';
import PantallaInferior from './components/Consola/PantallaInferior';
import ParteIzquierda from './components/Consola/ParteIzquierda';
import ParteDerecha from './components/Consola/ParteDerecha';
import Altavoces from './components/Consola/Altavoces';
import './index.css';
import Bisagra from './components/Consola/Bisagra';

function App() {
  const [estado, setEstado] = useState('apagada');
  const [appSeleccionada, setAppSeleccionada] = useState(0);
  const [vistaInfo, setVistaInfo] = useState(false); // false = menú, true = info de la app

  const manejarPower = () => {
    if (estado === 'apagada') {
      setEstado('encendida');
      setTimeout(() => setEstado('bienvenida'), 1500);
    } else {
      setEstado('apagada');
      setVistaInfo(false); // Resetear vista al apagar
    }
  };

  // Función para navegar con la cruceta
  const manejarNavegacion = (direccion) => {
    if (estado !== 'menu' || vistaInfo) return; // Solo navegar en menú y no en vista info
    
    const totalApps = 4; 
    
    switch(direccion) {
      case 'arriba':
        break;
      case 'abajo':
        break;
      case 'izquierda':
        setAppSeleccionada(prev => (prev - 1 + totalApps) % totalApps);
        break;
      case 'derecha':
        setAppSeleccionada(prev => (prev + 1) % totalApps);
        break;
      default:
        break;
    }
  };

  // Función para botón A (confirmar/aceptar)
  const manejarA = () => {
    if (estado === 'bienvenida') {
      setEstado('menu');
    } else if (estado === 'menu') {
      if (!vistaInfo) {
        setVistaInfo(true); // Entrar a la info de la app seleccionada
      }
    } else if (vistaInfo) {
      // Si ya estamos en vista info, no hacer nada
    }
  };

  // Función para botón B (volver)
  const manejarB = () => {
    if (vistaInfo) {
      setVistaInfo(false); 
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