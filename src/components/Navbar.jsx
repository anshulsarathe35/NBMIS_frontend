


import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-purple-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/nblogo.webp" alt="logo" className="rounded" />
        <div className="space-x-4 font-semibold">
          {user && (
            <>
            <div className='text-lg bg-white text-black rounded py-1 px-2 font-semibold absolute end-96 top-4'>Edition: {user.branch}</div>
              <Link to="/">Home</Link>
              <Link to="/sale-entry">Sale</Link>
              <Link to="/receipt-entry">Receipts</Link>
              <Link to="/reports">Reports</Link>
              <Link to="/districts">Districts</Link>
              {user.role === 'admin' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
            </>
          )}
        </div>
      </div>

      

      <div className="space-x-4 flex items-center">
        {user ? (
          <>
            <span className="text-sm hidden md:inline font-semibold font-xl">
              Welcome, {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="hover:underline rounded-full font-semibold bg-white font-xl text-black pl-3 pr-3 pt-2 pb-2"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
