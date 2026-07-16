import { UtensilsCrossed } from "lucide-react";

function Marquee() {
  const items = [
    "Party Jollof",
    "Egusi Royale",
    "Suya Platter",
    "Ogbono Velvet",
    "Golden Dodo",
    "Pepper Soup",
    "Pounded Yam",
    "Grilled Chicken",
  ];

  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--primary)_6%,transparent),transparent_70%)] py-8">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="font-display text-3xl italic text-gradient-warm md:text-5xl">
              {item}
            </span>

            <UtensilsCrossed className="h-5 w-5 text-primary/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
