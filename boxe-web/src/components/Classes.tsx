import { School, Building2, Clock, UserCheck, MapPin } from 'lucide-react';

const classes = [
  {
    title: 'EEB Bela Vista',
    description: 'Foco nos alunos do ensino médio. O esporte utilizado como disciplina curricular para promover cidadania, liderado pelo Professor Lucas Vilela.',
    icon: School,
    details: [
      { icon: Clock, text: 'Durante o período letivo' },
      { icon: UserCheck, text: 'Idade: 13 a 20 anos' },
      { icon: CheckCircle, text: 'Requisito: Boas notas' },
    ]
  },
  {
    title: 'Centro Comunitário',
    description: 'Projeto social com a equipe DS Team, conveniada à Prefeitura. Aulas gratuitas abertas à comunidade, sob o comando do medalhista Kelson Pinto.',
    icon: Building2,
    details: [
      { icon: Clock, text: 'Segunda a Sexta: 17h30 às 18h30' },
      { icon: UserCheck, text: 'Idade: 8 a 18 anos' },
      { icon: MapPin, text: 'Av. Santa Catarina, nº 630' },
    ]
  }
];

// Import CheckCircle separately to avoid issues
import { CheckCircle } from 'lucide-react';

export default function Classes() {
  return (
    <section id="aulas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Onde Acontecem as Aulas?</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((cls, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <cls.icon className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{cls.title}</h3>
              <p className="text-gray-600 mb-6">{cls.description}</p>
              <ul className="space-y-3">
                {cls.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-500">
                    <detail.icon className="w-4 h-4" />
                    {detail.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
