import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import brand_logo from "../../assets/brand_logo.png";

const links = [
  ["Work", "/projects"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Contact", "/contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isHome = path === "/";
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header
      className={`site-header ${isHome && !scrolled && !open ? "on-hero" : ""} ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="nav-inner">
        <div className="h-14">
          <Link to="/" className="brand" aria-label="Home">
            <img src={brand_logo} alt="Studio logo" />
          </Link>
        </div>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <Link key={to} to={to} activeProps={{ className: "active" }}>
              {label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="nav-cta">
          START A PROJECT <ArrowUpRight size={15} strokeWidth={1.5} />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, to], i) => (
            <Link key={to} to={to}>
              <small>0{i + 1}</small>
              {label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
          <p>DESIGN WITH PURPOSE · HYDERABAD</p>
        </nav>
      )}
    </header>
  );
}

export function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <p className="eyebrow">
      {number && <span>{number} — </span>}
      {children}
    </p>
  );
}
export function TextLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link to={to} className={`text-link ${light ? "light" : ""}`}>
      {children}
      <ArrowUpRight size={18} strokeWidth={1.5} />
    </Link>
  );
}
export function PageIntro({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <section className="page-intro wrap">
      <Eyebrow>{label}</Eyebrow>
      <div className="page-intro-grid">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Eyebrow>THE NEXT CHAPTER</Eyebrow>
            <h2>
              Let's make room
              <br />
              for <em>something new.</em>
            </h2>
            <TextLink to="/contact" light>
              START A CONVERSATION
            </TextLink>
          </div>
          <div className="footer-mark">
            AF<span>.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <Link to="/" className="footer-brand">
            ATELIER FORM.
          </Link>
          <p>
            Considered interiors, made personal.
            <br />
            Hyderabad, India
          </p>
          <nav aria-label="Footer navigation">
            <Link to="/projects">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            title="Back to top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowRight className="-rotate-90" size={20} />
          </Button>
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} ATELIER FORM</span>
          <span>INTERIOR DESIGN STUDIO · HYDERABAD</span>
        </div>
      </div>
    </footer>
  );
}
