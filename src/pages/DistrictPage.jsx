// import { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import axios from 'axios';

// const DistrictPage = () => {
//   const { token } = useAuth();
//   const [districts, setDistricts] = useState([]);
//   const [name, setName] = useState('');
//   const [editId, setEditId] = useState(null);


// const fetchDistricts = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/district`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setDistricts(res.data);
//     } catch (err) {
//       console.error('Error fetching districts', err);
//     }
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/district/${editId}`, { name }, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/district`, { name }, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       setName('');
//       setEditId(null);
//       fetchDistricts();
//     } catch (err) {
//       console.error('Error saving district', err);
//     }
//   };

//   const handleEdit = (district) => {
//     setName(district.name);
//     setEditId(district._id);
//   };

//   const handleDelete = async (id) => {
//     if (confirm('Are you sure you want to delete this district?')) {
//       try {
//         await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/district/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         fetchDistricts();
//       } catch (err) {
//         console.error('Error deleting district', err);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchDistricts();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">District Master</h2>

//       <form onSubmit={handleSubmit} className="mb-4 flex gap-4 items-center">
//         <input
//           type="text"
//           className="border p-2 rounded w-64"
//           placeholder="District name"
//           value={name}
//           onChange={(e) => setName(e.target.value.toUpperCase())}
//           required
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           {editId ? 'Update' : 'Add'}
//         </button>
//       </form>

//       <table className="w-full border mt-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">District Name</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {districts.map((district) => (
//             <tr key={district._id}>
//               <td className="border px-4 py-2">{district.name}</td>
//               <td className="border px-4 py-2 space-x-2">
//                 <button
//                   className="bg-yellow-400 px-2 py-1 rounded"
//                   onClick={() => handleEdit(district)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                   onClick={() => handleDelete(district._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DistrictPage;


// import { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DistrictPage = () => {
//   const { token, user } = useAuth();
//   const navigate = useNavigate();

//   const [districts, setDistricts] = useState([]);
//   const [name, setName] = useState('');
//   const [editId, setEditId] = useState(null);

//   // Redirect if user doesn't have permission
//   useEffect(() => {
//     if (user && !user.canDistrict) {
//       alert('Access denied: You do not have permission to manage districts.');
//       navigate('/'); // Or redirect to a dashboard or home
//     }
//   }, [user, navigate]);

//   const fetchDistricts = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/district`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setDistricts(res.data);
//     } catch (err) {
//       console.error('Error fetching districts', err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/district/${editId}`, { name }, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/district`, { name }, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       setName('');
//       setEditId(null);
//       fetchDistricts();
//     } catch (err) {
//       console.error('Error saving district', err);
//     }
//   };

//   const handleEdit = (district) => {
//     setName(district.name);
//     setEditId(district._id);
//   };

//   const handleDelete = async (id) => {
//     if (confirm('Are you sure you want to delete this district?')) {
//       try {
//         await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/district/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         fetchDistricts();
//       } catch (err) {
//         console.error('Error deleting district', err);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchDistricts();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">District Master</h2>

//       <form onSubmit={handleSubmit} className="mb-4 flex gap-4 items-center">
//         <input
//           type="text"
//           className="border p-2 rounded w-64"
//           placeholder="District name"
//           value={name}
//           onChange={(e) => setName(e.target.value.toUpperCase())}
//           required
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           {editId ? 'Update' : 'Add'}
//         </button>
//       </form>

//       <table className="w-full border mt-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">District Name</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {districts.map((district) => (
//             <tr key={district._id}>
//               <td className="border px-4 py-2">{district.name}</td>
//               <td className="border px-4 py-2 space-x-2">
//                 <button
//                   className="bg-yellow-400 px-2 py-1 rounded"
//                   onClick={() => handleEdit(district)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                   onClick={() => handleDelete(district._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DistrictPage;
// import React, { useEffect, useState } from 'react';

// const DistrictPage = () => {
//   const [hasPermission, setHasPermission] = useState(true); // Default true for initial render

//   useEffect(() => {
//     const permissions = JSON.parse(localStorage.getItem('permissions')) || [];
//     if (!permissions.includes('canDistrict')) {
//       setHasPermission(false);
//     }
//   }, []);

//   if (!hasPermission) {
//     return (
//       <div className="p-8 text-center">
//         <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
//         <p className="text-lg text-gray-700">You do not have permission to access this page.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">District Management</h1>
//       {/* Replace this section with your actual district form/table components */}
//       <p className="text-gray-700">Welcome to the District Management page.</p>
//     </div>
//   );
// };

// export default DistrictPage;
import { useEffect, useState } from 'react';
import axios from 'axios';

const DistrictPage = () => {
  const [districts, setDistricts] = useState([]);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);

  const [canAccess, setCanAccess] = useState(false);
  const [checkingPermission, setCheckingPermission] = useState(true);

  // ✅ Permission Check via Profile API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const hasPermission = res.data?.canDistrict || false;
        setCanAccess(hasPermission);
      } catch (err) {
        console.error('Failed to fetch user profile:', err.response?.data || err.message);
      } finally {
        setCheckingPermission(false);
      }
    };

    fetchUser();
  }, []);

  const fetchDistricts = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/district`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDistricts(res.data);
    } catch (err) {
      console.error('Error fetching districts', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (editId) {
        await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/api/district/${editId}`,
          { name },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/district`,
          { name },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      setName('');
      setEditId(null);
      fetchDistricts();
    } catch (err) {
      console.error('Error saving district', err);
    }
  };

  const handleEdit = (district) => {
    setName(district.name);
    setEditId(district._id);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this district?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/district/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchDistricts();
      } catch (err) {
        console.error('Error deleting district', err);
      }
    }
  };

  useEffect(() => {
    if (canAccess) {
      fetchDistricts();
    }
  }, [canAccess]);

  // 🕒 Show loading while checking permission
  if (checkingPermission) {
    return (
      <div className="p-8 text-center text-lg text-gray-600">
        Checking permissions...
      </div>
    );
  }

  // ❌ Show access denied message if no permission
  if (!canAccess) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
        <p className="text-lg text-gray-700">You do not have permission to access this page.</p>
      </div>
    );
  }

  // ✅ Main content if allowed
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">District Master</h2>

      <form onSubmit={handleSubmit} className="mb-4 flex gap-4 items-center">
        <input
          type="text"
          className="border p-2 rounded w-64"
          placeholder="District name"
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">District Name</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {districts.map((district) => (
            <tr key={district._id}>
              <td className="border px-4 py-2">{district.name}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="bg-yellow-400 px-2 py-1 rounded"
                  onClick={() => handleEdit(district)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(district._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistrictPage;
