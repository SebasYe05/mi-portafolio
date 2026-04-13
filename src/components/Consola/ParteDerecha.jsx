const ParteDerecha = ({ manejarA, manejarB }) => {

  return (
    <div className="flex flex-col items-center justify-between h-full py-4 w-24">
      {/* Botones A, B, X, Y */}
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 cursor-pointer select-none">
          X
        </div>
        <div
          onClick={manejarA}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 cursor-pointer select-none transition-colors"
        >
          A
        </div>
        <div
          onClick={manejarB}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 cursor-pointer select-none transition-colors"
        >
          B
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 cursor-pointer select-none">
          Y
        </div>
      </div>

      {/* Botones START y SELECT */}
      <div className="flex flex-col gap-2 w-full items-end pr-2 mt-auto">
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-white font-bold opacity-70 uppercase">
            Start
          </span>
          <div className="w-8 h-2.5 bg-zinc-900 rounded-full shadow-sm border border-zinc-800 active:bg-zinc-700 cursor-pointer"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-white font-bold opacity-70 uppercase">
            Select
          </span>
          <div className="w-8 h-2.5 bg-zinc-900 rounded-full shadow-sm border border-zinc-800 active:bg-zinc-700 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default ParteDerecha;
