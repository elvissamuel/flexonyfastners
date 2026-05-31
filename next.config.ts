import type { NextConfig } from "next";

const productRedirects = [
  "allen-bolt",
  "anchor-bolt",
  "anchor-flasher",
  "carriage-bolt",
  "connecting-nut",
  "countersunk-bolt",
  "drilling-screw",
  "drop-anchor",
  "electrode",
  "expansion-bolt",
  "eye-bolt",
  "flange-nut",
  "flat-washer",
  "fourclaw-tnut",
  "g-clamp",
  "grub-screw",
  "hex-nut",
  "hex-screw",
  "lock-nut",
  "piper-hanger",
  "plastic-fisher",
  "rivet-nut",
  "scaffolding-clamp",
  "screw",
  "screw2",
  "shear-nut",
  "sleeve-anchor",
  "spring-nut",
  "spring-washer",
  "stud-bolt",
  "t-bolt",
  "threaded-rod",
  "u-bolt",
  "wedge-anchor",
  "wing-nut",
].flatMap((slug) => [
  {
    source: `/${slug}.html`,
    destination: `/products/${slug}`,
    permanent: true,
  },
]);

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/flexony-about.html", destination: "/about", permanent: true },
      { source: "/flexony-product.html", destination: "/products", permanent: true },
      { source: "/flexony-contact.html", destination: "/contact", permanent: true },
      { source: "/product-inquiry.html", destination: "/products/hex-bolt", permanent: true },
      ...productRedirects,
    ];
  },
};

export default nextConfig;
