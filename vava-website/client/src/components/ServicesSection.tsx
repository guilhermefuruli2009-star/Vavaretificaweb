import React from 'react';
import { Cog, Gauge, Cylinder, Wrench, Settings, Car, Truck, Tractor } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: "Retífica de Cabeçotes",
    description: "Usinagem e recuperação completa de cabeçotes com equipamentos de última geração.",
  },
  {
    icon: Cylinder,
    title: "Retífica de Blocos",
    description: "Brunimento, encamisamento e recuperação de blocos de motores.",
  },
  {
    icon: Gauge,
    title: "Retífica de Virabrequins",
    description: "Retífica e balanceamento de virabrequins com precisão micrométrica.",
  },
  {
    icon: Wrench,
    title: "Retífica de Comandos",
    description: "Recuperação e ajuste de comandos de válvulas para desempenho ideal.",
  },
  {
    icon: Settings,
    title: "Montagem de Motores",
    description: "Montagem completa com peças originais e garantia de fábrica.",
  },
  {
    icon: Car,
    title: "Auto Peças",
    description: "Comercialização de peças originais e paralelas para todas as marcas.",
  },
];

const vehicleTypes = [
  { icon: Car, label: "Carros" },
  { icon: Truck, label: "Caminhões" },
  { icon: Tractor, label: "Tratores" },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #fbbf24 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">O Que Fazemos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Nossos <span className="text-yellow-400">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de retífica para garantir 
            o melhor desempenho do seu motor.
          </p>
        </div>

        {/* Vehicle Types */}
        <div className="flex justify-center gap-4 mb-12">
          {vehicleTypes.map((type, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-zinc-800/50 border border-zinc-700 rounded-full px-5 py-2 hover:border-yellow-400/50 transition-all duration-300"
            >
              <type.icon className="w-5 h-5 text-yellow-400" />
              <span className="text-zinc-300 text-sm font-medium">{type.label}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Saiba mais</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5513997843839?text=Olá! Gostaria de saber mais sobre os serviços de retífica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-400/25 transition-all duration-300 hover:shadow-yellow-400/40 hover:scale-105"
          >
            Solicitar Orçamento Gratuito
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}