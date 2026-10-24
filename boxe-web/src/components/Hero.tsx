export default function Hero() {
  return (
    <header className="relative h-screen flex items-center bg-gray-900 text-white">
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf765d5?q=80&w=1920')] bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <span className="text-red-500 font-bold tracking-widest uppercase text-sm">São José, Santa Catarina</span>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Lutando pela <span className="text-red-600">Cidadania</span> e pelo Futuro.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Transformamos a vida de jovens estudantes através do esporte, ensinando disciplina, respeito e superação dentro e fora dos ringues.
        </p>
        <div className="flex gap-4">
          <a href="#contato" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold transition-all">Quero Treinar</a>
          <a href="#sobre" className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-bold transition-all">Conheça a História</a>
        </div>
      </div>
    </header>
  );
}
