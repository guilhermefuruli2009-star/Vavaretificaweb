  import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    title: "Motor Retificado",
    category: "Retífica",
  },
  {
    url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    title: "Oficina Equipada",
    category: "Estrutura",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    title: "Equipamentos",
    category: "Tecnologia",
  },
  {
    url: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&h=600&fit=crop",
    title: "Peças Premium",
    category: "Auto Peças",
  },
  {
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    title: "Veículos Atendidos",
    category: "Clientes",
  },
  {
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    title: "Resultado Final",
    category: "Qualidade",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Nosso Trabalho</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            <span className="text-yellow-400">Galeria</span> de Fotos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-800 hover:border-yellow-400/30 transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}>
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-lg mt-1">{image.title}</h3>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-zinc-950 border-zinc-800 p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 to-transparent">
                <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-bold text-xl mt-1">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}