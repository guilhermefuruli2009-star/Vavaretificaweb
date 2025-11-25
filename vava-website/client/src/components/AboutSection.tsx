import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-800/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Quem Somos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Sobre a <span className="text-yellow-400">Empresa</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Nossa História</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Fundada em 1985, a <span className="text-yellow-400 font-semibold">Vavá Retífica de Motores</span> nasceu 
                do sonho de oferecer serviços de retífica de alta qualidade na região do Vale do Ribeira.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Com quase 40 anos de tradição, nos tornamos referência em Registro e região, 
                atendendo desde veículos de passeio até máquinas agrícolas e industriais, 
                sempre com o compromisso de entregar excelência em cada motor retificado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300 group">
                <Target className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold mb-2">Missão</h4>
                <p className="text-zinc-500 text-sm">Oferecer serviços de retífica com qualidade superior e preço justo.</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300 group">
                <Eye className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold mb-2">Visão</h4>
                <p className="text-zinc-500 text-sm">Ser a retífica mais confiável e tecnológica do Vale do Ribeira.</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl h-48 overflow-hidden border border-zinc-700">
                  <img 
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop" 
                    alt="Motor retificado"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl p-6 border border-yellow-400/30">
                  <Award className="w-12 h-12 text-yellow-400 mb-3" />
                  <h4 className="text-white font-bold text-xl">39+ Anos</h4>
                  <p className="text-zinc-400 text-sm">de experiência no mercado</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-3xl p-6 border border-zinc-700">
                  <Users className="w-12 h-12 text-yellow-400 mb-3" />
                  <h4 className="text-white font-bold text-xl">Equipe</h4>
                  <p className="text-zinc-400 text-sm">Profissionais especializados e certificados</p>
                </div>
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl h-56 overflow-hidden border border-zinc-700">
                  <img 
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=350&fit=crop" 
                    alt="Oficina mecânica"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-yellow-400/30 rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-yellow-400 font-bold text-2xl">100%</p>
              <p className="text-zinc-400 text-sm">Satisfação Garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}