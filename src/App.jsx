import { useState, useEffect } from 'react';
import PantallaSuperior from './components/Consola/PantallaSuperior';
import PantallaInferior from './components/Consola/PantallaInferior';
import ParteIzquierda from './components/Consola/ParteIzquierda';
import ParteDerecha from './components/Consola/ParteDerecha';
import Altavoces from './components/Consola/Altavoces';
import ModalInfo from './components/Consola/ModalInfo';
import './index.css';
import Bisagra from './components/Consola/Bisagra';
import { apps } from './data/apps';
import { FaDesktop, FaGithub } from 'react-icons/fa';

function App() {
  const [estado, setEstado] = useState('apagada');
  const [appSeleccionada, setAppSeleccionada] = useState(0);
  const [vistaInfo, setVistaInfo] = useState(false);
  const [scrollInfo, setScrollInfo] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [toast, setToast] = useState(null);
  const [esMobile, setEsMobile] = useState(false);

  useEffect(() => {
    const check = () => setEsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const manejarPower = () => {
    if (estado === 'apagada') {
      setEstado('encendida');
      setTimeout(() => setEstado('bienvenida'), 1500);
    } else {
      setEstado('apagada');
      setVistaInfo(false);
      setScrollInfo(null);
      setModalAbierto(false);
    }
  };

  const manejarNavegacion = (direccion) => {
    if (estado !== 'menu' || modalAbierto) return;

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
      case 'arriba':
        setAppSeleccionada((prev) => (prev - 1 + totalApps) % totalApps);
        break;
      case 'derecha':
      case 'abajo':
        setAppSeleccionada((prev) => (prev + 1) % totalApps);
        break;
      default:
        break;
    }
  };

  const manejarA = () => {
    if (modalAbierto) return;
    if (estado === 'bienvenida') {
      setEstado('menu');
    } else if (estado === 'menu' && !vistaInfo) {
      setVistaInfo(true);
    }
  };

  const manejarB = () => {
    if (modalAbierto) {
      setModalAbierto(false);
      return;
    }
    if (vistaInfo) {
      setVistaInfo(false);
      setScrollInfo(null);
    } else if (estado === 'menu') {
      setEstado('bienvenida');
    }
  };

  // Y → modal con info completa de la app seleccionada
  const manejarY = () => {
    if (estado !== 'menu') return;
    setModalAbierto(true);
  };

  // X → copiar link del portafolio
  const manejarX = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setToast('¡Link copiado al portapapeles!');
    } catch {
      setToast('No se pudo copiar el link');
    }
  };

  // Bloqueo móvil
  if (esMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 text-center">
        <div className="max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-blue-500/30 flex items-center justify-center">
            <FaDesktop size={32} className="text-blue-300" />
          </div>
          <h1 className="text-xl font-bold mb-2">Mejor en PC</h1>
          <p className="text-sm text-blue-100/80 leading-relaxed mb-6">
            Este portafolio es una consola interactiva diseñada para escritorio.
            Ábrelo desde un computador para la mejor experiencia.
          </p>
          <a
            href="https://github.com/SebasYe05"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            <FaGithub size={16} />
            Ver mi GitHub
          </a>
          <p className="text-[11px] text-blue-200/50 mt-5">Sebastián Sotomayor · @SebasYe05</p>
        </div>
      </div>
    );
  }

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
            manejarX={manejarX}
            manejarY={manejarY}
            modalAbierto={modalAbierto}
          />
        </div>
      </div>

      {/* Toast X */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium shadow-xl animate-fade-in">
          {toast}
        </div>
      )}

      {/* Modal Y */}
      {modalAbierto && (
        <ModalInfo appIndex={appSeleccionada} onClose={() => setModalAbierto(false)} />
      )}
    </div>
  );
}

export default App;
