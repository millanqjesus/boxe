import { Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center bg-gray-900 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Faça Parte Dessa História</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Seja você um futuro aluno buscando mudar de vida, ou um parceiro querendo patrocinar e ajudar o projeto a crescer.
          </p>
          <div className="flex justify-center mb-8">
            <a href="https://wa.me/5548998427220" target="_blank" className="flex items-center gap-3 text-white bg-gray-800 px-6 py-3 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors">
              <Phone className="text-green-500" />
              <span className="font-semibold">(48) 99842-7220</span>
            </a>
          </div>
          <div className="flex justify-center gap-4">
<a href="#" className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                <span className="font-bold">ig</span>
              </a>
<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                <span className="font-bold">f</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
