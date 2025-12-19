import about1 from '@/assets/about1.jpg';
import about2 from '@/assets/about2.jpg';
import about3 from '@/assets/about3.jpg';

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-primary/10" />
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border border-primary/10" />
      <div className="absolute top-1/3 right-20 w-8 h-8 rounded-full bg-primary/20" />

      <div className="container mx-auto px-4">
        {/* Images Grid */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-16 flex-wrap">
          {/* Image 1 with corner accent */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-accent" />
            <img 
              src={about2} 
              alt="Business handshake"
              className="w-40 h-52 md:w-48 md:h-64 object-cover shadow-lg"
            />
          </div>

          {/* Center Image with blue accents */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary" />
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-primary" />
            <img 
              src={about1} 
              alt="Property tour"
              className="w-52 h-64 md:w-64 md:h-80 object-cover shadow-xl relative z-10"
            />
            <div className="absolute -bottom-4 left-1/4 w-24 h-24 bg-realtrust-gray -z-10" />
          </div>

          {/* Image 3 with corner accent */}
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-accent" />
            <img 
              src={about3} 
              alt="Client consultation"
              className="w-40 h-52 md:w-48 md:h-64 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* About Us Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">About Us</h2>
          <div className="section-underline" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Fifteen years of experience in real estate, excellent customer service and a 
            commitment to work hard, listen and follow through. We provide quality services to 
            build relationships with clients and, more importantly, maintain those relationships 
            by communicating effectively.
          </p>
          <button className="btn-outline">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
