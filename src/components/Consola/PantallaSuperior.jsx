import { useState, useEffect, useRef } from 'react';
import { apps } from '../../data/apps';
import INFO_APPS from '../../data/info';
import { SKILLS } from '../../data/skills';
import { iconMap } from '../../data/icons';
import { FaGithub } from 'react-icons/fa';
import miFoto from '../../assets/yop.jpeg';
import BateriaConRayas from './BateriaConRayas';
import BloquesRenderer from './BloquesRenderer';

import {
  SiNodedotjs, SiSpringboot, SiPhp, SiExpress,
  SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiBootstrap,
  SiMongodb, SiMysql, SiGit, SiDocker, SiGithub, SiSwagger,
  SiSelenium, SiJira, SiDotnet, SiLeaflet,
} from 'react-icons/si';
import { FaDatabase, FaMapMarkedAlt, FaChartBar } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandXamarin } from 'react-icons/tb';
import { FaCss, FaJava } from 'react-icons/fa6';

const iconComponents = {
  FaJava, TbBrandCSharp, TbBrandXamarin, SiNodedotjs, SiSpringboot, SiPhp, SiExpress,
  SiReact, SiJavascript, SiHtml5, FaCss, SiTailwindcss, SiBootstrap,
  SiMongodb, SiMysql, SiGit, SiDocker, SiGithub, SiSwagger,
  SiSelenium, SiJira, SiDotnet, SiLeaflet,
  FaDatabase, FaMapMarkedAlt, FaChartBar,
};

const ContenidoInfo = ({ appId }) => {
  const info = INFO_APPS[appId];
  if (!info) return null;

  // Skills: Hard Skills en pantalla superior
  if (appId === 4) {
    return (
      <div className="w-full p-3 animate-fade-in">
        <h3 className="text-[11px] font-bold text-blue-800 mb-4 border-b border-blue-200 pb-1 flex items-center gap-2">
          {info.titulo} <span className="text-xs font-normal text-gray-500">(Hard Skills)</span>
        </h3>

        <div className="space-y-7">
          {Object.entries(SKILLS).map(([categoria, skillsArr]) => (
            <div key={categoria}>
              <p className="text-[8px] font-semibold text-zinc-400 mb-3 border-b pb-1 uppercase tracking-widest">
                {categoria}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {skillsArr.map((skill) => {
                  const IconKey = iconMap[skill.name];
                  const IconComponent = iconComponents[IconKey];
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center bg-white border border-gray-100 hover:border-gray-300 rounded-3xl p-3 shadow-sm active:scale-95 transition-all duration-200"
                    >
                      <div
                        className="w-9 h-9 flex items-center justify-center text-4xl mb-2 transition-transform group-active:scale-110"
                        style={{ color: skill.color }}
                      >
                        {IconComponent ? <IconComponent /> : null}
                      </div>
                      <span className="text-[9px] font-medium text-center text-gray-800 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-[7px] text-blue-400 italic">
          Soft skills y certificaciones en pantalla inferior
        </div>
      </div>
    );
  }

  // Resto de apps: solo bloquesTop en pantalla superior
  return (
    <div className="w-full p-3 animate-fade-in">
      <h3 className="text-[11px] font-bold text-blue-800 mb-2 border-b border-blue-200 pb-1">
        {info.titulo}
      </h3>
      <BloquesRenderer bloques={info.bloquesTop || []} />
      {(info.bloquesBottom?.length > 0) && (
        <div className="mt-2 pt-2 border-t border-gray-200 text-center">
          <span className="text-[7px] text-blue-400">Continúa en pantalla inferior · B para volver</span>
        </div>
      )}
    </div>
  );
};

const PantallaSuperior = ({ estado, appSeleccionada, vistaInfo, scrollInfo }) => {
  const [fecha, setFecha] = useState(new Date());
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    if (scrollInfo === 'arriba') {
      scrollRef.current.scrollBy({ top: -40, behavior: 'smooth' });
    } else if (scrollInfo === 'abajo') {
      scrollRef.current.scrollBy({ top: 40, behavior: 'smooth' });
    }
  }, [scrollInfo]);

  useEffect(() => {
    const timer = setInterval(() => setFecha(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatFecha = () => {
    const dias = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    return `${dias[fecha.getDay()]} ${fecha.getDate()} ${meses[fecha.getMonth()]}`;
  };

  const formatHora = () =>
    fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div
      className={`relative h-64 w-[65%] rounded-lg border-[10px] border-gray-800 shadow-inner overflow-hidden flex flex-col transition-colors duration-500 ${
        estado === 'apagada' ? 'bg-black' : 'bg-white'
      }`}
    >
      {estado === 'menu' && (
        <div className="flex justify-between items-center px-4 py-2.5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <FaGithub className="w-3 h-3 text-gray-700" />
            <span className="text-[9px] font-mono font-bold text-gray-700 tracking-tight">SebasYe05</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-medium text-gray-600 tracking-wide">{formatFecha()}</span>
            <div className="w-px h-3 bg-gray-300" />
            <span className="text-[10px] font-bold text-gray-800 font-mono">{formatHora()}</span>
            <div className="w-px h-3 bg-gray-300" />
            <BateriaConRayas />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        {estado === 'bienvenida' && (
          <div className="text-center animate-fade-in">
            <p className="text-zinc-800 text-[10px] px-4">Bienvenido a mi portafolio,</p>
            <p className="text-zinc-800 text-[10px] font-bold">Sebastian Sotomayor :D</p>
          </div>
        )}

        {estado === 'menu' && !vistaInfo && (
          <div className="text-center p-4 animate-fade-in">
            {apps[appSeleccionada].id === 1 ? (
              <div className="relative flex justify-center mb-4">
                <div className="animate-float">
                  <div className="relative p-1.5 bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-400 rounded-lg shadow-[0_12px_24px_rgba(0,0,0,0.3)] border border-zinc-500/40">
                    <div className="p-0.5 bg-zinc-100 rounded-md shadow-inner">
                      <div className="relative overflow-hidden rounded-md bg-zinc-800">
                        <img src={miFoto} alt="Sebastian Sotomayor" className="w-24 h-24 object-cover rounded-md" />
                      </div>
                    </div>
                    <div className="absolute top-1.5 right-3 w-3 h-1 bg-black/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center text-white ${apps[appSeleccionada].color}`}>
                {(() => {
                  const Icono = apps[appSeleccionada].icon;
                  return <Icono size={32} />;
                })()}
              </div>
            )}
            <h2 className="text-sm font-bold text-zinc-800">{apps[appSeleccionada].name}</h2>
            <p className="text-[9px] text-zinc-500 italic mt-0.5">
              {apps[appSeleccionada].id === 1 ? 'Junior Developer · Bogotá, Colombia' : 'Presiona A para más info'}
            </p>
            <div className="flex gap-2 justify-center mt-2">
              <span className="text-[7px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full">A → Ver detalles</span>
            </div>
          </div>
        )}

        {estado === 'menu' && vistaInfo && (
          <div ref={scrollRef} className="w-full h-full overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
            <ContenidoInfo appId={apps[appSeleccionada].id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PantallaSuperior;
