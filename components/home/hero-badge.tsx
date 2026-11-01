import { Badge } from "@/components/ui/badge";

export function HeroBadge() {
    return (
        <Badge
        variant="secondary"
        className="gap-2 rounded-full border border-outline-variant/70 bg-surface-container-lowest px-4 py-1.5 font-sans text-xs font-semibold text-on-surface-variant shadow-none"
        >
        <span className="size-2 rounded-full bg-pet-orange" aria-hidden />
        Red confiable de cuidado animal
        </Badge>
    );
}