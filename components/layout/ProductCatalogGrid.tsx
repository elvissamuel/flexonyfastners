import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCatalogGrid({
  products,
  variant = "dark",
}: {
  products: Product[];
  variant?: "dark" | "light";
}) {
  const gridClass =
    variant === "light"
      ? "site-catalog-grid"
      : "home-products-grid";

  const cardClass =
    variant === "light"
      ? "site-catalog-card"
      : "home-product-card";

  return (
    <div className={gridClass}>
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className={cardClass}
        >
          <img src={`/assets/imgs/${product.image}`} alt={product.title} />
          <span className="home-product-card-arrow">
            <i className="fas fa-arrow-right" />
          </span>
          <div className="home-product-card-overlay">
            <span className="home-product-card-title">{product.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
