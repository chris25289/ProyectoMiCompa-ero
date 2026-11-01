import Image from "next/image";
import { PawPrint } from "lucide-react";
import heroPet from "@/assets/img/hero-pet.jpg"; // carpeta assets/ fuera de public
import petCat from "@/assets/img/pet-cat.jpg"; // carpeta assets/ fuera de public

export function HeroVisual() {
    return (
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
        {/* Imagen principal — radio 32px (Soft Geometry) */}
        <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image
            src={heroPet}
            alt="Mujer abrazando feliz a su perro golden retriever"
            width={900}
            height={1100}
            priority
            className="h-[420px] w-full object-cover md:h-[560px]"
            />
        </div>

        {/* Card flotante: notificación */}
        <div className="absolute -top-6 right-2 flex items-center gap-3 rounded-2xl bg-surface-container-lowest p-4 shadow-lift md:-right-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-container/10">
            <PawPrint className="size-5 text-primary-container" />
            </span>
            <div>
            <p className="font-sans text-xs text-on-surface-variant">Paseo confirmado</p>
            <p className="font-display text-sm font-bold text-on-surface">Luna · 17:30</p>
            </div>
        </div>

        {/* Card flotante: foto gatito */}
        <div className="absolute -bottom-8 -left-2 w-32 -rotate-3 overflow-hidden rounded-2xl border-4 border-surface-container-lowest shadow-lift md:-left-10 md:w-40">
            <Image
            src= {petCat}
            alt="Gatito atigrado mirando a cámara"
            width={400}
            height={400}
            className="h-32 w-full object-cover md:h-40"
            />
        </div>
        </div>
    );
}