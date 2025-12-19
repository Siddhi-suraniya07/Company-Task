import { useEffect, useState } from 'react';
import { getNewsletterSubscriptions } from '@/lib/api';
import { RefreshCw, Mail, Inbox } from 'lucide-react';

interface Newsletter {
  _id: string;
  email: string;
  createdAt?: string;
}

const NewsletterPage = () => {
  const [subscriptions, setSubscriptions] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscriptions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getNewsletterSubscriptions();
      setSubscriptions(response.data || []);
    } catch (err) {
      setError('Failed to load subscriptions. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Newsletter Subscriptions</h2>
        <button
          onClick={fetchSubscriptions}
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
            <p className="text-muted-foreground">Loading subscriptions...</p>
          </div>
        ) : error ? (
          <div className="p-12 text-center">
            <p className="text-destructive mb-4">{error}</p>
            <button
              onClick={fetchSubscriptions}
              className="text-primary hover:underline"
            >
              Try again
            </button>
          </div>
        ) : subscriptions.length === 0 ? (
          <div className="p-12 text-center">
            <Inbox className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No newsletter subscriptions yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email Address</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Subscribed On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {subscriptions.map((sub, index) => (
                  <tr key={sub._id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        {sub.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Stats */}
        {!loading && !error && subscriptions.length > 0 && (
          <div className="bg-muted px-6 py-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Total Subscribers: <span className="font-semibold text-foreground">{subscriptions.length}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPage;
