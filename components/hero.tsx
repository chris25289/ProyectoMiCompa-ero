"use client";

import { Search, MapPin, Shield, Star, Heart, PawPrint } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-ivory py-12 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="space-y-8">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-1.5">
                <div className="h-2 w-2 rounded-full bg-pet-orange" />
                <span className="font-sans text-xs font-semibold text-on-surface-variant">
                    Red confiable de cuidado animal
                </span>
                </div>

                {/* Título */}
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-petroleum">
                Todo lo que tu mascota necesita,{" "}
                <span className="text-primary">en un solo lugar.</span>
                </h1>

                {/* Subtítulo */}
                <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-lg leading-relaxed">
                Cuidadores, paseadores, veterinarias, peluquerías, transporte y adopción responsable. 
                Conectados por geolocalización, unidos por el amor a los animales.
                </p>

                {/* Barra de búsqueda */}
                <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-outline" />
                    <input
                    type="text"
                    placeholder="¿Qué necesitas? Paseo, veterinaria..."
                    className="w-full rounded-full border border-outline-variant bg-surface-container-lowest px-12 py-3.5 font-sans text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>
                
                <div className="relative sm:w-auto">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-outline" />
                    <input
                    type="text"
                    placeholder="Cerca de ti"
                    className="w-full sm:w-40 rounded-full border border-outline-variant bg-surface-container-lowest px-12 py-3.5 font-sans text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>
                
                <button className="rounded-full bg-primary-container px-8 py-3.5 font-display font-bold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    Buscar
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-on-surface-variant">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="font-sans">Cuidadores verificados</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                    <Star className="h-4 w-4 text-secondary" />
                    <span className="font-sans">+12.000 reseñas reales</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                    <Heart className="h-4 w-4 text-error" />
                    <span className="font-sans">3.400 adopciones logradas</span>
                </div>
                </div>
            </div>

            {/* COLUMNA DERECHA - IMAGEN */}
            <div className="relative">
                {/* Imagen principal */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1587300003435-9e80d3247103?w=800&auto=format&fit=crop&q=80"
                    alt="Mujer feliz con su perro golden retriever"
                    className="w-full h-auto object-cover"
                />
                
                {/* Card flotante - Paseo confirmado */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block">
                    <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <PawPrint className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <p className="font-sans text-xs font-medium text-on-surface-variant">
                        Paseo confirmado
                        </p>
                        <p className="font-display text-sm font-bold text-petroleum">
                        Luna • 17:30
                        </p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Card flotante pequeña - Gato */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-3 shadow-xl hidden md:block">
                <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop&q=80"
                    alt="Gatito"
                    className="h-24 w-24 rounded-xl object-cover"
                />
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};

export default Hero;