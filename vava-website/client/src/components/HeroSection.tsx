import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Wrench, Shield, Clock } from 'lucide-react';

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/5513997843839?text=Olá! Gostaria de solicitar um orçamento.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />

      {/* Yellow Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 text-sm font-medium tracking-wide">Desde 1985 em Registro-SP</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block">VAVÁ</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-400">
              RETÍFICA DE MOTORES
            </span>
            <span className="block text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
              & AUTO PEÇAS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Excelência em retífica de motores com tecnologia de ponta e profissionais especializados. 
            Seu motor em mãos experientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-yellow-400/25 transition-all duration-300 hover:shadow-yellow-400/40 hover:scale-105 w-full sm:w-auto">
                Solicitar Orçamento
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#servicos">
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 w-full sm:w-auto">
                Nossos Serviços
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="group">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-all duration-300">
                <Wrench className="w-8 h-8 text-yellow-400 mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-2xl md:text-3xl font-bold text-white">39+</span>
                <span className="text-zinc-500 text-sm">Anos de Experiência</span>
              </div>
            </div>
            <div className="group">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-all duration-300">
                <Shield className="w-8 h-8 text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl md:text-3xl font-bold text-white">100%</span>
                <span className="text-zinc-500 text-sm">Garantia</span>
              </div>
            </div>
            <div className="group">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-all duration-300">
                <Clock className="w-8 h-8 text-yellow-400 mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-2xl md:text-3xl font-bold text-white">5000+</span>
                <span className="text-zinc-500 text-sm">Motores Retificados</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-yellow-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}