function AvatarInitials({ initials, className = "" }) {
  return (
    <div className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-gold text-sm font-semibold text-primary-foreground ${className}`}>
      {initials}
    </div>
  );
}

export default AvatarInitials;
