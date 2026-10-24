import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Impact from '@/components/Impact';
import Classes from '@/components/Classes';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Classes />
      <Contact />
      <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2026 Projeto Boxe Bela Vista. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Bairro Bela Vista, São José - SC</p>
        </div>
      </footer>
    </main>
  );
}
