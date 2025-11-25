import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio e redirecionar para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5513997843839?text=${encodeURIComponent(whatsappMessage)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      toast.success('Redirecionando para o WhatsApp...');
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contato" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Fale Conosco</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Entre em <span className="text-yellow-400">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Endereço</h4>
                    <p className="text-zinc-400">
                      Av. Willis Vassão, 129<br />
                      Vila Ribeirópolis, Registro – SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefones</h4>
                    <p className="text-zinc-400">
                      <a href="tel:+5513997843839" className="hover:text-yellow-400 transition-colors">
                        (13) 99784-3839
                      </a>
                      <br />
                      <a href="tel:+5513997143944" className="hover:text-yellow-400 transition-colors">
                        (13) 99714-3944
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Horário de Funcionamento</h4>
                    <p className="text-zinc-400">
                      Segunda a Sexta: 08h às 18h<br />
                      Sábado: 08h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/5513997843839?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500/10 border border-green-500/30 rounded-2xl p-6 hover:bg-green-500/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">WhatsApp Direto</h4>
                <p className="text-zinc-400">Clique para falar conosco agora</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-zinc-400 text-sm mb-2 block">Nome Completo</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-yellow-400 focus:ring-yellow-400/20"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm mb-2 block">Telefone / WhatsApp</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                  required
                  className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-yellow-400 focus:ring-yellow-400/20"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm mb-2 block">Mensagem</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva o serviço que precisa..."
                  required
                  rows={4}
                  className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl focus:border-yellow-400 focus:ring-yellow-400/20 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold h-14 rounded-xl shadow-lg shadow-yellow-400/25 transition-all duration-300 hover:shadow-yellow-400/40"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-zinc-800 h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-47.8444!3d-24.4869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI5JzEzLjAiUyA0N8KwNTAnMzkuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Vavá Retífica"
                />
        </div>
      </div>
    </section>
  );
}