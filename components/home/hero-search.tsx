import { ArrowRight, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSearch() {
    return (
        <form action="/buscar" className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Píldora de búsqueda (radio 24px+ según DESIGN.md) */}
            <div className="flex flex-1 items-center gap-2 rounded-full border border-outline-variant/70 bg-surface-container-lowest py-1 pl-5 pr-2 shadow-soft transition-colors focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/20">
                <Search className="size-4 shrink-0 text-outline" />
                <Input
                placeholder="¿Qué necesitas? Paseo, veterinaria..."
                className="h-10 flex-1 border-0 bg-transparent px-2 shadow-none focus-visible:ring-0"
                />
                <span className="hidden h-6 w-px bg-outline-variant sm:block" aria-hidden />
                <MapPin className="hidden size-4 shrink-0 text-outline sm:block" />
                <input
                placeholder="Cerca de ti"
                className="hidden h-10 w-28 bg-transparent font-sans text-sm outline-none placeholder:text-outline sm:block"
                />
            </div>

            <Button type="submit"className="rounded-full bg-gradient-warm text-primary-foreground shadow-soft hover:shadow-warm hover:brightness-110">
                Buscar <ArrowRight className="size-4" />
            </Button>
        </form>
    );
}