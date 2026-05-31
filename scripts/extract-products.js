const fs = require("fs");

const files = fs
  .readdirSync(".")
  .filter(
    (f) =>
      f.endsWith(".html") &&
      !f.startsWith("flexony") &&
      f !== "index.html" &&
      f !== "flexony-test.html"
  );

const products = [];

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const titleMatch = html.match(/<h5>([^<]+)<\/h5>/);
  const imgSectionMatch = html.match(
    /product product_image[\s\S]*?<img src="\.\/assets\/imgs\/([^"]+)"/
  );
  const imgMatch = imgSectionMatch || html.match(/src="\.\/assets\/imgs\/([^"]+)"/);
  const descMatch = html.match(
    /Product Description[\s\S]*?<div class="product_img">([\s\S]*?)<\/div>/
  );

  let paragraphs = [];
  if (descMatch) {
    const pMatches = [...descMatch[1].matchAll(/<p>([\s\S]*?)<\/p>/g)];
    paragraphs = pMatches.map((m) => m[1].replace(/\s+/g, " ").trim());
  }

  const slug = file.replace(".html", "");
  products.push({
    slug: slug === "product-inquiry" ? "hex-bolt" : slug,
    title: titleMatch?.[1]?.trim() || slug,
    image: imgMatch?.[1] || "",
    description: paragraphs,
  });
}

fs.mkdirSync("data", { recursive: true });
const content = `export type Product = {
  slug: string;
  title: string;
  image: string;
  description: string[];
};

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
`;

fs.writeFileSync("data/products.ts", content);
console.log(`Extracted ${products.length} products`);
