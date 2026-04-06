const ParteIzquierda = ({ manejarPower, estado, manejarNavegacion }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full py-4 w-24">
      {/* Cruceta (D-PAD) */}
      <div className="relative w-24 h-24 flex items-center justify-center select-none">
        {/* PIEZA HORIZONTAL */}
        <div className="absolute w-20 h-7 bg-zinc-900 rounded-sm shadow-md border-b-2 border-black/50 flex justify-between px-1">
          <div 
            onClick={() => manejarNavegacion('izquierda')}
            className="w-8 h-full flex items-center justify-start cursor-pointer transition-all active:scale-95 active:translate-x-[-2px]"
          >
            <div className="w-1.5 h-[2px] bg-white opacity-40 rounded-full ml-1"></div>
          </div>
          <div 
            onClick={() => manejarNavegacion('derecha')}
            className="w-8 h-full flex items-center justify-end cursor-pointer transition-all active:scale-95 active:translate-x-[2px]"
          >
            <div className="w-1.5 h-[2px] bg-white opacity-40 rounded-full mr-1"></div>
          </div>
        </div>

        {/* PIEZA VERTICAL */}
        <div className="absolute w-7 h-20 bg-zinc-900 rounded-sm shadow-md border-r-2 border-black/50 flex flex-col justify-between py-1">
          <div 
            onClick={() => manejarNavegacion('arriba')}
            className="w-full h-8 flex flex-col items-center justify-start cursor-pointer transition-all active:scale-95 active:translate-y-[-2px]"
          >
            <div className="w-[2px] h-1.5 bg-white opacity-40 rounded-full mt-1"></div>
          </div>
          <div 
            onClick={() => manejarNavegacion('abajo')}
            className="w-full h-8 flex flex-col items-center justify-end cursor-pointer transition-all active:scale-95 active:translate-y-[2px]"
          >
            <div className="w-[2px] h-1.5 bg-white opacity-40 rounded-full mb-1"></div>
          </div>
        </div>
        <div className="absolute w-6 h-6 bg-zinc-900 rounded-full border border-zinc-800 shadow-inner z-10"></div>
      </div>

      {/* Botón POWER */}
      <div className="flex flex-col items-center gap-1 mt-auto">
        <button
          onClick={manejarPower}
          className={`w-10 h-10 rounded-full border-2 border-black shadow-md active:scale-95 flex items-center justify-center transition-all bg-black`}
        >
          <div className="relative w-4 h-4 border-2 border-white border-t-transparent rounded-full flex items-center justify-center">
            <div className="absolute -top-1 w-0.5 h-2.5 bg-white"></div>
          </div>
        </button>
        <span className="text-[9px] text-white font-bold tracking-tighter opacity-80 uppercase">Power</span>
      </div>
    </div>
  );
};

export default ParteIzquierda;