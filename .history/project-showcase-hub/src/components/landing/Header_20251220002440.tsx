import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/', active: true },
    { name: 'SERVICES', path: '#services' },
    { name: 'ABOUT PROJECTS', path: '#projects' },
    { name: 'TESTIMONIALS', path: '#testimonials' },
  ];

  const scrollToSection = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-realtrust-navy">
                Real <span className="text-primary">Trust</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.path)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link.active ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Link
              to="#contact"
              onClick={() => scrollToSection('#contact')}
              className="bg-accent text-accent-foreground px-6 py-2 rounded text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              CONTACT
            </Link>
            <Link
              to="/admin"
              className="border border-border px-4 py-2 rounded text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className={`text-sm font-medium text-left transition-colors hover:text-primary ${
                    link.active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-accent text-accent-foreground px-6 py-2 rounded text-sm font-medium hover:bg-accent/90 transition-colors w-fit"
              >
                CONTACT
              </button>
              <Link
                to="/admin"
                onClick={() => setIsMenuOpen(false)}
                className="border border-border px-4 py-2 rounded text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors w-fit"
              >
                Admin
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
