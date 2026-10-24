import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A Ideia que Mudou a Escola</h2>
          <div className="w-16 h-1 bg-red-600 mb-6"></div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Tudo começou em 2020, graças à visão do professor de História, <strong>Lucas Vilela</strong>, na Escola de Educação Básica Bela Vista. O projeto nasceu para resolver conflitos escolares e manter os alunos focados.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Hoje, o esporte é uma ferramenta de transformação. Para participar, é obrigatório ter boas notas e assiduidade escolar.
          </p>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Redução drástica de conflitos na escola</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Reconhecido pelo MPSC ("Cultivando Atitudes")</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Destaque no programa Conexão do Bem da ALESC</li>
          </ul>
        </div>
        <div className="relative">
          <img 
            src="/bela-vista.webp" 
            alt="Treino de Boxe" 
            className="rounded-xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-red-600 rounded-xl z-0"></div>
        </div>
      </div>
    </section>
  );
}
