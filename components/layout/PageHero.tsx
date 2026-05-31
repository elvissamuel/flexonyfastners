import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="site-page-hero">
      <div className="site-page-hero-overlay" />
      <div className="home-container site-page-hero-content">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="site-breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label}>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <i className="fas fa-chevron-right" />
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="site-page-hero-eyebrow">{eyebrow}</span>}
        <h1 className="site-page-hero-title">{title}</h1>
        {subtitle && <p className="site-page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
