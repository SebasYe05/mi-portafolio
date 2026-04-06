const Bisagra = () => (
  <div className="bg-blue-700 h-8 -mx-5 mb-6 shadow-inner flex items-center justify-between px-16 relative">
    <div className="w-1.5 h-full bg-black/20 rounded-full shadow-sm"></div>
    <div className="relative w-6 h-6 flex items-center justify-center">
      <div className="w-3.5 h-3.5 bg-black rounded-full border border-zinc-700 flex items-center justify-center">
        <div className="w-1 h-1 bg-blue-900 rounded-full opacity-60 blur-[0.5px]"></div>
      </div>
    </div>
    <div className="w-1.5 h-full bg-black/20 rounded-full shadow-sm"></div>
    <div className="absolute right-[40%] top-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full opacity-40"></div>
  </div>
);

export default Bisagra;