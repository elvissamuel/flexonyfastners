import type { Metadata } from "next";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import ContactDetails from "@/components/layout/ContactDetails";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | Flexony Fasteners",
};

export default function ContactPage() {
  return (
    <div className="site">
      <SiteNav />

      <PageHero
        eyebrow="Reach Out"
        title="Contact Us"
        subtitle="Have a question or need a quote? We'd love to hear from you — our team responds within 12 hours."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="site-contact-page">
        <div className="home-container">
          <ScrollReveal>
            <div className="site-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63426.01109030453!2d3.3062707927637045!3d6.505769295222974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bb418208bfd%3A0x87b209b536eae32d!2sAjebamidele%20Iron%20Market!5e0!3m2!1sen!2sng!4v1676030487293!5m2!1sen!2sng"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flexony office location"
              />
            </div>
          </ScrollReveal>

          <div className="home-contact-grid">
            <ScrollReveal>
              <ContactDetails />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="site-form-card">
                <h3>Send us a message</h3>
                <p>
                  Kindly fill the form below, and someone from our team will
                  reach out to you in less than 12 hours.
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
