import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="mx-auto max-w-4xl text-center">
        
        {/* Título usando la fuente Display y color Petroleum */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-petroleum mb-6">
          Bienvenidos a Mi Compañero PetConnect 🐾
        </h1>

        {/* Subtítulo usando la fuente Sans y color variante */}
        <p className="font-sans text-lg text-petroleum/80 mb-8 max-w-2xl mx-auto">
          Cuidando a tu mascota con los mejores profesionales. Conectamos amor, 
          salud y bienestar en un solo lugar.
        </p>

        {/* Botón de prueba de shadcn (heredará los colores primarios que configuramos) */}
        <div className="flex justify-center gap-4">
          <Button className="bg-pet-orange hover:bg-pet-orange/90 text-white font-display font-bold">
            Encontrar Veterinario
          </Button>
          <Button variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise/10">
            Ver Servicios
          </Button>
        </div>

      </div>
      {/* Aquí irán las siguientes secciones (Servicios, Cómo funciona, etc.) */}
    </main>
  );
}