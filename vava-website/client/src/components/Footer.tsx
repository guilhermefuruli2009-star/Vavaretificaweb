import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white">
                VAVÁ
                <span className="block text-yellow-400 text-sm font-bold">RETÍFICA DE MOTORES</span>
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Há mais de 39 anos oferecendo serviços de retífica de motores com 
              qualidade, tradição e garantia em Registro e região.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900" />
              </a>
              <a href="mailto:contato@vavaretifica.com.br" className="w-10 h-10 bg-zinc-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Diferenciais', 'Galeria', 'Contato'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                'Retífica de Cabeçotes',
                'Retífica de Blocos',
                'Retífica de Virabrequins',
                'Montagem de Motores',
                'Auto Peças',
              ].map((service) => (
                <li key={service}>
                  <span className="text-zinc-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">
                  Av. Willis Vassão, 129<br />
                  Vila Ribeirópolis, Registro – SP
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-zinc-400 text-sm">
                  (13) 99784-3839<br />
                  (13) 99714-3944
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-zinc-400 text-sm">
                  Seg-Sex: 08h às 18h<br />
                  Sábado: 08h às 12h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Vavá Retífica de Motores. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs">
            Desenvolvido com ❤️ para o Vale do Ribeira
          </p>
        </div>
      </div>
    </footer>
  );
}