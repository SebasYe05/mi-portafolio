import { useState, useEffect, useCallback, useRef } from 'react';
import PantallaSuperior from './components/Consola/PantallaSuperior';
import PantallaInferior from './components/Consola/PantallaInferior';
import ParteIzquierda from './components/Consola/ParteIzquierda';
import ParteDerecha from './components/Consola/ParteDerecha';
import Altavoces from './components/Consola/Altavoces';
import ModalInfo from './components/Consola/ModalInfo';
import './index.css';
import Bisagra from './components/Consola/Bisagra';
import { apps } from './data/apps';
import { FaDesktop, FaGithub, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { sounds, isMuted, toggleMute } from './utils/sounds';

const COLS = 3; // grid 3x2

function App() {
  const [estado, setEstado] = useState('apagada');
  const [appSeleccionada, setAppSeleccionada] = useState(0);
  const [vistaInfo, setVistaInfo] = useState(false);
  const [scrollInfo, setScrollInfo] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [toast, setToast] = useState(null);
  const [esMobile, setEsMobile] = useState(false);
  const [muted, setMuted] = useState(isMuted);
  const holdRef = useRef(null);

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

  const moverApp = useCallback((delta) => {
    setAppSeleccionada((prev) => {
      const total = apps.length;
      let next = prev + delta;

      // Movimiento vertical en grid: si se sale de rango, no hacer wrap raro
      if (delta === COLS) {
        // abajo
        if (prev + COLS >= total) return prev; // ya está en la última fila
        return prev + COLS;
      }
      if (delta === -COLS) {
        // arriba
        if (prev - COLS < 0) return prev; // ya está en la primera fila
        return prev - COLS;
      }

      // Horizontal con wrap en la misma fila
      if (delta === 1 || delta === -1) {
        const row = Math.floor(prev / COLS);
        const rowStart = row * COLS;
        const rowEnd = Math.min(rowStart + COLS - 1, total - 1);
        let col = prev + delta;
        if (col < rowStart) col = rowEnd;
        if (col > rowEnd) col = rowStart;
        return col;
      }

      // fallback
      if (next < 0) next = total - 1;
      if (next >= total) next = 0;
      return next;
    });
    sounds.move();
  }, []);

  const manejarNavegacion = useCallback(
    (direccion) => {
      if (estado !== 'menu' || modalAbierto) return;

      if (vistaInfo) {
        if (direccion === 'arriba' || direccion === 'abajo') {
          setScrollInfo(direccion);
          setTimeout(() => setScrollInfo(null), 40);
          sounds.click();
        }
        return;
      }

      switch (direccion) {
        case 'izquierda':
          moverApp(-1);
          break;
        case 'derecha':
          moverApp(1);
          break;
        case 'arriba':
          moverApp(-COLS);
          break;
        case 'abajo':
          moverApp(COLS);
          break;
        default:
          break;
      }
    },
    [estado, modalAbierto, vistaInfo, moverApp]
  );

  const iniciarHold = (direccion) => {
    manejarNavegacion(direccion);
    if (vistaInfo && (direccion === 'arriba' || direccion === 'abajo')) {
      clearInterval(holdRef.current);
      holdRef.current = setInterval(() => manejarNavegacion(direccion), 120);
    }
  };

  const detenerHold = () => {
    clearInterval(holdRef.current);
    holdRef.current = null;
  };

  useEffect(() => () => clearInterval(holdRef.current), []);

  useEffect(() => {
    const onKey = (e) => {
      if (esMobile) return;
      const key = e.key;

      if (key === 'Escape') {
        if (modalAbierto) {
          setModalAbierto(false);
          sounds.back();
        } else if (vistaInfo) {
          setVistaInfo(false);
          sounds.back();
        }
        return;
      }

      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        e.preventDefault();
        const map = {
          ArrowUp: 'arriba',
          ArrowDown: 'abajo',
          ArrowLeft: 'izquierda',
          ArrowRight: 'derecha',
        };
        manejarNavegacion(map[key]);
      }

      if (key === 'Enter' || key.toLowerCase() === 'a') {
        if (estado === 'bienvenida') {
          setEstado('menu');
          sounds.confirm();
        } else if (estado === 'menu' && !vistaInfo && !modalAbierto) {
          setVistaInfo(true);
          sounds.confirm();
        }
      }

      if (key.toLowerCase() === 'b' || key === 'Backspace') {
        if (modalAbierto) {
          setModalAbierto(false);
          sounds.back();
        } else if (vistaInfo) {
          setVistaInfo(false);
          sounds.back();
        } else if (estado === 'menu') {
          setEstado('bienvenida');
          sounds.back();
        }
      }

      if (key.toLowerCase() === 'y' && estado === 'menu') {
        setModalAbierto(true);
        sounds.open();
      }

      if (key.toLowerCase() === 'x') {
        window.open('https://github.com/SebasYe05', '_blank', 'noopener,noreferrer');
        sounds.open();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [estado, vistaInfo, modalAbierto, esMobile, manejarNavegacion]);

  const manejarPower = () => {
    if (estado === 'apagada') {
      sounds.powerOn();
      setEstado('encendida');
      setTimeout(() => setEstado('bienvenida'), 1500);
    } else {
      sounds.powerOff();
      setEstado('apagada');
      setVistaInfo(false);
      setScrollInfo(null);
      setModalAbierto(false);
    }
  };

  const manejarA = () => {
    if (modalAbierto) return;
    if (estado === 'bienvenida') {
      setEstado('menu');
      sounds.confirm();
    } else if (estado === 'menu' && !vistaInfo) {
      setVistaInfo(true);
      sounds.confirm();
    }
  };

  const manejarB = () => {
    if (modalAbierto) {
      setModalAbierto(false);
      sounds.back();
      return;
    }
    if (vistaInfo) {
      setVistaInfo(false);
      setScrollInfo(null);
      sounds.back();
    } else if (estado === 'menu') {
      setEstado('bienvenida');
      sounds.back();
    }
  };

  const manejarY = () => {
    if (estado !== 'menu') return;
    setModalAbierto(true);
    sounds.open();
  };

  const manejarX = () => {
    window.open('https://github.com/SebasYe05', '_blank', 'noopener,noreferrer');
    sounds.open();
    setToast('Abriendo GitHub…');
  };

  const manejarStart = () => {
    const nowMuted = toggleMute();
    setMuted(nowMuted);
    setToast(nowMuted ? 'Sonido desactivado' : 'Sonido activado');
  };

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 gap-4">
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
            iniciarHold={iniciarHold}
            detenerHold={detenerHold}
          />
          <PantallaInferior
            estado={estado}
            appSeleccionada={appSeleccionada}
            setAppSeleccionada={(i) => {
              setAppSeleccionada(i);
              sounds.move();
            }}
            alTocarPantalla={setEstado}
            vistaInfo={vistaInfo}
          />
          <ParteDerecha
            manejarA={manejarA}
            manejarB={manejarB}
            manejarX={manejarX}
            manejarY={manejarY}
            manejarStart={manejarStart}
            modalAbierto={modalAbierto}
            muted={muted}
          />
        </div>
      </div>

      {/* Leyenda de controles */}
      <div className="w-full max-w-[600px] bg-white border border-gray-200 rounded-2xl shadow-sm px-5 py-3">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Controles</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-[11px] text-gray-600">
          <div><span className="font-bold text-zinc-800">A</span> — Entrar / confirmar</div>
          <div><span className="font-bold text-zinc-800">B</span> — Volver / cerrar</div>
          <div><span className="font-bold text-zinc-800">Y</span> — Vista completa (modal)</div>
          <div><span className="font-bold text-zinc-800">X</span> — Abrir GitHub</div>
          <div><span className="font-bold text-zinc-800">↑↓←→</span> — Navegar / scroll</div>
          <div><span className="font-bold text-zinc-800">START</span> — Sonido on/off</div>
          <div><span className="font-bold text-zinc-800">POWER</span> — Encender / apagar</div>
          <div className="sm:col-span-2"><span className="font-bold text-zinc-800">Teclado</span> — Flechas, A/B/Y/X, Enter, Esc</div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium shadow-xl animate-fade-in flex items-center gap-2">
          {muted ? <FaVolumeMute size={14} /> : null}
          {!muted && toast.includes('activado') ? <FaVolumeUp size={14} /> : null}
          {toast}
        </div>
      )}

      {modalAbierto && (
        <ModalInfo
          appIndex={appSeleccionada}
          onClose={() => {
            setModalAbierto(false);
            sounds.back();
          }}
        />
      )}
    </div>
  );
}

export default App;
