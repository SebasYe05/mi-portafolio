import {
  FaGraduationCap, FaAward, FaTrophy, FaFileInvoice, FaBoxes, FaEnvelope,
  FaCogs, FaMobileAlt, FaMapMarkedAlt, FaPlug, FaPaintBrush, FaCamera,
  FaMotorcycle, FaGamepad, FaShoppingCart, FaFileInvoiceDollar, FaRoute,
  FaMapMarkerAlt, FaLinkedin, FaGithub,
} from 'react-icons/fa';

const ICONS = {
  FaGraduationCap, FaAward, FaTrophy, FaFileInvoice, FaBoxes, FaEnvelope,
  FaCogs, FaMobileAlt, FaMapMarkedAlt, FaPlug, FaPaintBrush, FaCamera,
  FaMotorcycle, FaGamepad, FaShoppingCart, FaFileInvoiceDollar, FaRoute,
  FaMapMarkerAlt, FaLinkedin, FaGithub,
};

const Icon = ({ name, className = '', size = 12 }) => {
  const Comp = ICONS[name];
  if (!Comp) return null;
  return <Comp className={className} size={size} />;
};

const BloquesRenderer = ({ bloques, size = 'sm' }) => {
  if (!bloques?.length) return null;

  const isLg = size === 'lg';

  return (
    <>
      {bloques.map((bloque, i) => {
        switch (bloque.tipo) {
          case 'texto':
            return (
              <p
                key={i}
                className={`${isLg ? 'text-sm leading-relaxed mb-3' : 'text-[9px] leading-relaxed mb-2'} text-gray-700`}
              >
                {bloque.contenido}
              </p>
            );

          case 'subtitulo':
            return (
              <p
                key={i}
                className={`${isLg ? 'text-sm mt-4 mb-2' : 'text-[9px] mt-2 mb-1'} font-bold text-gray-600 flex items-center gap-1.5`}
              >
                {bloque.icon && (
                  <Icon name={bloque.icon} size={isLg ? 14 : 11} className="text-blue-500" />
                )}
                {bloque.contenido}
              </p>
            );

          case 'lista':
            return (
              <ul key={i} className={`${isLg ? 'mb-3 space-y-1.5' : 'mb-2 space-y-1'}`}>
                {bloque.items.map((item, j) => (
                  <li
                    key={j}
                    className={`${isLg ? 'text-sm' : 'text-[8px]'} text-gray-700 flex gap-1.5`}
                  >
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'empresa':
            return (
              <div
                key={i}
                className={`bg-purple-50 rounded-lg border border-purple-100 ${isLg ? 'p-4 mb-3' : 'p-2 mb-2'}`}
              >
                <p className={`${isLg ? 'text-base' : 'text-[10px]'} font-bold text-purple-900`}>
                  {bloque.cargo}
                </p>
                <p className={`${isLg ? 'text-sm' : 'text-[9px]'} text-purple-700`}>{bloque.nombre}</p>
                <span
                  className={`${isLg ? 'text-xs' : 'text-[8px]'} bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full mt-1 inline-block`}
                >
                  {bloque.periodo}
                </span>
              </div>
            );

          case 'logros':
            return (
              <div key={i} className={`${isLg ? 'space-y-3 mb-3' : 'space-y-1.5 mb-2'}`}>
                {bloque.items.map((logro, j) => (
                  <div key={j} className="flex gap-2.5 items-start">
                    <Icon
                      name={logro.icon}
                      size={isLg ? 16 : 12}
                      className="text-purple-500 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className={`${isLg ? 'text-sm' : 'text-[9px]'} font-semibold text-gray-800`}>
                        {logro.titulo}
                      </p>
                      <p className={`${isLg ? 'text-xs' : 'text-[8px]'} text-gray-500`}>{logro.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case 'proyectos':
            return (
              <div key={i} className={`${isLg ? 'space-y-3 mb-3' : 'space-y-2 mb-2'}`}>
                {bloque.items.map((p, j) => (
                  <div
                    key={j}
                    className={`bg-gray-50 rounded-lg border-l-2 border-green-400 ${isLg ? 'p-3' : 'p-2'}`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Icon name={p.icon} size={isLg ? 14 : 12} className="text-green-600 flex-shrink-0" />
                      <p className={`${isLg ? 'text-sm' : 'text-[9px]'} font-bold text-gray-800`}>
                        {p.nombre}
                      </p>
                    </div>
                    <p className={`${isLg ? 'text-xs' : 'text-[8px]'} text-green-700 font-medium mb-0.5`}>
                      {p.tech}
                    </p>
                    <p className={`${isLg ? 'text-xs' : 'text-[8px]'} text-gray-600 leading-snug`}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            );

          case 'contacto':
            return (
              <div key={i} className={`${isLg ? 'space-y-2 mb-3' : 'space-y-1.5 mb-2'}`}>
                {bloque.items.map((c, j) => (
                  <div
                    key={j}
                    className={`flex items-center gap-2 bg-gray-50 rounded-lg ${isLg ? 'px-3 py-2.5' : 'px-2 py-1.5'}`}
                  >
                    <Icon name={c.icon} size={isLg ? 16 : 13} className="text-orange-500 flex-shrink-0" />
                    <div>
                      <p className={`${isLg ? 'text-xs' : 'text-[7px]'} text-gray-400`}>{c.label}</p>
                      <p className={`${isLg ? 'text-sm' : 'text-[9px]'} font-medium text-gray-800 font-mono`}>
                        {c.valor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default BloquesRenderer;
