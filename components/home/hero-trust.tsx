import { Heart, ShieldCheck, Star } from "lucide-react";

const items = [
    { icon: ShieldCheck, label: "Cuidadores verificados", color: "text-pet-orange" },
    { icon: Star, label: "+12.000 reseñas reales", color: "text-primary-container" },
    { icon: Heart, label: "3.400 adopciones logradas", color: "text-primary-container" },
];

export function HeroTrust() {
    return (
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
        {items.map(({ icon: Icon, label, color }) => (
            <li key={label} className="flex items-center gap-2">
            <Icon className={`size-4 ${color}`} />
            <span className="font-sans text-sm text-on-surface-variant">{label}</span>
            </li>
        ))}
        </ul>
    );
}