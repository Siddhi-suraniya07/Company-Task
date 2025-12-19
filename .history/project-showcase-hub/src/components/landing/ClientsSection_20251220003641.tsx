import { useEffect, useState } from 'react';
import { getClients } from '@/lib/api';
// Default client images
import client1 from '@/assets/client1.jpg';
import client2 from '@/assets/client2.jpg';
import client3 from '@/assets/client3.jpg';
import client4 from '@/assets/client4.jpg';
import client5 from '@/assets/client5.jpg';

interface Client {
  _id: string;
  name: string;
  description: string;
  designation: string;
  image?: string;
}

const defaultClients: Client[] = [
  { 
    _id: '1', 
    name: 'Rawman Smith', 
    designation: 'CEO, Real Estate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: client1 
  },
  { 
    _id: '2', 
    name: 'Shipra Kuyak', 
    designation: 'Brand Designer',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    image: client2 
  },
  { 
    _id: '3', 
    name: 'John Lapore', 
    designation: 'CEO, Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    image: client3 
  },
  { 
    _id: '4', 
    name: 'Marry Freeman', 
    designation: 'Marketing Manager',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    image: client4 
  },
  { 
    _id: '5', 
    name: 'Lucy', 
    designation: 'Sales Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.',
    image: client5 
  },
];

const ClientsSection = () => {
  const [clients, setClients] = useState<Client[]>(defaultClients);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchClients = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getClients();
        const apiClients: Client[] = res.data || [];
        if (mounted) setClients([...defaultClients, ...apiClients]);
      } catch (err) {
        console.log('Failed to load clients from API, using default clients', err);
        if (mounted) setError('Failed to load clients');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchClients();
    return () => { mounted = false; };
  }, []);

  const getClientImage = (client: Client, index: number) => {
    if (client.image && client.image.startsWith('http')) {
      return client.image;
    }
    const defaultImages = [client1, client2, client3, client4, client5];
    return client.image || defaultImages[index % defaultImages.length];
  };

  return (
    <section id="testimonials" className="py-20 bg-realtrust-gray relative">
      {/* Decorative dot */}
      <div className="absolute top-20 left-20 w-6 h-6 rounded-full bg-primary" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Happy Clients</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {clients.slice(0, 5).map((client, index) => (
            <div 
              key={client._id}
              className="bg-background rounded-lg p-6 card-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Client Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={getClientImage(client, index)}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-4">
                {client.description}
              </p>

              {/* Client Info */}
              <h4 className="text-primary font-semibold text-sm">{client.name}</h4>
              <p className="text-muted-foreground text-xs">{client.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
