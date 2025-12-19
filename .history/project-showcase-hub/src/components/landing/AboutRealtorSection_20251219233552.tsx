import realtorMain from '@/assets/realtor-main.jpg';
import realtorCouple from '@/assets/realtor-couple.jpg';
import realtorThumbsup from '@/assets/realtor-thumbsup.jpg';

const AboutRealtorSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/2 w-16 h-16 rounded-full bg-primary opacity-80" />
      <div className="absolute top-40 right-1/3 w-4 h-4 rounded-full bg-accent" />
      <div className="absolute bottom-20 left-10 dot-pattern w-32 h-32 opacity-40" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-realtrust-navy">Not Your Average</span>{' '}
              <span className="text-primary">Realtor</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Real Trust has an eye for staging properties with standout 
              coordinating design and effective marketing to get 
              homeowners top dollar in the market.
            </p>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Curved line decoration */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-110 -z-10" />
            
            <div className="flex items-center justify-center gap-4">
              {/* Main circular image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img 
                  src={realtorMain} 
                  alt="Professional Realtor"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Side images */}
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img 
                    src={realtorCouple} 
                    alt="Happy Couple"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img 
                    src={realtorThumbsup} 
                    alt="Successful Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRealtorSection;
