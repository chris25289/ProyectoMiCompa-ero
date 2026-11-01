import Link from "next/link";
import { PawPrint, Menu } from "lucide-react";
//En React, los componentes personalizados SIEMPRE deben empezar con MAYÚSCULA.
/*const Navbar = () =>{
    return(
        <div>
            <p>from navbar</p>
        </div>
    );
};

export default Navbar;*/

const Navbar = () => {
    return (
        <nav className="bg-turquoise px-4 md:px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* 1. LOGO: Tipografía Display + Icono con acento de atención (10%) */}
                <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold text-white">
                    <PawPrint className="h-7 w-7 text-pet-orange" /> 
                    <span>Mi Compañero</span>
                </Link>
        {/* 2. LINKS DE NAVEGACIÓN: Tipografía Sans, visibles solo en desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/servicios" className="font-sans text-sm font-semibold text-white/90 hover:text-white transition-colors">
                        Servicios
                    </Link>
                    <Link href="/mascotas" className="font-sans text-sm font-semibold text-white/90 hover:text-white transition-colors">
                        Mascotas
                    </Link>
                    <Link href="/contacto" className="font-sans text-sm font-semibold text-white/90 hover:text-white transition-colors">
                        Contacto
                    </Link>
                </div>
        {/* 3. BOTÓN DE ACCIÓN (10% Attention - Pet Orange, Soft Geometry) */}
                <button className="hidden md:flex items-center gap-2 rounded-xl bg-pet-orange px-5 py-2.5 font-display font-bold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all">
                    Iniciar Sesión
                </button>
        {/* 4. BOTÓN MÓVIL (Hamburguesa) - Visible solo en pantallas pequeñas */}
                <button className="md:hidden text-white p-2 rounded-lg hover:bg-petroleum transition-colors">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;