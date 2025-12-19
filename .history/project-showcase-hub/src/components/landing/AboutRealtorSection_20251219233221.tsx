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

          {/* Right Images - overlapping rectangular layout to match provided design */}
          <div className="relative flex items-center justify-center">
            {/* Decorative faint ring */}
            <div className="absolute inset-0 border-2 border-primary/10 rounded-lg scale-105 -z-10" />

            {/* Center large image */}
            <div className="relative z-20 w-72 h-48 md:w-96 md:h-64 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={realtorMain}
                alt="Professional Realtor"
                className="w-full h-full object-cover"
              />
              {/* Blue corner accent (top-right) */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500" />
            </div>

            {/* Left smaller image */}
            <div className="absolute left-0 top-6 z-10 w-40 h-28 md:w-48 md:h-32 rounded-md overflow-hidden shadow-lg border border-primary/10">
              <img
                src={realtorCouple}
                alt="Happy Couple"
                className="w-full h-full object-cover"
              />
              {/* Orange corner accent (bottom-left) */}
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-orange-400" />
            </div>

            {/* Right smaller image */}
            <div className="absolute right-0 top-6 z-10 w-40 h-28 md:w-48 md:h-32 rounded-md overflow-hidden shadow-lg border border-primary/10">
              <img
                src={realtorThumbsup}
                alt="Successful Agent"
                className="w-full h-full object-cover"
              />
              {/* Sky accent (top-left) */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-sky-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRealtorSection;
