import { useState, useEffect } from 'react';

const BateriaConRayas = ({ bateriaInicial = 75 }) => {
  const [bateria, setBateria] = useState(bateriaInicial);
  const [cargando, setCargando] = useState(false);

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
        return cargando ? prev + 0.5 : prev - 0.2;
      });
    }, 3000);
    return () => clearInterval(intervaloBateria);
  }, [cargando]);

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
      <div className="relative">
        <div className="w-7 h-3.5 border border-zinc-500 rounded-sm relative overflow-hidden bg-zinc-50">
          <div
            className={`h-full ${getColor()} transition-all duration-700 ease-out rounded-sm`}
            style={{ width: `${Math.min(100, Math.max(0, bateria))}%` }}
          />
        </div>
        <div className="absolute -right-[4px] top-[3px] w-[4px] h-[8px] bg-zinc-500 rounded-r-sm" />
      </div>
      {cargando && <span className="text-[9px] text-green-600 animate-pulse font-bold">⚡</span>}
    </div>
  );
};

export default BateriaConRayas;