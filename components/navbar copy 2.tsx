import Link from "next/link";
import { PawPrint, Bell, Moon } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-outline-variant sticky top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4">
                
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container">
                    <PawPrint className="h-5 w-5 text-white" />
                </div>
                <span className="font-display text-xl font-bold text-petroleum">
                    Mi Compañero
                </span>
                </Link>

                {/* LINKS DE NAVEGACIÓN (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                <Link href="/servicios" className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                    Servicios
                </Link>
                <Link href="/como-funciona" className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                    Cómo funciona
                </Link>
                <Link href="/adopcion" className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                    Adopción
                </Link>
                <Link href="/comunidad" className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                    Comunidad
                </Link>
                </div>

                {/* ACCIONES (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <Moon className="h-5 w-5" />
                </button>
                
                <Link href="/login" className="font-sans text-sm font-semibold text-on-surface hover:text-primary transition-colors">
                    Ingresar
                </Link>
                
                <button className="rounded-full bg-primary-container px-5 py-2.5 font-display text-sm font-bold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all">
                    Crear cuenta
                </button>
                </div>

                {/* BOTÓN MÓVIL */}
                <button className="md:hidden text-on-surface p-2">
                <Bell className="h-6 w-6" />
                </button>
                
            </div>
        </nav>
    );
};

export default Navbar;