import LogoImage from "../../assets/logo.png";

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={LogoImage}
        alt="ZestHaven Bukka"
        className="h-10 w-auto object-contain"
        draggable={false}
      />

      <div className="leading-none">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          ZestHaven
          <span className="ml-1 text-gold" aria-hidden="true">·</span>
        </h1>
        <p className="mt-0.5 font-sans text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Bukka
        </p>
      </div>
    </div>
  );
}

export default Logo;
