import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'

function App() {

  const [estado, setEstado] = useState('apagada')

  const cambiarEstado = () => {
    if (estado === 'apagada') {
      setEstado('encendida')

      // Simular carga de 1 segundo
      setTimeout(() => setEstado('bienvenida'), 1500);
    } else {
      setEstado('apagada')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      {/* Cuerpo consola */}
      <div className="w-full max-w-[600px] bg-blue-500 font-mono p-5 rounded-[30px] shadow-lg overflow-hidden">

        {/* PARTE SUPERIOR */}
        <div className="relative flex items-center justify-center h-64 mb-4">

          {/* ALTAVOZ IZQUIERDO */}
          <div className="absolute left-6 grid grid-cols-2 gap-1.5 opacity-60">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"
              ></div>
            ))}
          </div>

          {/* PANTALLA SUPERIOR */}
          <div className={`relative h-64 w-[65%] rounded-lg border-[10px] border-gray-800 shadow-inner overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 ${estado === 'apagada' ? 'bg-black' : 'bg-white'}`}>
            {estado === 'bienvenida' && (
              <div className="text-center animate-fade-in">
                <p className="text-zinc-800 text-[10px] px-4">Bienvenido a mi portafolio,</p>
                <p className="text-zinc-800 text-[10px] font-bold">hecho por Sebastian Sotomayor :D</p>
              </div>
            )}
          </div>

          {/* ALTAVOZ DERECHO */}
          <div className="absolute right-6 grid grid-cols-2 gap-1.5 opacity-60">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"
              ></div>
            ))}
          </div>

        </div>

        {/* BISAGRA*/}
        <div className="bg-blue-700 h-8 -mx-5 mb-6 shadow-inner flex items-center justify-between px-16 relative">

          {/* Línea de eje izquierda */}
          <div className="w-1.5 h-full bg-black/20 rounded-full shadow-sm"></div>

          {/* CÁMARA INTERIOR */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Lente de la cámara */}
            <div className="w-3.5 h-3.5 bg-black rounded-full border border-zinc-700 flex items-center justify-center">
              <div className="w-1 h-1 bg-blue-900 rounded-full opacity-60 blur-[0.5px]"></div>
            </div>
          </div>

          {/* Línea de eje derecha */}
          <div className="w-1.5 h-full bg-black/20 rounded-full shadow-sm"></div>

          { /* Detalle de microfono */}
          <div className="absolute right-[40%] top-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full opacity-40"></div>
        </div>

        {/* PARTE INFERIOR (CONTROLES + PANTALLA) */}
        <div className="flex items-center justify-between px-2 h-64">

          {/* LADO IZQUIERDO */}
          <div className="flex flex-col items-center justify-between h-full py-4 w-24">

            {/* cruceta (D-PAD)*/}
            <div className="relative w-24 h-24 flex items-center justify-center select-none">

              {/* PIEZA HORIZONTAL */}
              <div className="absolute w-20 h-7 bg-zinc-900 rounded-sm shadow-md border-b-2 border-black/50 flex justify-between px-1">

                {/* IZQUIERDA */}
                <div className="w-8 h-full flex items-center justify-start cursor-pointer transition-all active:scale-90 active:translate-x-[-2px]">
                  <div className="w-1.5 h-[2px] bg-white opacity-40 rounded-full ml-1"></div>
                </div>

                {/* DERECHA */}
                <div className="w-8 h-full flex items-center justify-end cursor-pointer transition-all active:scale-90 active:translate-x-[2px]">
                  <div className="w-1.5 h-[2px] bg-white opacity-40 rounded-full mr-1"></div>
                </div>
              </div>

              {/* PIEZA VERTICAL */}
              <div className="absolute w-7 h-20 bg-zinc-900 rounded-sm shadow-md border-r-2 border-black/50 flex flex-col justify-between py-1">

                {/* ARRIBA */}
                <div className="w-full h-8 flex flex-col items-center justify-start cursor-pointer transition-all active:scale-90 active:translate-y-[-2px]">
                  <div className="w-[2px] h-1.5 bg-white opacity-40 rounded-full mt-1"></div>
                </div>

                {/* ABAJO */}
                <div className="w-full h-8 flex flex-col items-center justify-end cursor-pointer transition-all active:scale-90 active:translate-y-[2px]">
                  <div className="w-[2px] h-1.5 bg-white opacity-40 rounded-full mb-1"></div>
                </div>
              </div>

              {/* CÍRCULO CENTRAL */}
              <div className="absolute w-6 h-6 bg-zinc-900 rounded-full border border-zinc-800 shadow-inner z-10"></div>
            </div>

            {/* boton power (Abajo de la cruceta) */}
            <div className="flex flex-col items-center gap-1 mt-auto">
              <button className="w-10 h-10 bg-zinc-800 rounded-full border-2 border-zinc-900 shadow-md active:scale-90 active:shadow-inner flex items-center justify-center group transition-all"
                onClick={cambiarEstado}
              >
                {/* Icono */}
                <div className="relative w-4 h-4 border-2 border-white border-t-transparent rounded-full flex items-center justify-center">
                  <div className="absolute -top-1 w-0.5 h-2.5 bg-white"></div>
                </div>

              </button>
              <span className="text-[9px] text-white font-bold tracking-tighter opacity-80">POWER</span>
            </div>

          </div>

          {/* CENTRO: Pantalla inferior */}
          <div
            onClick={() => estado === 'bienvenida' && cambiarEstado('menu')}
            className={`relative h-full w-[60%] rounded-lg border-[10px] border-gray-800 shadow-inner overflow-hidden flex items-center justify-center transition-colors duration-500 cursor-pointer ${estado === 'apagada' ? 'bg-black' : 'bg-white'}`}
          >
            {estado === 'bienvenida' && (
              <p className="text-zinc-400 text-[10px] animate-pulse">
                Toque para continuar
              </p>
            )}
          </div>

          {/* LADO DERECHO */}
          <div className="flex flex-col items-center justify-between h-full py-4 w-24">

            {/* Botones A,B,X,Y */}
            <div className="relative w-24 h-24">
              {/* Botón X (Arriba) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 transition-all cursor-pointer select-none">X</div>

              {/* Botón A (Derecha) */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 transition-all cursor-pointer select-none text-center">A</div>

              {/* Botón B (Abajo) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 transition-all cursor-pointer select-none">B</div>

              {/* Botón Y (Izquierda) */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-md flex items-center justify-center text-white text-[10px] font-bold border border-zinc-800 active:scale-90 transition-all cursor-pointer select-none text-center">Y</div>
            </div>

            {/* Botones START y SELECT */}
            <div className="flex flex-col gap-2 w-full items-end pr-2 mt-auto">
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-white font-bold opacity-70">START</span>
                <div className="w-8 h-2.5 bg-zinc-900 rounded-full shadow-sm border border-zinc-800 active:bg-zinc-700 cursor-pointer"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-white font-bold opacity-70">SELECT</span>
                <div className="w-8 h-2.5 bg-zinc-900 rounded-full shadow-sm border border-zinc-800 active:bg-zinc-700 cursor-pointer"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App