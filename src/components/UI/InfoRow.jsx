function InfoRow({ icon: Icon, title, lines }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gold/40 bg-card text-gold" aria-hidden="true">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-display text-lg">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-muted-foreground">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoRow;
