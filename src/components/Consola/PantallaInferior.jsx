import { apps } from '../../data/apps';

const PantallaInferior = ({ estado, appSeleccionada, setAppSeleccionada, alTocarPantalla, vistaInfo }) => {
  return (
    <div
      onClick={() => estado === 'bienvenida' && alTocarPantalla('menu')}
      className={`relative h-full w-[60%] rounded-lg border-[10px] border-gray-800 shadow-inner overflow-hidden transition-colors duration-500 cursor-pointer ${estado === 'apagada' ? 'bg-black' : 'bg-white'}`}
    >
      {estado === 'bienvenida' && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-black text-[10px] animate-pulse">Toque para continuar</p>
          <p className="text-gray-400 text-[7px] mt-2">O presiona A</p>
        </div>
      )}

      {estado === 'menu' && !vistaInfo && (
        <div className="flex flex-col h-full p-2 animate-fade-in">
          <div className="flex items-center gap-3 overflow-x-auto py-4 px-2 no-scrollbar">
            {apps.map((app, index) => {
              const Icono = app.icon;
              return (
                <div
                  key={app.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setAppSeleccionada(index);
                  }}
                  className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all 
                    ${appSeleccionada === index ? `${app.color} text-white scale-110 border-2 border-white outline outline-2 outline-blue-400` : 'bg-zinc-100 text-zinc-400'}`}
                >
                  <Icono size={24} />
                </div>
              );
            })}
          </div>

          <div className="mt-auto text-center py-1 bg-zinc-100 rounded-full">
            <p className="text-[9px] font-bold text-zinc-600 uppercase italic">
              {apps[appSeleccionada].name}
            </p>
          </div>

          {/* Hints de controles */}
          <div className="flex justify-between items-center mt-2 px-2 text-[7px] text-gray-400">
            <div className="flex items-center gap-2">
              <span>← →</span>
              <span className="text-gray-300">|</span>
              <span>Navegar</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">A</span>
              <span>Entrar</span>
            </div>
          </div>
        </div>
      )}

      {estado === 'menu' && vistaInfo && (
        <div className="flex flex-col h-full p-2 animate-fade-in">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[8px] text-center text-gray-500">
              Información detallada<br />
              en pantalla superior
            </p>
          </div>
          <div className="mt-auto text-center py-1 bg-red-50 rounded-full">
            <p className="text-[8px] font-bold text-red-600">
              Presiona B para volver
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PantallaInferior;