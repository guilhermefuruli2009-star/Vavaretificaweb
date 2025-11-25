import React from 'react';
import { Shield, Clock, Award, Headphones, Truck, BadgeCheck } from 'lucide-react';

const differentials = [
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Todos os serviços com garantia de qualidade e satisfação.",
    highlight: "12 meses",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Prazos reduzidos sem comprometer a qualidade do serviço.",
    highlight: "Prazo Ágil",
  },
  {
    icon: Award,
    title: "Experiência",
    description: "Mais de 39 anos de tradição e conhecimento em retífica.",
    highlight: "Desde 1985",
  },
  {
    icon: Headphones,
    title: "Atendimento",
    description: "Suporte personalizado e acompanhamento em todas as etapas.",
    highlight: "24/7",
  },
  {
    icon: Truck,
    title: "Peças Originais",
    description: "Trabalhamos apenas com peças de qualidade comprovada.",
    highlight: "Qualidade",
  },
  {
    icon: BadgeCheck,
    title: "Certificação",
    description: "Profissionais treinados e certificados pelas melhores marcas.",
    highlight: "Certificado",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Por Que Nos Escolher</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Nossos <span className="text-yellow-400">Diferenciais</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-yellow-400/10 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-400/20">
                {item.highlight}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-yellow-400/50 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-10 h-10 text-yellow-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Confie em Quem Entende
              </h3>
              <p className="text-zinc-400">
                Mais de 5.000 motores retificados com sucesso
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">98%</p>
                <p className="text-zinc-500 text-sm">Satisfação</p>
              </div>
              <div className="w-px h-16 bg-zinc-700" />
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">5.000+</p>
                <p className="text-zinc-500 text-sm">Clientes</p>
              </div>
              <div className="w-px h-16 bg-zinc-700 hidden md:block" />
              <div className="text-center hidden md:block">
                <p className="text-4xl font-bold text-yellow-400">39+</p>
                <p className="text-zinc-500 text-sm">Anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}