import { Navigate } from 'react-router-dom';

const AdminIndex = () => {
  return <Navigate to="/admin/add-project" replace />;
};

export default AdminIndex;
