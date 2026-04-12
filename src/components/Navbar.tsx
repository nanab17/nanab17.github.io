import { useState, useEffect } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
  </svg>
);

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Book", href: "#booking" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl text-foreground tracking-wider">
          BO3TT<span className="text-primary">__</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide uppercase">
              {link.label}
            </a>
          ))}
          <a href="https://www.instagram.com/bo3tt__/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="https://www.tiktok.com/@bo3tt__" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <TikTokIcon />
          </a>
          <Button size="sm" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}>
            Book Now
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-foreground font-medium text-lg">
              {link.label}
            </a>
          ))}
          <Button className="w-full" onClick={() => { setMobileOpen(false); document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }); }}>
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
