import Image from "next/image";

// Waiting on the real mark at /public/logo.png (see BRAND_KIT.md — Logo &
// Marks). The <Image> below is wired up and ready; until the file lands this
// will 404 quietly (no build break, just a missing image at request time).
const LOGO_SRC = "/logo.png";

interface LogoProps {
  dark?: boolean;
  // Show just the phoenix mark, no wordmark — for tight spaces (favicons,
  // mobile nav) once the asset is in place.
  markOnly?: boolean;
}

// The mark is mostly black linework. On a light background that reads fine
// on its own. On the dark header (bg-brand-night, near-black) it needs a
// light backing chip or it disappears — hence the badge wrapper below.
function LogoMark({ dark, size = 28 }: { dark?: boolean; size?: number }) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt="Elynox"
      width={size}
      height={size}
      className="h-full w-full object-contain"
      priority
    />
  );

  if (!dark) {
    return (
      <span className="inline-flex" style={{ width: size, height: size }}>
        {image}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-white/95 p-1 shadow-sm"
      style={{ width: size, height: size }}
    >
      {image}
    </span>
  );
}

export function Logo({ dark = false, markOnly = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark dark={dark} size={markOnly ? 32 : 28} />
      {!markOnly && (
        <span
          className={`text-sm font-extrabold tracking-[0.2em] ${dark ? "text-white" : "text-brand-ink"}`}
        >
          ELYNOX
        </span>
      )}
    </span>
  );
}
