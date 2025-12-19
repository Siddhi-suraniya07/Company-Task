import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  Home, 
  FolderPlus, 
  UserPlus, 
  MessageSquare, 
  Mail, 
  Menu,
  X,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: FolderPlus, label: 'Add Project', path: '/admin/add-project' },
  { icon: UserPlus, label: 'Add Client', path: '/admin/add-client' },
  { icon: MessageSquare, label: 'Contact Responses', path: '/admin/contacts' },
  { icon: Mail, label: 'Newsletter Subs', path: '/admin/newsletter' },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-realtrust-gray flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0 md:w-20'} bg-realtrust-navy transition-all duration-300 fixed md:relative h-full z-40`}>
        <div className="p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <Home className="h-8 w-8 text-primary" />
            {sidebarOpen && (
              <span className="text-xl font-bold text-primary-foreground">
                Real <span className="text-primary">Trust</span>
              </span>
            )}
          </Link>

          {/* Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-primary-foreground/70 hover:bg-primary/20'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Back to Site */}
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary/20 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm">Back to Site</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-background shadow-sm p-4 flex items-center justify-between">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1 className="text-xl font-semibold text-foreground">Admin Panel</h1>
          <div className="w-10" />
        </header>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
