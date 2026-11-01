import { HeroBadge } from "../home/hero-badge";
import { HeroSearch } from "../home/hero-search";
import { HeroTrust } from "../home/hero-trust";
import { HeroVisual } from "../home/hero-visual";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
            {/* Columna de contenido */}
            <div className="space-y-8">
            <HeroBadge />

            <div className="space-y-6">
                <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-on-surface md:text-6xl">
                Todo lo que tu mascota necesita,{" "}
                <span className="text-primary-container">en un solo lugar.</span>
                </h1>
                <p className="max-w-lg font-sans text-lg leading-7 text-on-surface-variant">
                Cuidadores, paseadores, veterinarias, peluquerías, transporte y
                adopción responsable. Conectados por geolocalización, unidos por
                el amor a los animales.
                </p>
            </div>

            <HeroSearch />
            <HeroTrust />
            </div>

            {/* Columna visual */}
            <HeroVisual />
        </div>
        </section>
    );
}