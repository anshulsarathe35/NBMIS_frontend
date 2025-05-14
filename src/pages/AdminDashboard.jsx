// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/admin/users') // get all users
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const togglePermission = async (id, field) => {
//     const user = users.find(u => u._id === id);
//     const updated = { ...user, [field]: !user[field] };

//     try {
//       await axios.put(`http://localhost:5000/api/admin/users/${id}/permissions`, {
//         canSale: updated.canSale,
//         canReceipt: updated.canReceipt,
//       });

//       setUsers(users.map(u => (u._id === id ? updated : u)));
//     } catch (err) {
//       console.error('Failed to update permission');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold mb-4">Admin Dashboard - User Permissions</h2>
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Can Sale</th>
//             <th className="border p-2">Can Receipt</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user._id}>
//               <td className="border p-2">{user.name}</td>
//               <td className="border p-2">{user.email}</td>
//               <td className="border p-2 text-center">
//                 <input
//                   type="checkbox"
//                   checked={user.canSale}
//                   onChange={() => togglePermission(user._id, 'canSale')}
//                 />
//               </td>
//               <td className="border p-2 text-center">
//                 <input
//                   type="checkbox"
//                   checked={user.canReceipt}
//                   onChange={() => togglePermission(user._id, 'canReceipt')}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);

//   const token = localStorage.getItem('token'); // ✅ Assuming token is saved here

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/admin/users', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const togglePermission = async (id, field) => {
//     const user = users.find(u => u._id === id);
//     const updated = { ...user, [field]: !user[field] };

//     try {
//       await axios.put(`http://localhost:5000/api/admin/users/${id}/permissions`, {
//         canSale: updated.canSale,
//         canReceipt: updated.canReceipt,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setUsers(users.map(u => (u._id === id ? updated : u)));
//     } catch (err) {
//       console.error('Failed to update permission:', err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold mb-4">Admin Dashboard - User Permissions</h2>
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Can Sale</th>
//             <th className="border p-2">Can Receipt</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user._id}>
//               <td className="border p-2">{user.name}</td>
//               <td className="border p-2">{user.email}</td>
//               <td className="border p-2 text-center">
//                 <input
//                   type="checkbox"
//                   checked={user.canSale}
//                   onChange={() => togglePermission(user._id, 'canSale')}
//                 />
//               </td>
//               <td className="border p-2 text-center">
//                 <input
//                   type="checkbox"
//                   checked={user.canReceipt}
//                   onChange={() => togglePermission(user._id, 'canReceipt')}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
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
      const { canSale, canReceipt, canReport } = editedUsers[id];
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/admin/users/${id}/permissions`, {
        canSale,
        canReceipt,
        canReport,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update main user list
      setUsers(prev =>
        prev.map(user =>
          user._id === id ? { ...user, canSale, canReceipt, canReport } : user
        )
      );
      alert('Permissions updated successfully');
    } catch (err) {
      console.error('Failed to update permission:', err);
      alert('Failed to update. Please try again.');
    }
  };

  // return (
  //   <div className="p-6 bg-gray-200">
  //     <h2 className="text-xl font-semibold mb-4">Admin Dashboard - User Permissions</h2>
  //     <table className="w-full border">
  //       <thead>
  //         <tr className="bg-gray-100">
  //           <th className="border p-2">Name</th>
  //           <th className="border p-2">Email</th>
  //           <th className="border p-2">Sale Access</th>
  //           <th className="border p-2">Receipt Access</th>
  //           <th className="border p-2">Report Access</th>
  //           <th className="border p-2">Actions</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {users.map(user => (
  //           <tr key={user._id}>
  //             <td className="border p-2">{user.name}</td>
  //             <td className="border p-2">{user.email}</td>
  //             <td className="border p-2 text-center">
  //               <input
  //                 type="checkbox"
  //                 checked={editedUsers[user._id]?.canSale || false}
  //                 onChange={() => handleCheckboxChange(user._id, 'canSale')}
  //                 className='size-5'
  //               />
  //             </td>
  //             <td className="border p-2 text-center">
  //               <input
  //                 type="checkbox"
  //                 checked={editedUsers[user._id]?.canReceipt || false}
  //                 onChange={() => handleCheckboxChange(user._id, 'canReceipt')}
  //                 className='size-5'
  //               />
  //             </td>
  //             <td className="border p-2 text-center">
  //               <input
  //                 type="checkbox"
  //                 checked={editedUsers[user._id]?.canReport || false}
  //                 onChange={() => handleCheckboxChange(user._id, 'canReport')}
  //                 className='size-5'
  //               />
  //             </td>
  //             <td className="border p-2 text-center">
  //               <button
  //                 onClick={() => applyChanges(user._id)}
  //                 className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700"
  //               >
  //                 Apply
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard - User Permissions</h2>
  
      <div className="overflow-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-purple-100 text-gray-700">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Sale Access</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Receipt Access</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Report Access</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-purple-50">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={editedUsers[user._id]?.canSale || false}
                    onChange={() => handleCheckboxChange(user._id, 'canSale')}
                    className="w-5 h-5 accent-purple-600"
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={editedUsers[user._id]?.canReceipt || false}
                    onChange={() => handleCheckboxChange(user._id, 'canReceipt')}
                    className="w-5 h-5 accent-purple-600"
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={editedUsers[user._id]?.canReport || false}
                    onChange={() => handleCheckboxChange(user._id, 'canReport')}
                    className="w-5 h-5 accent-purple-600"
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => applyChanges(user._id)}
                    className="bg-purple-700 text-white px-4 py-1 rounded-md hover:bg-purple-800 transition"
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

export default AdminDashboard;
