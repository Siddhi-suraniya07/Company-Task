import { useState } from 'react';
import { submitContact } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContact(formData);
      toast({
        title: 'Success!',
        description: 'Your consultation request has been submitted.',
      });
      setFormData({ fullName: '', email: '', mobile: '', city: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Consultation,
              <br />
              Design,
              <br />
              <span className="text-primary">&amp; Marketing</span>
            </h1>
          </div>

          {/* Right Form */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary rounded-lg p-8 shadow-2xl max-w-md ml-auto">
              <h2 className="text-2xl font-semibold text-primary-foreground mb-6 text-center">
                Get a Free
                <br />
                Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground py-3 rounded font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Get a Quick Quote'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
