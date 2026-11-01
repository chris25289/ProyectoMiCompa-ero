import Link from "next/link";
import { Moon, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
    { href: "/servicios", label: "Servicios" },
    { href: "/como-funciona", label: "Cómo funciona" },
    { href: "/adopcion", label: "Adopción" },
    { href: "/comunidad", label: "Comunidad" },
    ];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-outline-variant/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
            {/* LOGO CON DEGRADADO */}
        <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-soft">
                <PawPrint className="size-5" />
            </span>
            <span className="font-display text-lg font-bold text-on-surface">
                Mi Compañero
            </span>
        </Link>

            {/* Links centrales */}
            <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
                >
                {link.label}
                </Link>
            ))}
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Cambiar tema">
                    <Moon className="size-5" />
                </Button>
                <Link href="/login" className="hidden font-sans text-sm font-semibold text-on-surface hover:text-primary sm:block">Ingresar
                </Link>
                <Button asChild className="rounded-full bg-gradient-warm text-primary-foreground shadow-soft hover:shadow-warm hover:brightness-110 transition-all">
                    <Link href="/registro">Crear cuenta</Link>
                </Button>
            </div>
        </div>
        </header>
    );
    }