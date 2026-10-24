import { Users, Medal, GraduationCap } from 'lucide-react';

const stats = [
  { label: 'Jovens Atendidos', value: '70+', icon: Users },
  { label: 'Atletas em Competição', value: '20+', icon: Medal },
  { label: 'Permanência na Escola', value: '100%', icon: GraduationCap },
];

export default function Impact() {
  return (
    <section id="impacto" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Nosso Impacto em Números</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 bg-gray-800 rounded-2xl border border-gray-700">
              <stat.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-extrabold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
