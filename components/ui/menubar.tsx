import Link from "next/link";
import { PawPrint, Menu, Moon } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";

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

        {/* MENÚ DE NAVEGACIÓN CON DROPDOWNS */}
        <Menubar className="hidden md:flex border-none bg-transparent shadow-none">
          <MenubarMenu>
            <MenubarTrigger className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary data-[state=open]:bg-surface-container data-[state=open]:text-primary">
              Servicios
            </MenubarTrigger>
            <MenubarContent className="bg-white border-outline-variant">
              <MenubarItem asChild>
                <Link href="/servicios/veterinaria" className="cursor-pointer">
                   Veterinaria
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/servicios/paseo" className="cursor-pointer">
                  🦮 Paseo de mascotas
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/servicios/peluqueria" className="cursor-pointer">
                  ✂️ Peluquería
                </Link>
              </MenubarItem>
              <MenubarSeparator className="bg-outline-variant" />
              <MenubarItem asChild>
                <Link href="/servicios/transporte" className="cursor-pointer">
                  🚗 Transporte
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary data-[state=open]:bg-surface-container data-[state=open]:text-primary">
              Cómo funciona
            </MenubarTrigger>
            <MenubarContent className="bg-white border-outline-variant">
              <MenubarItem asChild>
                <Link href="/como-funciona/para-clientes" className="cursor-pointer">
                  Para clientes
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/como-funciona/para-prestadores" className="cursor-pointer">
                  Para prestadores
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary data-[state=open]:bg-surface-container data-[state=open]:text-primary">
              Adopción
            </MenubarTrigger>
            <MenubarContent className="bg-white border-outline-variant">
              <MenubarItem asChild>
                <Link href="/adopcion/perros" className="cursor-pointer">
                   Perros
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/adopcion/gatos" className="cursor-pointer">
                  🐈 Gatos
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary data-[state=open]:bg-surface-container data-[state=open]:text-primary">
              Comunidad
            </MenubarTrigger>
            <MenubarContent className="bg-white border-outline-variant">
              <MenubarItem asChild>
                <Link href="/comunidad/blog" className="cursor-pointer">
                  Blog
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/comunidad/eventos" className="cursor-pointer">
                  Eventos
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

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
          <Menu className="h-6 w-6" />
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;