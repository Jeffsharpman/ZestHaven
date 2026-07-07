import React, { useState } from "react";
import {
  ChefHat,
  UtensilsCrossed,
  Flame,
  Leaf,
  ArrowRight,
} from "lucide-react";
import SectionLabel from "./SectionLabel";
import dishJollof from "../../assets/dish-jollof.jpg";
import dishEgusi from "../../assets/dish-egusi.jpg";
import dishSuya from "../../assets/dish-suya.jpg";
import dishOgbono from "../../assets/dish-ogbono.jpg";
import dishPlantain from "../../assets/dish-plantain.jpg";
import dishPeppersoup from "../../assets/dish-peppersoup.jpg";

const DISHES = [
  {
    name: "Smoky Party Jollof",
    cat: "Rice Dishes",
    desc: "Long-grain rice slow-cooked in smoked pepper stew with grilled chicken & fried plantain.",
    price: "₦7,500",
    img: dishJollof,
  },
  {
    name: "Egusi Royale",
    cat: "Soups & Swallows",
    desc: "Hand-ground melon seed soup with assorted meats, served with pounded yam.",
    price: "₦8,200",
    img: dishEgusi,
  },
  {
    name: "ZestHaven Suya Platter",
    cat: "Grills & Suya",
    desc: "House-spiced beef skewers grilled over open fire with raw onions and yaji.",
    price: "₦6,800",
    img: dishSuya,
  },
  {
    name: "Ogbono Velvet",
    cat: "Soups & Swallows",
    desc: "Silky ogbono with goat meat, stockfish and ponmo. Paired with eba or pounded yam.",
    price: "₦7,900",
    img: dishOgbono,
  },
  {
    name: "Golden Dodo",
    cat: "Sides & Extras",
    desc: "Sweet caramelized plantain cubes, fried to a delicate crisp.",
    price: "₦2,500",
    img: dishPlantain,
  },
  {
    name: "Catfish Pepper Soup",
    cat: "Soups & Swallows",
    desc: "Fresh catfish in a bold, fragrant pepper broth with utazi leaves.",
    price: "₦9,400",
    img: dishPeppersoup,
  },
];

const CATEGORIES = [
  { label: "Soups & Swallows", icon: UtensilsCrossed },
  { label: "Rice Dishes", icon: Leaf },
  { label: "Grills & Suya", icon: Flame },
  { label: "Sides & Extras", icon: ChefHat },
];

const Menu = () => {
  const [active, setActive] = useState("All");
  const cats = ["All", ...CATEGORIES.map((c) => c.label)];
  const list =
    active === "All" ? DISHES : DISHES.filter((d) => d.cat === active);

  return (
    <section id="menu" aria-label="Menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionLabel>Signature Dishes</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A menu that tastes like{" "}
              <span className="italic text-gold">
                home, plated like a celebration.
              </span>
            </h2>
          </div>
          <a
            href="#reserve"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
          >
            Full menu on request <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter menu by category">
          {cats.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card/40 text-foreground/80 hover:border-gold/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
                  {d.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl">{d.name}</h3>
                  <span className="shrink-0 font-display text-lg text-gold">
                    {d.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
