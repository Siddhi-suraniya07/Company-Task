import { Home, Brush, DollarSign, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Potential ROI',
    description: 'Whether you are looking to buy a fixer-upper, renovate your current home for a sale, or sell a property through potential returns for investments.',
  },
  {
    icon: Brush,
    title: 'Design',
    description: 'Our in-house interior designer makes the process seamless, guides you through your design options and coordinates contractors to complete the home upgrades.',
  },
  {
    icon: DollarSign,
    title: 'Marketing',
    description: 'Staging consultation, professional photos and a sophisticated digital marketing plan accompany every listing to reach today\'s buyers.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="services" className="py-20 bg-realtrust-gray relative">
      {/* Decorative dot */}
      <div className="absolute top-10 right-1/4 w-4 h-4 rounded-full bg-primary" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="section-underline" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-8 text-center card-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrow */}
        <div className="flex justify-end mt-8">
          <button className="text-accent hover:text-accent/80 transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
