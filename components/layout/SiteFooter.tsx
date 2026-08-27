import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="home-footer">
      <div className="home-container">
        <div className="home-footer-grid">
          <div className="home-footer-brand">
            <Link href="/" className="home-footer-logo">
              <img src="/assets/imgs/flexony-logo-trans2.png" alt="Flexony" />
            </Link>
            <p>
              Leading dealer and supplier of bolts, nuts, and hardware with
              superior quality. Serving domestic and international customers
              since 2016.
            </p>
          </div>

          <div className="home-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="home-footer-col">
            <h4>Contact</h4>
            <span>flexonyfasteners@gmail.com</span>
            <span>+234 706 880 0252</span>
            <span>07068800252</span>
          </div>

          <div className="home-footer-col">
            <h4>Follow Us</h4>
            <div className="home-footer-social">
              <a
                href="https://web.facebook.com/flexonyfasteners"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1vddyu3xwsum3&utm_content=6k6ql46"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@flexony_fasteners?_r=1&_t=ZS-96oNIPrI0lJ"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok" />
              </a>
              <a
                href="https://twitter.com/FelixUmeh2?t=4O4MKkZdjcWs8TSS-9c4ew&s=09"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/felix-umeh-713a821b0"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span style={{ marginTop: "1rem" }}>
              No 1&2 Olorunsogo Street, Iron Market Orile Iganmu, Badagry Express
              Way, Lagos
            </span>
          </div>
        </div>

        <div className="home-footer-bottom">
          <span>© 2023 Flexony Fasteners and Hardware Limited. All rights reserved.</span>
          <span>Built for excellence in the fastener industry.</span>
        </div>
      </div>
    </footer>
  );
}
