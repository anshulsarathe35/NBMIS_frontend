


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [editedUsers, setEditedUsers] = useState({});

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/admin/users`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then(res => {
//         setUsers(res.data);
//         const initialEdits = {};
//         res.data.forEach(user => {
//           initialEdits[user._id] = {
//             canSale: user.canSale,
//             canReceipt: user.canReceipt,
//             canReport: user.canReport,
//           };
//         });
//         setEditedUsers(initialEdits);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   const handleCheckboxChange = (id, field) => {
//     setEditedUsers(prev => ({
//       ...prev,
//       [id]: {
//         ...prev[id],
//         [field]: !prev[id][field],
//       },
//     }));
//   };

//   const applyChanges = async (id) => {
//     try {
//       const { canSale, canReceipt, canReport } = editedUsers[id];
//       await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/admin/users/${id}/permissions`, {
//         canSale,
//         canReceipt,
//         canReport,
//       }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // Update main user list
//       setUsers(prev =>
//         prev.map(user =>
//           user._id === id ? { ...user, canSale, canReceipt, canReport } : user
//         )
//       );
//       alert('Permissions updated successfully');
//     } catch (err) {
//       console.error('Failed to update permission:', err);
//       alert('Failed to update. Please try again.');
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard - User Permissions</h2>
  
//       <div className="overflow-auto rounded-lg shadow-lg">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-purple-100 text-gray-700">
//               <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Sale Access</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Receipt Access</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Report Access</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id} className="hover:bg-purple-50">
//                 <td className="border px-4 py-2">{user.name}</td>
//                 <td className="border px-4 py-2">{user.email}</td>
//                 <td className="border px-4 py-2 text-center">
//                   <input
//                     type="checkbox"
//                     checked={editedUsers[user._id]?.canSale || false}
//                     onChange={() => handleCheckboxChange(user._id, 'canSale')}
//                     className="w-5 h-5 accent-purple-600"
//                   />
//                 </td>
//                 <td className="border px-4 py-2 text-center">
//                   <input
//                     type="checkbox"
//                     checked={editedUsers[user._id]?.canReceipt || false}
//                     onChange={() => handleCheckboxChange(user._id, 'canReceipt')}
//                     className="w-5 h-5 accent-purple-600"
//                   />
//                 </td>
//                 <td className="border px-4 py-2 text-center">
//                   <input
//                     type="checkbox"
//                     checked={editedUsers[user._id]?.canReport || false}
//                     onChange={() => handleCheckboxChange(user._id, 'canReport')}
//                     className="w-5 h-5 accent-purple-600"
//                   />
//                 </td>
//                 <td className="border px-4 py-2 text-center">
//                   <button
//                     onClick={() => applyChanges(user._id)}
//                     className="bg-purple-700 text-white px-4 py-1 rounded-md hover:bg-purple-800 transition"
//                   >
//                     Apply
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from 'react';
// import UserPermissions from './UserPermissions';
// import BranchReports from './BranchReports';
// import LockingDate from './LockingDate';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('permissions');

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-2xl p-4 rounded">
//         <h2 className="text-xl font-bold mb-6 text-purple-700 text-center">Admin Panel</h2>
//         <ul className="space-y-4">
//           <li>
//             <button
//               className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'permissions' ? 'bg-purple-200 font-semibold' : 'hover:bg-purple-200'}`}
//               onClick={() => setActiveTab('permissions')}
//             >
//               User Permissions
//             </button>
//           </li>
//           <li>
//             <button
//               className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'reports' ? 'bg-purple-200 font-semibold' : 'hover:bg-purple-200'}`}
//               onClick={() => setActiveTab('reports')}
//             >
//               Branch-wise Reports
//             </button>
//           </li>
//           <li>
//             <button
//               className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'locking' ? 'bg-purple-200 font-semibold' : 'hover:bg-purple-200'}`}
//               onClick={() => setActiveTab('locking')}
//             >
//               Locking Date
//             </button>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {activeTab === 'permissions' && <UserPermissions />}
//         {activeTab === 'reports' && <BranchReports />}
//         {activeTab === 'locking' && <LockingDate />}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;


import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import UserPermissions from './UserPermissions';
import BranchReports from './BranchReports';
// import LockingDate from './LockingDate'; //not completed

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('permissions');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-white p-4 shadow">
        <h2 className="text-lg font-bold text-purple-700">Admin Panel</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-purple-700">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`bg-white md:w-64 w-full md:block ${sidebarOpen ? 'block' : 'hidden'} md:relative shadow-2xl p-4`}>
        <h2 className="text-xl font-bold mb-6 text-purple-700 text-center hidden md:block">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'permissions' ? 'bg-purple-200 font-semibold' : 'hover:bg-purple-100'}`}
              onClick={() => {
                setActiveTab('permissions');
                setSidebarOpen(false);
              }}
            >
              User Permissions
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'reports' ? 'bg-purple-200 font-semibold' : 'hover:bg-purple-100'}`}
              onClick={() => {
                setActiveTab('reports');
                setSidebarOpen(false);
              }}
            >
              Branch-wise Reports
            </button>
          </li>
          {/* <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'locking' ? 'bg-purple-200 font-semibold' : 'hover:bg-purple-100'}`}
              onClick={() => {
                setActiveTab('locking');
                setSidebarOpen(false);
              }}
            >
              Locking Date
            </button>
          </li> */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'permissions' && <UserPermissions />}
        {activeTab === 'reports' && <BranchReports />}
        {/* {activeTab === 'locking' && <LockingDate />} //not completed */}
      </main>
    </div>
  );
};

export default AdminDashboard;
