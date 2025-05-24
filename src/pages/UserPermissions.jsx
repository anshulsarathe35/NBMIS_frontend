// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserPermissionsPage = () => {
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
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Permissions</h2>
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

// export default UserPermissionsPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPermissionsPage = () => {
  const [users, setUsers] = useState([]);
  const [editedUsers, setEditedUsers] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        setUsers(res.data);
        const initialEdits = {};
        res.data.forEach(user => {
          initialEdits[user._id] = {
            canSale: user.canSale,
            canReceipt: user.canReceipt,
            canReport: user.canReport,
            canDistrict: user.canDistrict,
            canBranchReports: user.canBranchReports,
          };
        });
        setEditedUsers(initialEdits);
      })
      .catch(err => console.error(err));
  }, []);

  const handleCheckboxChange = (id, field) => {
    setEditedUsers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: !prev[id][field],
      },
    }));
  };

  const applyChanges = async (id) => {
    try {
      const {
        canSale,
        canReceipt,
        canReport,
        canDistrict,
        canBranchReports,
      } = editedUsers[id];

      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/admin/users/${id}/permissions`, {
        canSale,
        canReceipt,
        canReport,
        canDistrict,
        canBranchReports,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(prev =>
        prev.map(user =>
          user._id === id
            ? { ...user, canSale, canReceipt, canReport, canDistrict, canBranchReports }
            : user
        )
      );
      alert('Permissions updated successfully');
    } catch (err) {
      console.error('Failed to update permission:', err);
      alert('Failed to update. Please try again.');
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Permissions</h2>
      <div className="overflow-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead>
            <tr className="bg-purple-100 text-gray-700">
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Branch</th>
              <th className="border px-4 py-2 text-center">Sale</th>
              <th className="border px-4 py-2 text-center">Receipt</th>
              <th className="border px-4 py-2 text-center">Report</th>
              <th className="border px-4 py-2 text-center">District</th>
              <th className="border px-4 py-2 text-center">Branch Reports</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="hover:bg-purple-50">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.branch}</td>
                {['canSale', 'canReceipt', 'canReport', 'canDistrict', 'canBranchReports'].map(field => (
                  <td key={field} className="border px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={editedUsers[user._id]?.[field] || false}
                      onChange={() => handleCheckboxChange(user._id, field)}
                      className="w-5 h-5 accent-purple-600"
                    />
                  </td>
                ))}
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => applyChanges(user._id)}
                    className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800 transition"
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPermissionsPage;
