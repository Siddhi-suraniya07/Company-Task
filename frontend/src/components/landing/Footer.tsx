import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { subscribeNewsletter } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import ctaBg from '@/assets/cta-bg.jpg';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await subscribeNewsletter(email);
      toast({
        title: 'Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to subscribe. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      {/* CTA Section with Background Image */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl text-primary-foreground font-light italic max-w-3xl mx-auto mb-8 leading-relaxed">
            Learn more about our listing process, as well as our
            <br className="hidden md:block" />
            additional staging and design work.
          </p>
          <button className="bg-background text-foreground px-8 py-3 rounded font-medium hover:bg-background/90 transition-colors">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* Blue Navigation Bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <button 
                onClick={() => scrollToSection('#hero')}
                className="text-primary-foreground text-sm hover:text-primary-foreground/80 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('#services')}
                className="text-primary-foreground text-sm hover:text-primary-foreground/80 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('#projects')}
                className="text-primary-foreground text-sm hover:text-primary-foreground/80 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('#testimonials')}
                className="text-primary-foreground text-sm hover:text-primary-foreground/80 transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-primary-foreground text-sm hover:text-primary-foreground/80 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Newsletter Subscribe */}
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <span className="text-primary-foreground text-sm whitespace-nowrap">Subscribe Us</span>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded bg-primary-foreground/20 border border-primary-foreground/40 text-primary-foreground placeholder:text-primary-foreground/60 text-sm focus:outline-none focus:border-primary-foreground w-48"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent text-accent-foreground px-6 py-2 rounded text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? '...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Dark Footer Bottom */}
      <div className="bg-realtrust-navy py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-primary-foreground/60 text-sm">
              All Rights Reserved 2023
            </p>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary-foreground" />
              <span className="text-xl font-bold text-primary-foreground">
                Real <span className="text-primary">Trust</span>
              </span>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-4 h-4 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Admin Panel Link */}
          <div className="text-center mt-4 pt-4 border-t border-primary-foreground/10">
            <Link 
              to="/admin" 
              className="text-sm text-primary hover:underline"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
