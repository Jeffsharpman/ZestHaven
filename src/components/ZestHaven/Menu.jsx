import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, UtensilsCrossed, Flame, Leaf } from "lucide-react";
import ScrollReveal from "../UI/ScrollReveal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";
import FilterPills from "../UI/FilterPills";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import dishJollof from "../../assets/dish-jollof.jpg";
import dishEgusi from "../../assets/dish-egusi.jpg";
import dishSuya from "../../assets/dish-suya.jpg";
import dishOgbono from "../../assets/dish-ogbono.jpg";
import dishPlantain from "../../assets/dish-plantain.jpg";
import dishPeppersoup from "../../assets/dish-peppersoup.jpg";

const DISHES = [
  { name: "Smoky Party Jollof", cat: "Rice Dishes", desc: "Long-grain rice slow-cooked in smoked pepper stew with grilled chicken & fried plantain. The dish that started it all — unchanged since Chef Amaka's first batch.", price: "₦7,500", img: dishJollof },
  { name: "Egusi Royale", cat: "Soups & Swallows", desc: "Hand-ground melon seed soup with assorted meats, served with pounded yam. Built layer by layer, the way it should be.", price: "₦8,200", img: dishEgusi },
  { name: "ZestHaven Suya Platter", cat: "Grills & Suya", desc: "House-spiced beef skewers grilled over open fire with raw onions and yaji. Every spice blend is mixed in-house daily.", price: "₦6,800", img: dishSuya },
  { name: "Ogbono Velvet", cat: "Soups & Swallows", desc: "Silky ogbono with goat meat, stockfish and ponmo. Paired with eba or pounded yam. A texture you won't find elsewhere.", price: "₦7,900", img: dishOgbono },
  { name: "Golden Dodo", cat: "Sides & Extras", desc: "Sweet caramelized plantain cubes, fried to a delicate crisp. The perfect companion to any main course.", price: "₦2,500", img: dishPlantain },
  { name: "Catfish Pepper Soup", cat: "Soups & Swallows", desc: "Fresh catfish in a bold, fragrant pepper broth with utazi leaves. Light enough for a starter, rich enough for a main.", price: "₦9,400", img: dishPeppersoup },
];

const CATEGORIES = [
  { label: "Soups & Swallows", icon: UtensilsCrossed },
  { label: "Rice Dishes", icon: Leaf },
  { label: "Grills & Suya", icon: Flame },
  { label: "Sides & Extras", icon: ChefHat },
];

const Menu = () => {
  const [active, setActive] = useState("All");
  const { handleAnchorClick } = useSmoothScroll();
  const cats = ["All", ...CATEGORIES.map((c) => c.label)];
  const list = active === "All" ? DISHES : DISHES.filter((d) => d.cat === active);

  return (
    <Section id="menu" label="Menu">
      <ScrollReveal animation="fadeUp">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            eyebrow="SIGNATURE DISHES"
            title='A menu that tastes like <span class="text-gold italic">home, plated like a celebration.</span>'
            sub="Every dish is prepared with ingredients sourced from Lagos markets and cooked using techniques passed down through generations. No shortcuts. No substitutes."
          />
          <Button href="#reserve" variant="ghost" size="sm" arrow className="hidden lg:inline-flex" onClick={handleAnchorClick}>
            Full menu on request
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.15} className="mt-10" as="div" role="group" aria-label="Filter menu by category">
        <FilterPills items={cats} active={active} onChange={setActive} />
      </ScrollReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <AnimatePresence mode="popLayout">
          {list.map((d, i) => (
            <motion.article key={d.name} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, delay: i * 0.05 }} role="listitem">
              <Card variant="elevatedHover" rounded="3xl" className="group">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={d.img} alt={d.name} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur">{d.cat}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl">{d.name}</h3>
                    <span className="shrink-0 font-display text-lg text-gold">{d.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </Card>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Menu;
