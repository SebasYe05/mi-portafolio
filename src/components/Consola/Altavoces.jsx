const Altavoces = ({ side }) => (
  <div className={`absolute ${side === 'left' ? 'left-6' : 'right-6'} grid grid-cols-2 gap-1.5 opacity-60`}>
    {[...Array(7)].map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
    ))}
  </div>
);

export default Altavoces;