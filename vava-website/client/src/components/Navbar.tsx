import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-zinc-900 font-black text-lg">V</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-black text-lg leading-none">VAVÁ</h1>
              <span className="text-yellow-400 text-[10px] font-semibold tracking-wider">RETÍFICA DE MOTORES</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-yellow-400 text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5513997843839" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(13) 99784-3839</span>
            </a>
            <a 
              href="https://wa.me/5513997843839?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold px-6 rounded-lg">
                Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-6' : 'max-h-0'
        }`}>
          <div className="bg-zinc-900/95 backdrop-blur-lg rounded-2xl border border-zinc-800 p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-yellow-400 text-lg font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-zinc-800 pt-4 mt-2">
                <a 
                  href="https://wa.me/5513997843839?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold py-6 rounded-xl">
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}