import type { Metadata } from "next";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import ProductCatalogGrid from "@/components/layout/ProductCatalogGrid";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Flexony Fasteners",
};

export default function ProductsPage() {
  return (
    <div className="site">
      <SiteNav />

      <PageHero
        eyebrow="Our Catalog"
        title="Our Products"
        subtitle="Over 8 years of excellence in the fastener industry — browse our full range of bolts, nuts, anchors, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="site-catalog">
        <div className="home-container">
          <ScrollReveal className="site-section-header">
            <span className="home-eyebrow">Full Range</span>
            <h2 className="home-section-title">
              {products.length} Product Categories
            </h2>
            <p className="home-section-subtitle">
              Click any product to view details and send an inquiry. We supply
              in both large and small quantities.
            </p>
          </ScrollReveal>

          <ProductCatalogGrid products={products} variant="light" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
