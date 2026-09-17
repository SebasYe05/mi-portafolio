import { useEffect } from 'react';
import { apps } from '../../data/apps';
import INFO_APPS from '../../data/info';
import { SKILLS } from '../../data/skills';
import { SOFT_SKILLS } from '../../data/soft_skills';
import { CERTIFICACIONES } from '../../data/certificaciones';
import { iconMap } from '../../data/icons';
import BloquesRenderer from './BloquesRenderer';
import { FaTimes, FaBrain, FaPuzzlePiece, FaUsers, FaLightbulb, FaGlobe, FaAward } from 'react-icons/fa';
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

const ModalInfo = ({ appIndex, onClose }) => {
  const app = apps[appIndex];
  const info = INFO_APPS[app?.id];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!app || !info) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 ${app.color} text-white`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              {(() => {
                const Icono = app.icon;
                return <Icono size={22} />;
              })()}
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">{info.titulo}</h2>
              <p className="text-xs text-white/80">Vista completa · Esc o X para cerrar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto console-scroll p-6 space-y-5">
          {app.id === 4 ? (
            <>
              <section>
                <h3 className="text-sm font-bold text-blue-800 mb-3 border-b border-blue-100 pb-1">
                  Hard Skills
                </h3>
                <div className="space-y-5">
                  {Object.entries(SKILLS).map(([categoria, skillsArr]) => (
                    <div key={categoria}>
                      <p className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-widest">
                        {categoria}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {skillsArr.map((skill) => {
                          const IconKey = iconMap[skill.name];
                          const IconComponent = iconComponents[IconKey];
                          return (
                            <div
                              key={skill.name}
                              className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl p-3"
                            >
                              <div
                                className="w-10 h-10 flex items-center justify-center text-3xl mb-1"
                                style={{ color: skill.color }}
                              >
                                {IconComponent ? <IconComponent /> : null}
                              </div>
                              <span className="text-xs font-medium text-center text-gray-800">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  <FaLightbulb /> Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {SOFT_SKILLS.map((skill, i) => {
                    const SoftIcon = [FaBrain, FaPuzzlePiece, FaUsers, FaLightbulb, FaGlobe, FaAward][i];
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-sm"
                      >
                        <SoftIcon className="text-emerald-600 flex-shrink-0" size={16} />
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <FaAward /> Certificaciones
                </h3>
                <div className="space-y-2">
                  {CERTIFICACIONES.map((cert, i) => (
                    <div
                      key={i}
                      className="flex gap-3 bg-purple-50 border border-purple-200 rounded-xl p-3"
                    >
                      <FaAward className="text-purple-600 mt-0.5 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-sm font-semibold">{cert.name}</p>
                        <p className="text-xs text-purple-600">
                          {cert.provider} · {cert.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <div className="modal-content space-y-1">
              <BloquesRenderer bloques={[...(info.bloquesTop || []), ...(info.bloquesBottom || [])]} size="lg" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex justify-between items-center text-xs text-gray-500">
          <span>Botón Y · Vista ampliada</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-zinc-800 text-white text-xs font-medium hover:bg-zinc-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
