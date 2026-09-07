import { apps } from '../../data/apps';
import INFO_APPS from '../../data/info';
import { SOFT_SKILLS } from '../../data/soft_skills';
import { CERTIFICACIONES } from '../../data/certificaciones';
import { FaBrain, FaPuzzlePiece, FaUsers, FaLightbulb, FaGlobe, FaAward } from 'react-icons/fa';
import BloquesRenderer from './BloquesRenderer';

const PantallaInferior = ({ estado, appSeleccionada, setAppSeleccionada, alTocarPantalla, vistaInfo }) => {
  const appId = apps[appSeleccionada]?.id;
  const info = INFO_APPS[appId];

  return (
    <div
      onClick={() => estado === 'bienvenida' && alTocarPantalla('menu')}
      className={`relative h-full w-[60%] rounded-lg border-[10px] border-gray-800 shadow-inner overflow-hidden transition-colors duration-500 cursor-pointer ${
        estado === 'apagada' ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Bienvenida */}
      {estado === 'bienvenida' && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-black text-[10px] animate-pulse">Toque para continuar</p>
          <p className="text-gray-400 text-[7px] mt-2">O presiona A</p>
        </div>
      )}

      {/* Menú principal — grid uniforme 3+2 */}
      {estado === 'menu' && !vistaInfo && (
        <div className="flex flex-col h-full p-3 animate-fade-in">
          <div className="grid grid-cols-3 gap-2.5 mb-2.5">
            {apps.slice(0, 3).map((app, index) => {
              const Icono = app.icon;
              return (
                <div
                  key={app.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setAppSeleccionada(index);
                  }}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer
                    ${
                      appSeleccionada === index
                        ? `${app.color} text-white scale-105 shadow-md border-2 border-white outline outline-2 outline-blue-400`
                        : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200'
                    }`}
                >
                  <Icono size={22} />
                  <p className="text-[6px] mt-1 font-medium tracking-tight text-center leading-tight px-0.5">
                    {app.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Fila inferior: mismos tamaños que arriba, centrados */}
          <div className="grid grid-cols-3 gap-2.5">
            <div /> {/* spacer */}
            {apps.slice(3, 5).map((app, index) => {
              const Icono = app.icon;
              const realIndex = index + 3;
              return (
                <div
                  key={app.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setAppSeleccionada(realIndex);
                  }}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer
                    ${
                      appSeleccionada === realIndex
                        ? `${app.color} text-white scale-105 shadow-md border-2 border-white outline outline-2 outline-blue-400`
                        : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200'
                    }`}
                >
                  <Icono size={22} />
                  <p className="text-[6px] mt-1 font-medium tracking-tight text-center leading-tight px-0.5">
                    {app.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-auto text-center py-1.5 bg-zinc-100 rounded-full">
            <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-wider">
              {apps[appSeleccionada]?.name || 'Selecciona una app'}
            </p>
          </div>

          <div className="flex justify-between items-center mt-1.5 text-[7px] text-gray-400 px-1">
            <div className="flex items-center gap-2">
              <span>← ↑ ↓ →</span>
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

      {/* VistaInfo */}
      {estado === 'menu' && vistaInfo && (
        <div className="flex flex-col h-full p-2 animate-fade-in">
          {appId === 4 ? (
            <div className="flex-1 flex flex-col overflow-y-auto">
              <div>
                <h3 className="text-[9px] font-bold text-emerald-700 mb-3 flex items-center gap-1.5">
                  <FaLightbulb /> Habilidades Blandas
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {SOFT_SKILLS.map((skill, i) => {
                    const Icon = [FaBrain, FaPuzzlePiece, FaUsers, FaLightbulb, FaGlobe, FaAward][i];
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-3xl p-3 text-[8px] font-medium"
                      >
                        <Icon className="text-emerald-600 flex-shrink-0" size={14} />
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-[9px] font-bold text-purple-700 mb-3 flex items-center gap-1.5">
                  <FaAward /> Certificaciones
                </h3>
                {CERTIFICACIONES.map((cert, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-purple-50 border border-purple-200 rounded-3xl p-3 mb-2"
                  >
                    <FaAward className="text-purple-600 mt-px flex-shrink-0" size={16} />
                    <div className="text-[8px]">
                      <p className="font-semibold leading-tight">{cert.name}</p>
                      <p className="text-purple-600 mt-0.5">
                        {cert.provider} · {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              {info?.bloquesBottom?.length > 0 ? (
                <BloquesRenderer bloques={info.bloquesBottom} />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-[8px] text-center text-gray-500">
                    Info detallada en<br />pantalla superior
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-auto text-center py-1 bg-red-50 rounded-full">
            <p className="text-[8px] font-bold text-red-600">Presiona B para volver</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PantallaInferior;
