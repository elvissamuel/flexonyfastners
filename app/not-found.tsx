import Link from "next/link";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <div className="site">
      <SiteNav />
      <main className="site-not-found">
        <div className="site-not-found-bg">404</div>
        <div className="site-not-found-content">
          <h2>Page Not Found</h2>
          <p>
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>
          <Link href="/" className="home-btn home-btn-primary">
            Return Home
            <i className="fas fa-home" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
