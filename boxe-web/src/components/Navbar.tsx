import { HandMetal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
          <HandMetal className="text-red-600" />
          <span>BOXE BELA VISTA</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#sobre" className="hover:text-red-500 transition-colors">O Projeto</a>
          <a href="#impacto" className="hover:text-red-500 transition-colors">Impacto</a>
          <a href="#aulas" className="hover:text-red-500 transition-colors">Aulas</a>
          <a href="#contato" className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold transition-colors">Participe</a>
        </div>
      </div>
    </nav>
  );
}
