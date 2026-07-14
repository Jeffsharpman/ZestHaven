import { motion } from "framer-motion";
import galleryInterior from "../../assets/gallery-interior.jpg";
import gallerySpread from "../../assets/gallery-spread.jpg";
import galleryBar from "../../assets/gallery-bar.jpg";
import galleryGuests from "../../assets/gallery-guests.jpg";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "../UI/ScrollReveal";

function GalleryItem({ src, alt, className = "" }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
    </div>
  );
}

const Gallery = () => {
  return (
    <section id="gallery" aria-label="Gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal animation="fadeUp">
          <div className="max-w-2xl">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Inside the haven.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" role="list">
          <ScrollReveal animation="scaleUp" delay={0} as="div" role="listitem" className="[&:nth-child(1)]:row-span-2 [&:nth-child(1)]:aspect-[3/4] [&:nth-child(1)]:lg:aspect-auto">
            <GalleryItem
              src={galleryInterior}
              alt="Restaurant interior with warm lighting and traditional decor"
              className="h-full"
            />
          </ScrollReveal>
          <ScrollReveal animation="scaleUp" delay={0.1} as="div" role="listitem" className="[&:nth-child(2)]:col-span-1 [&:nth-child(2)]:aspect-square [&:nth-child(2)]:lg:col-span-2 [&:nth-child(2)]:lg:aspect-[2/1]">
            <GalleryItem
              src={gallerySpread}
              alt="Nigerian food spread with jollof rice and assorted dishes"
              className="h-full"
            />
          </ScrollReveal>
          <ScrollReveal animation="scaleUp" delay={0.2} as="div" role="listitem" className="[&:nth-child(3)]:row-span-2 [&:nth-child(3)]:aspect-[3/4] [&:nth-child(3)]:lg:aspect-auto">
            <GalleryItem
              src={galleryBar}
              alt="Cocktail bar with ambient lighting"
              className="h-full"
            />
          </ScrollReveal>
          <ScrollReveal animation="scaleUp" delay={0.3} as="div" role="listitem" className="[&:nth-child(4)]:col-span-1 [&:nth-child(4)]:aspect-square [&:nth-child(4)]:lg:col-span-2 [&:nth-child(4)]:lg:aspect-[2/1]">
            <GalleryItem
              src={galleryGuests}
              alt="Happy guests dining at ZestHaven Bukka"
              className="h-full"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
