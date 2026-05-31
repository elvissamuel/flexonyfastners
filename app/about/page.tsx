import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Flexony Fasteners",
};

export default function AboutPage() {
  return (
    <div className="site">
      <SiteNav />

      <PageHero
        eyebrow="Who We Are"
        title="About Flexony"
        subtitle="A leading dealer and supplier of bolts, nuts, and hardware — delivering quality fasteners across Nigeria and beyond."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="site-section">
        <div className="home-container home-values-grid">
          <ScrollReveal>
            <div className="home-value-card">
              <div className="home-value-icon">
                <i className="fas fa-bullseye" />
              </div>
              <h3>Mission Statement</h3>
              <p>
                As a leader in the Bolt and Nut industry, we aim at distributing
                the highest quality of fasteners to our customers at a
                pocket-friendly price.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="home-value-card">
              <div className="home-value-icon">
                <i className="fas fa-eye" />
              </div>
              <h3>Vision Statement</h3>
              <p>
                To be known as the premier provider of innovative products for
                the fastening and engineered component marketplace.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="home-value-card">
              <div className="home-value-icon">
                <i className="fas fa-gem" />
              </div>
              <h3>Core Values</h3>
              <ul className="home-value-list">
                <li>Quality Bolt &amp; Nut</li>
                <li>Excellent Customer Service</li>
                <li>Respect for Customers&apos; opinion and choice</li>
                <li>Integrity, Innovation &amp; Excellence</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="site-section site-section-alt">
        <div className="home-container home-about-grid">
          <ScrollReveal>
            <div className="home-about-image">
              <img src="/assets/imgs/about-img.jpg" alt="About Flexony Fasteners" />
              <div className="home-about-badge">
                <strong>8+</strong>
                <span>Years of Trust</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="home-about-content">
              <span className="home-eyebrow">Why Choose Us</span>
              <h2 className="home-section-title">Excellence You Can Count On</h2>
              <p>
                Flexony Fasteners and Hardware Limited is a leading dealer and
                supplier of Bolt and Nut with superior quality in the Fastener
                Industry. Our product quality always meets the international
                standard. In addition, we serve customers with prompt delivery,
                fair price and top notch after-sales services.
              </p>
              <p>
                We aim to create quality customer relationships among our
                domestic and international customers. Combining quality control,
                superior knowledge, and low prices to provide customers with
                service unmatched by our competitors has been our success
                technique.
              </p>
              <p>
                With the help of our Logistics department, our delivery is fast
                and reliable. The satisfaction our customers get after
                patronising us is our utmost priority and we will always meet
                their need come rain, come sunshine.
              </p>
              <div className="home-about-features">
                <div className="home-about-feature">
                  <i className="fas fa-shipping-fast" />
                  Fast Delivery
                </div>
                <div className="home-about-feature">
                  <i className="fas fa-certificate" />
                  Intl. Standards
                </div>
                <div className="home-about-feature">
                  <i className="fas fa-handshake" />
                  Trusted Partner
                </div>
                <div className="home-about-feature">
                  <i className="fas fa-tags" />
                  Fair Pricing
                </div>
              </div>
              <Link href="/products" className="home-btn home-btn-primary">
                Explore Our Products
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
