import { useState, useEffect } from 'react';
import { apps } from '../../data/apps';
import { FaGithub } from 'react-icons/fa';
import miFoto from '../../assets/yop.jpeg';

const PantallaSuperior = ({ estado, appSeleccionada, vistaInfo }) => {
  const [fecha, setFecha] = useState(new Date());
  const [bateria, setBateria] = useState(75);
  const [cargando, setCargando] = useState(false);

  // Información detallada de cada app
  const getInfoApp = () => {
    const app = apps[appSeleccionada];
    switch (app.id) {
      case 1: // Perfil
        return {
          titulo: "Sobre Mí",
          descripcion: "Desarrollador Junior apasionado por crear experiencias digitales únicas. Especializado en React y Tailwind CSS.",
          habilidades: ["React", "JavaScript", "Tailwind", "Node.js"]
        };
      case 2: // Proyectos
        return {
          titulo: "Mis Proyectos",
          descripcion: "Actualmente trabajando en varios proyectos interesantes incluyendo esta consola interactiva y aplicaciones web modernas.",
          proyectos: ["Consola Portafolio", "App de Tareas", "E-commerce"]
        };
      case 3: // Experiencia
        return {
          titulo: "Experiencia",
          descripcion: "2 años de experiencia en desarrollo web. He trabajado en proyectos freelance y personales.",
          empresas: ["Freelance", "Proyectos Personales", "Open Source"]
        };
      case 4: // Contacto
        return {
          titulo: "Contacto",
          descripcion: "¿Quieres contactarme? Puedes encontrarme en:",
          contacto: ["GitHub: @SebasYe05", "Email: sebas@example.com", "LinkedIn: Sebastian Sotomayor"]
        };
      default:
        return {
          titulo: app.name,
          descripcion: "Información no disponible",
        };
    }
  };

  // Simular consumo de batería
  useEffect(() => {
    const intervaloBateria = setInterval(() => {
      setBateria(prev => {
        if (prev <= 5) {
          setCargando(true);
          return prev + 1;
        }
        if (prev >= 95 && cargando) {
          setCargando(false);
          return prev - 0.5;
        }
        if (cargando) {
          return prev + 0.5;
        } else {
          return prev - 0.2;
        }
      });
    }, 3000);

    return () => clearInterval(intervaloBateria);
  }, [cargando]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatFecha = () => {
    const dias = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];

    return `${diaSemana} ${dia} ${mes}`;
  };

  const formatHora = () => {
    return fecha.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // Componente de batería solo con rayas (sin porcentaje)
  const BateriaConRayas = () => {
    const getColor = () => {
      if (bateria >= 80) return 'bg-green-500';
      if (bateria >= 60) return 'bg-green-400';
      if (bateria >= 40) return 'bg-yellow-500';
      if (bateria >= 20) return 'bg-orange-500';
      if (bateria >= 5) return 'bg-red-500';
      return 'bg-red-700';
    };

    return (
      <div className="flex items-center gap-1.5">
        {/* Contenedor de la batería */}
        <div className="relative">
          {/* Cuerpo de la batería */}
          <div className="w-7 h-3.5 border border-zinc-500 rounded-sm relative overflow-hidden bg-zinc-50">
            {/* Nivel de batería con animación */}
            <div
              className={`h-full ${getColor()} transition-all duration-700 ease-out rounded-sm`}
              style={{ width: `${Math.min(100, Math.max(0, bateria))}%` }}
            />
          </div>
          {/* Piquito de la batería */}
          <div className="absolute -right-[4px] top-[3px] w-[4px] h-[8px] bg-zinc-500 rounded-r-sm" />
        </div>

        {/* Icono de carga (solo visible cuando está cargando) */}
        {cargando && (
          <div className="flex items-center gap-0.5">
            <span className="text-[9px] text-green-600 animate-pulse font-bold">⚡</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`relative h-64 w-[65%] rounded-lg border-[10px] border-gray-800 shadow-inner overflow-hidden flex flex-col transition-colors duration-500 ${estado === 'apagada' ? 'bg-black' : 'bg-white'}`}>

      {/* Barra superior con info */}
      {estado === 'menu' && !vistaInfo && (
        <div className="flex justify-between items-center px-4 py-2.5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
          {/* Usuario GitHub */}
          <div className="flex items-center gap-1.5">
            <FaGithub className="w-3 h-3 text-gray-700" />
            <span className="text-[9px] font-mono font-bold text-gray-700 tracking-tight">
              SebasYe05
            </span>
          </div>

          {/* Fecha, hora y batería */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-medium text-gray-600 tracking-wide">
              {formatFecha()}
            </span>
            <div className="w-px h-3 bg-gray-300" />
            <span className="text-[10px] font-bold text-gray-800 font-mono">
              {formatHora()}
            </span>
            <div className="w-px h-3 bg-gray-300" />
            <BateriaConRayas />
          </div>
        </div>
      )}

      {/* Contenido principal centrado */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto">
        {estado === 'bienvenida' && (
          <div className="text-center animate-fade-in">
            <p className="text-zinc-800 text-[10px] px-4">Bienvenido a mi portafolio,</p>
            <p className="text-zinc-800 text-[10px] font-bold">Sebastian Sotomayor :D</p>
          </div>
        )}

        {estado === 'menu' && !vistaInfo && (
          <div className="text-center p-4 animate-fade-in">
            {/* Si es la app de Perfil (id 1 o índice 0), mostrar foto tipo cartucho */}
            {apps[appSeleccionada].id === 1 ? (
              <div className="relative flex justify-center mb-4">
                <div className="animate-float">
                  {/* Contenedor Principal: Color 'Hueso/Zinc' más fuerte y bordes más definidos */}
                  <div className="relative p-1.5 bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-400 rounded-lg shadow-[0_12px_24px_rgba(0,0,0,0.3)] border border-zinc-500/40">

                    {/* Bisel Interior: Contraste para resaltar el marco de la foto */}
                    <div className="p-0.5 bg-zinc-100 rounded-md shadow-inner">

                      {/* Contenedor de la imagen */}
                      <div className="relative overflow-hidden rounded-md bg-zinc-800">
                        <img
                          src={miFoto}
                          alt="Sebastian Sotomayor"
                          className="w-24 h-24 object-cover rounded-md"
                        />

                      </div>
                    </div>

                    {/* Detalle decorativo superior (Muesca de cartucho) */}
                    <div className="absolute top-1.5 right-3 w-3 h-1 bg-black/10 rounded-full"></div>

                    {/* Etiqueta inferior: Ahora con margen (mt-3) y más volumen */}
                  </div>
                </div>
              </div>
            ) : (
              /* Para las demás apps, mostrar el icono normal */
              <div className={`w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center text-white ${apps[appSeleccionada].color}`}>
                {(() => {
                  const Icono = apps[appSeleccionada].icon;
                  return <Icono size={32} />;
                })()}
              </div>
            )}

            <h2 className="text-sm font-bold text-zinc-800">{apps[appSeleccionada].name}</h2>
            <p className="text-[9px] text-zinc-500 italic">
              {apps[appSeleccionada].id === 1 ? "Junior Developer" : "Proyecto en desarrollo..."}
            </p>
          </div>
        )}

        {estado === 'menu' && vistaInfo && (
          <div className="w-full p-4 animate-fade-in">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <h3 className="text-xs font-bold text-blue-800 mb-2">{getInfoApp().titulo}</h3>
              <p className="text-[9px] text-gray-700 mb-3">{getInfoApp().descripcion}</p>

              {getInfoApp().habilidades && (
                <div className="mb-2">
                  <p className="text-[8px] font-bold text-gray-600 mb-1">Habilidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {getInfoApp().habilidades.map((h, i) => (
                      <span key={i} className="text-[7px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {getInfoApp().proyectos && (
                <div className="mb-2">
                  <p className="text-[8px] font-bold text-gray-600 mb-1">Proyectos destacados:</p>
                  <ul className="text-[8px] text-gray-700 list-disc list-inside">
                    {getInfoApp().proyectos.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}

              {getInfoApp().empresas && (
                <div className="mb-2">
                  <p className="text-[8px] font-bold text-gray-600 mb-1">Experiencia en:</p>
                  <ul className="text-[8px] text-gray-700 list-disc list-inside">
                    {getInfoApp().empresas.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}

              {getInfoApp().contacto && (
                <div className="mb-2">
                  <ul className="text-[8px] text-gray-700 space-y-1">
                    {getInfoApp().contacto.map((c, i) => (
                      <li key={i} className="font-mono">{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-3 pt-2 border-t border-blue-200 text-center">
                <span className="text-[7px] text-red-500">Presiona B para volver</span>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default PantallaSuperior;