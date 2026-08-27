import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import ProductCatalogGrid from "@/components/layout/ProductCatalogGrid";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { products } from "@/data/products";

const featuredSlugs = [
  "hex-bolt",
  "allen-bolt",
  "anchor-bolt",
  "stud-bolt",
  "spring-washer",
  "rivet-nut",
  "threaded-rod",
  "plastic-fisher",
  "electrode",
  "hex-nut",
  "u-bolt",
  "flat-washer",
];

const featuredProducts = featuredSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter((p): p is (typeof products)[number] => Boolean(p));

const testimonials = [
  {
    name: "Paul Chima",
    initials: "PC",
    text: "I purchased Hex bolts in very large quantity and was very impressed with the quality of product I got, not to mention the warm customer service I received.",
  },
  {
    name: "Precious Oyewole",
    initials: "PO",
    text: "I reached out to customer service to inquire about spring washers and got a response in less than an hour with all the details I needed.",
  },
  {
    name: "Adewale Tomisin",
    initials: "AT",
    text: "I love your products and the price was very much better than what I was being offered in other places.",
  },
];

export default function HomePage() {
  return (
    <div className="site">
      <SiteNav transparentHero />

      <section className="home-hero">
        <div className="home-hero-overlay" />
        <div className="home-container home-hero-content">
          <ScrollReveal>
            {/* <div className="home-hero-badge">
              <i className="fas fa-award" />
              8+ Years of Excellence in Fasteners
            </div> */}
            <h1 className="home-hero-title">
              The Best of Everything{" "}
              <span>Bolt, Nut &amp; Screws</span>
            </h1>
            <p className="home-hero-desc">
              We are dealers and suppliers of all kinds of high quality
              fasteners — bolts, nuts, washers, anchors, studs, U bolts,
              rivets, screws, threaded rods, plastic fishers, and electrodes.
            </p>
            <div className="home-hero-actions">
              <Link href="/products" className="home-btn home-btn-primary">
                Browse Products
                <i className="fas fa-arrow-right" />
              </Link>
              <Link href="/about" className="home-btn home-btn-secondary">
                Learn More
              </Link>
            </div>
            <div className="home-hero-stats">
              <div className="home-hero-stat">
                <strong>36<span>+</span></strong>
                <small>Product Categories</small>
              </div>
              <div className="home-hero-stat">
                <strong>8<span>+</span></strong>
                <small>Years Experience</small>
              </div>
              <div className="home-hero-stat">
                <strong>100<span>%</span></strong>
                <small>Quality Assured</small>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="home-hero-scroll">
          <span>Scroll</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      <section className="home-values">
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
                To increase Fastener industry standard for product quality,
                service and value by exceeding customer expectations through
                continual improvement.
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
                <li>Quality Products</li>
                <li>Excellent Customer Service</li>
                <li>Respect for Customers&apos; opinion and choice</li>
                <li>Integrity, Innovation &amp; Excellence</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-about">
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
              <h2 className="home-section-title">Built on Quality &amp; Trust</h2>
              <p>
                Flexony Fasteners and Hardware Limited is a leading dealer and
                supplier of Bolt and Nut with superior quality in the Fastener
                Industry. Our product quality always meets international
                standards.
              </p>
              <p>
                We serve customers with prompt delivery, fair pricing, and
                top-notch after-sales services — combining quality control,
                superior knowledge, and competitive prices to deliver service
                unmatched by our competitors.
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
                  <i className="fas fa-headset" />
                  24/7 Support
                </div>
                <div className="home-about-feature">
                  <i className="fas fa-tags" />
                  Fair Pricing
                </div>
              </div>
              <Link href="/about" className="home-btn home-btn-outline">
                Learn More About Us
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-products">
        <div className="home-container">
          <ScrollReveal className="home-products-header">
            <span className="home-eyebrow" style={{ color: "var(--home-accent)" }}>
              Our Catalog
            </span>
            <h2 className="home-section-title">Our Products</h2>
            <p className="home-section-subtitle">
              Over 8 years of excellence in the fastener industry — browse our
              most popular products.
            </p>
          </ScrollReveal>

          <ProductCatalogGrid products={featuredProducts} variant="dark" />

          <div className="home-products-cta">
            <Link href="/products" className="home-btn home-btn-primary">
              View All Products
              <i className="fas fa-th" />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-testimonials">
        <div className="home-testimonials-overlay" />
        <div className="home-container">
          <ScrollReveal className="home-testimonials-header">
            <span className="home-eyebrow">Testimonials</span>
            <h2 className="home-section-title">What Our Customers Say</h2>
            <p className="home-section-subtitle">
              Real feedback from businesses and individuals who trust Flexony.
            </p>
          </ScrollReveal>

          <div className="home-testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 3) as 0 | 1 | 2}>
                <div className="home-testimonial-card">
                  <div className="home-testimonial-stars">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fas fa-star" />
                    ))}
                  </div>
                  <p className="home-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="home-testimonial-author">
                    <div className="home-testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="home-testimonial-name">{t.name}</div>
                      <div className="home-testimonial-role">Verified Customer</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact">
        <div className="home-container">
          <ScrollReveal className="home-contact-header">
            <span className="home-eyebrow">Get in Touch</span>
            <h2 className="home-section-title">Contact Us</h2>
            <p className="home-section-subtitle">
              Fill out the form and someone from our team will reach out within
              12 hours.
            </p>
          </ScrollReveal>

          <div className="home-contact-grid">
            <ScrollReveal>
              <div className="home-contact-info">
                <div className="home-contact-item">
                  <div className="home-contact-item-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>
                      No 1&2 Olorunsogo Street, Iron Market Orile Iganmu,
                      Badagry Express Way, Lagos
                    </p>
                  </div>
                </div>
                <div className="home-contact-item">
                  <div className="home-contact-item-icon">
                    <i className="far fa-clock" />
                  </div>
                  <div>
                    <h4>Open Hours</h4>
                    <p>Mondays – Saturdays (8am – 6pm)</p>
                  </div>
                </div>
                <div className="home-contact-item">
                  <div className="home-contact-item-icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>flexonyfasteners@gmail.com</p>
                  </div>
                </div>
                <div className="home-contact-item">
                  <div className="home-contact-item-icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <h4>Call or WhatsApp</h4>
                    <p>+234 706 880 0252</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="home-contact-form-card">
                <h3>Send us a message</h3>
                <p>
                  Kindly fill the form below and we&apos;ll get back to you
                  promptly.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
