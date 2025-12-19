import { useEffect, useState } from 'react';
import { getContacts } from '@/lib/api';
import { RefreshCw, Inbox } from 'lucide-react';

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  createdAt?: string;
}

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getContacts();
      setContacts(response.data || []);
    } catch (err) {
      setError('Failed to load contacts. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Contact Form Responses</h2>
        <button
          onClick={fetchContacts}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <RefreshCw className="w-8 h-8 mx-auto text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Loading contacts...</p>
          </div>
        ) : error ? (
          <div className="p-12 text-center">
            <p className="text-destructive mb-4">{error}</p>
            <button
              onClick={fetchContacts}
              className="text-primary hover:underline"
            >
              Try again
            </button>
          </div>
        ) : contacts.length === 0 ? (
          <div className="p-12 text-center">
            <Inbox className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No contact submissions yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Full Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Mobile</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">City</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {contacts.map((contact, index) => (
                  <tr key={contact._id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{contact.fullName}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{contact.email}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{contact.mobile}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{contact.city}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
