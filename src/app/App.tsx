import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/app/components/ui/sonner';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { Services } from '@/app/pages/Services';
import { About } from '@/app/pages/About';
import { Team } from '@/app/pages/Team';
import { Portfolio } from '@/app/pages/Portfolio';
import { Contact } from '@/app/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
