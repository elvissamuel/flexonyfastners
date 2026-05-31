import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import ContactDetails from "@/components/layout/ContactDetails";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { getProductBySlug, products } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return { title: `${product.title} | Flexony Fasteners` };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="site">
      <SiteNav />

      <PageHero
        eyebrow="Product Inquiry"
        title={product.title}
        subtitle="View product details and send us an inquiry — we supply in large and small quantities."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      <section className="site-product-detail">
        <div className="home-container">
          <div className="site-product-detail-grid">
            <ScrollReveal>
              <div className="site-product-image-card">
                <span className="site-product-card-label">Product Image</span>
                <div className="site-product-image-wrap">
                  <img
                    src={`/assets/imgs/${product.image}`}
                    alt={product.title}
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="site-product-desc-card">
                <span className="site-product-card-label">Description</span>
                <div className="site-product-desc-body">
                  {product.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="site-inquiry-section">
              <div className="site-inquiry-header">
                <h2>Request a Quote</h2>
                <p>
                  Fill out the form below and our team will get back to you with
                  pricing and availability.
                </p>
              </div>
              <div className="site-inquiry-grid">
                <ContactDetails />
                <div className="site-form-card">
                  <h3>Product Inquiry</h3>
                  <p>Tell us about your requirements for {product.title}.</p>
                  <ProductInquiryForm />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/products" className="home-btn home-btn-outline">
              <i className="fas fa-arrow-left" />
              Back to All Products
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
