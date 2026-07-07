import galleryInterior from "../../assets/gallery-interior.jpg";
import gallerySpread from "../../assets/gallery-spread.jpg";
import galleryBar from "../../assets/gallery-bar.jpg";
import galleryGuests from "../../assets/gallery-guests.jpg";
import SectionLabel from "./SectionLabel";

function GalleryItem({ src, alt, className = "" }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
    </div>
  );
}

const Gallery = () => {
  return (
    <section id="gallery" aria-label="Gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Inside the haven.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" role="list">
          <div role="listitem"><GalleryItem
            src={galleryInterior}
            alt="Restaurant interior with warm lighting and traditional decor"
            className="row-span-2 aspect-[3/4] lg:aspect-auto"
          /></div>
          <div role="listitem"><GalleryItem
            src={gallerySpread}
            alt="Nigerian food spread with jollof rice and assorted dishes"
            className="col-span-1 aspect-square lg:col-span-2 lg:aspect-[2/1]"
          /></div>
          <div role="listitem"><GalleryItem
            src={galleryBar}
            alt="Cocktail bar with ambient lighting"
            className="row-span-2 aspect-[3/4] lg:aspect-auto"
          /></div>
          <div role="listitem"><GalleryItem
            src={galleryGuests}
            alt="Happy guests dining at ZestHaven Bukka"
            className="col-span-1 aspect-square lg:col-span-2 lg:aspect-[2/1]"
          /></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
