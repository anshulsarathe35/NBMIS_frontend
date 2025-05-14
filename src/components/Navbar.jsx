


// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   // return (
//   //   <nav className="bg-purple-900 text-white p-4 flex justify-between items-center">
//   //     <div className="flex items-center space-x-4">
//   //       <img src="/nblogo.webp" alt="logo" className="rounded" />
//   //       <div className="space-x-4 font-semibold">
//   //         {user && (
//   //           <>
//   //           <div className='text-lg bg-white text-black rounded py-1 px-2 font-semibold absolute end-96 top-4'>Edition: {user.branch}</div>
//   //             <Link to="/">Home</Link>
//   //             <Link to="/sale-entry">Sale</Link>
//   //             <Link to="/receipt-entry">Receipts</Link>
//   //             <Link to="/reports">Reports</Link>
//   //             <Link to="/districts">Districts</Link>
//   //             {user.role === 'admin' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
//   //           </>
//   //         )}
//   //       </div>
//   //     </div>

      

//   //     <div className="space-x-4 flex items-center">
//   //       {user ? (
//   //         <>
//   //           <span className="text-sm hidden md:inline font-semibold font-xl">
//   //             Welcome, {user.name}
//   //           </span>
//   //           <button
//   //             onClick={handleLogout}
//   //             className="hover:underline rounded-full font-semibold bg-white font-xl text-black pl-3 pr-3 pt-2 pb-2"
//   //           >
//   //             Logout
//   //           </button>
//   //         </>
//   //       ) : (
//   //         <>
//   //           <Link to="/login" className="hover:underline">
//   //             Login
//   //           </Link>
//   //           <Link to="/register" className="hover:underline">
//   //             Register
//   //           </Link>
//   //         </>
//   //       )}
//   //     </div>
//   //   </nav>
//   // );

//   return (
//     <nav className="bg-purple-900 text-white p-4">
//       <div className="flex items-center justify-between">
//         {/* Logo and Edition */}
//         <div className="flex items-center space-x-4">
//           <img src="src/assets/nblogo.webp" alt="logo" className=" rounded" />
//           {user && (
//             <span className="hidden sm:inline-block text-sm bg-white text-black rounded px-2 py-1 font-semibold">
//               Edition: {user.branch}
//             </span>
//           )}
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-4 font-semibold">
//           {user && (
//             <>
//               <Link to="/">Home</Link>
//               <Link to="/sale-entry">Sale</Link>
//               <Link to="/receipt-entry">Receipts</Link>
//               <Link to="/reports">Reports</Link>
//               <Link to="/districts">Districts</Link>
//               {user.role === 'admin' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
//             </>
//           )}
//         </div>

//         {/* Desktop Auth Info */}
//         <div className="hidden md:flex items-center space-x-4">
//           {user ? (
//             <>
//               <span className="text-sm font-semibold">Welcome, {user.name}</span>
//               <button
//                 onClick={handleLogout}
//                 className="hover:underline rounded-full font-semibold bg-white text-black px-3 py-2"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="hover:underline">Login</Link>
//               <Link to="/register" className="hover:underline">Register</Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden mt-4 flex flex-col space-y-3 font-semibold">
//           {user && (
//             <>
//               <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//               <Link to="/sale-entry" onClick={() => setMenuOpen(false)}>Sale</Link>
//               <Link to="/receipt-entry" onClick={() => setMenuOpen(false)}>Receipts</Link>
//               <Link to="/reports" onClick={() => setMenuOpen(false)}>Reports</Link>
//               <Link to="/districts" onClick={() => setMenuOpen(false)}>Districts</Link>
//               {user.role === 'admin' && (
//                 <Link to="/admin-dashboard" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link>
//               )}
//               <span className="text-sm">Welcome, {user.name}</span>
//               <button
//                 onClick={() => {
//                   setMenuOpen(false);
//                   handleLogout();
//                 }}
//                 className="hover:underline rounded-full font-semibold bg-white text-black px-3 py-2"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//           {!user && (
//             <>
//               <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
//               <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-purple-900 text-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo and Edition */}
        <div className="flex items-center space-x-4">
          <img src="src/assets/nblogo.webp" alt="logo" className=" rounded" />
          {user && (
            <span className="hidden sm:inline-block text-sm bg-white text-black rounded px-2 py-1 font-semibold">
              Edition: {user.branch}
            </span>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 font-semibold">
          {user && (
            <>
              <Link to="/">Home</Link>
              <Link to="/sale-entry">Sale</Link>
              <Link to="/receipt-entry">Receipts</Link>
              <Link to="/reports">Reports</Link>
              <Link to="/districts">Districts</Link>
              {user.role === 'admin' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
            </>
          )}
        </div>

        {/* Desktop Auth Info */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm font-semibold">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="hover:underline rounded-full font-semibold bg-white text-black px-3 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 font-semibold">
          {user && (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/sale-entry" onClick={() => setMenuOpen(false)}>Sale</Link>
              <Link to="/receipt-entry" onClick={() => setMenuOpen(false)}>Receipts</Link>
              <Link to="/reports" onClick={() => setMenuOpen(false)}>Reports</Link>
              <Link to="/districts" onClick={() => setMenuOpen(false)}>Districts</Link>
              {user.role === 'admin' && (
                <Link to="/admin-dashboard" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link>
              )}
              <span className="text-sm">Welcome, {user.name}</span>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="hover:underline rounded-full font-semibold bg-white text-black px-3 py-2"
              >
                Logout
              </button>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
