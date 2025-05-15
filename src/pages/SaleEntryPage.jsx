// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import dayjs from 'dayjs';

// const SaleEntryPage = () => {
//   const { token } = useAuth();
//   const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
//   const [districts, setDistricts] = useState([]);
//   const [sales, setSales] = useState({});
//   const [total, setTotal] = useState(0);

//   const fetchDistricts = async () => {
//     const res = await axios.get('/api/districts');
//     setDistricts(res.data);
//   };

//   const fetchSales = async () => {
//     const res = await axios.get(`/api/sales?date=${date}`);
//     const salesMap = {};
//     let t = 0;
//     res.data.forEach((sale) => {
//       salesMap[sale.district] = sale.amount;
//       t += sale.amount;
//     });
//     setSales(salesMap);
//     setTotal(t);
//   };

//   const handleAmountChange = (district, value) => {
//     const amount = parseFloat(value) || 0;
//     const updatedSales = { ...sales, [district]: amount };
//     setSales(updatedSales);

//     const newTotal = Object.values(updatedSales).reduce((a, b) => a + b, 0);
//     setTotal(newTotal);
//   };

//   const handleSubmit = async () => {
//     try {
//       const entries = districts.map((d) => ({
//         district: d.name,
//         date,
//         amount: sales[d.name] || 0,
//       }));

//       await Promise.all(entries.map((entry) =>
//         axios.post('/api/sales', entry, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//       ));

//       alert('Sales saved successfully!');
//     } catch (err) {
//       console.error('Error saving sales:', err);
//       alert('Error saving sales');
//     }
//   };

//   useEffect(() => {
//     fetchDistricts();
//   }, []);

//   useEffect(() => {
//     if (districts.length) fetchSales();
//   }, [date, districts]);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Sale Entry</h2>

//       <label className="block mb-4">
//         <span className="mr-2">Select Date:</span>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="border p-2 rounded"
//         />
//       </label>

//       <table className="w-full border mt-4 mb-6">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2 text-left">District</th>
//             <th className="border px-4 py-2 text-left">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {districts.map((d) => (
//             <tr key={d._id}>
//               <td className="border px-4 py-2">{d.name}</td>
//               <td className="border px-4 py-2">
//                 <input
//                   type="number"
//                   className="w-40 border rounded px-2 py-1"
//                   value={sales[d.name] || ''}
//                   onChange={(e) => handleAmountChange(d.name, e.target.value)}
//                 />
//               </td>
//             </tr>
//           ))}
//           <tr className="font-semibold bg-gray-50">
//             <td className="border px-4 py-2">Total</td>
//             <td className="border px-4 py-2">{total}</td>
//           </tr>
//         </tbody>
//       </table>

//       <button
//         onClick={handleSubmit}
//         className="bg-green-600 text-white px-4 py-2 rounded"
//       >
//         Save Sales
//       </button>
//     </div>
//   );
// };

// export default SaleEntryPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SaleEntryPage = () => {
//   const [sales, setSales] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Fetch districts
//   useEffect(() => {
//     axios.get('/api/district/')
//       .then(res => {
//         console.log(res.data); // Check if the response is as expected
//         if (Array.isArray(res.data)) {
//           setDistricts(res.data);  // Ensure it's an array before setting the state
//         } else {
//           console.error('Expected an array, but received:', res.data);
//           setDistricts([]);  // Set an empty array if the response isn't an array
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         setDistricts([]); // Fallback in case of error
//       });
//     //   console.log(res.data)
//   }, []);
  
//   // Fetch sales for selected date
//   useEffect(() => {
//     if (selectedDate) {
//       setLoading(true);
//     //   axios.get(`/api/sale?date=${selectedDate}`)
//     //     .then(res => {
//     //       setSales(res.data);
//     //       const newForm = {};
//     //       res.data.forEach(sale => {
//     //         newForm[sale.district] = sale.amount;
//     //       });
//     //       setFormData(newForm);
//     //     })
//     //     .finally(() => setLoading(false));
//     axios.get(`/api/sale?date=${selectedDate}`)
//   .then(res => {
//     const salesData = Array.isArray(res.data) ? res.data : [];  // Fallback to empty array if not an array
//     setSales(salesData);

//     const newForm = {};
//     salesData.forEach(sale => {
//       newForm[sale.district] = sale.amount;
//     });

//     setFormData(newForm);
//   })
//   .finally(() => setLoading(false));

//     }
//   }, [selectedDate]);

//   const handleChange = (district, value) => {
//     setFormData({ ...formData, [district]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       for (const district of districts) {
//         const amount = Number(formData[district.name]) || 0;
//        const token = localStorage.getItem('token');

// await axios.post('/api/sale', {
//   district: district.name,
//   date: selectedDate,
//   amount,
// }, {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });
//       }
//       alert('Sales saved successfully.');
//     } catch (err) {
//       console.error(err);
//       alert('Error saving sales.');
//     }
//   };

//   const handleDelete = async (district) => {
//     try {
//       const sale = sales.find(s => s.district === district);
//       if (sale?._id) {
//         await axios.delete(`/api/sales/${sale._id}`);
//         setFormData(prev => {
//           const updated = { ...prev };
//           delete updated[district];
//           return updated;
//         });
//         setSales(prev => prev.filter(s => s.district !== district));
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting sale.');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-semibold mb-4">Sale Entry</h1>

//       <label className="block mb-4">
//         Select Date:
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="ml-2 border p-2 rounded"
//         />
//       </label>

//       {loading ? (
//         <p>Loading sales...</p>
//       ) : (
//         <table className="w-full mt-4 border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2 text-left">District</th>
//               <th className="border p-2 text-left">Amount</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//           {districts && Array.isArray(districts) && districts.map((d) => (
//   <tr key={d._id}>
//     <td className="border p-2">{d.name}</td>
//     <td className="border p-2">
//       <input
//         type="number"
//         value={formData[d.name] || ''}
//         onChange={(e) => handleChange(d.name, e.target.value)}
//         className="border p-1 rounded w-28"
//       />
//     </td>
//     <td className="border p-2 text-center">
//       <button
//         onClick={() => handleDelete(d.name)}
//         className="text-sm bg-red-500 text-white px-2 py-1 rounded"
//       >
//         Delete
//       </button>
//     </td>
//   </tr>
// ))}

//           </tbody>
//         </table>
//       )}

//       <button
//         onClick={handleSubmit}
//         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Save Sales
//       </button>
//     </div>
//   );
// };

// export default SaleEntryPage;


//updated corrected one
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SaleEntryPage = () => {
//   const [sales, setSales] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [formData, setFormData] = useState({});
//   const [saleIds, setSaleIds] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [canSale, setCanSale] = useState(false)
//   const [checkingPermission, setCheckingPermission] = useState(true);

//   const user = JSON.parse(localStorage.getItem('user'));
//   const branch = user?.branch;


// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/auth/profile', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         console.log(res.data)
// //         setCanSale(res.data?.canSale || false);
// //       } catch (err) {
// //         console.error('Failed to fetch user profile');
// //       } finally {
// //         setCheckingPermission(false);
// //       }
// //     };
// //     fetchUser();
// //   }, []);

// useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token'); // ✅ Get token
//         if (!token) throw new Error('No token found');
  
//         const res = await axios.get('http://localhost:5000/api/auth/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
  
//         console.log("User Profile:", res.data);
//         setCanSale(res.data?.canSale || false);
//       } catch (err) {
//         console.error('Failed to fetch user profile:', err.response?.data || err.message);
//       } finally {
//         setCheckingPermission(false);
//       }
//     };
//     fetchUser();
//   }, []);
  
//   //newly added
//   useEffect(() => {
//     const fetchDistricts = async () => {
//         const token = localStorage.getItem('token');
//       const res = await axios.get('http://localhost:5000/api/district/branch', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log(res)
//       setDistricts(res.data);
//     };
//     fetchDistricts();
//   }, []);
  
//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD
//     if (!selectedDate) {
//       setSelectedDate(today);
//     }
//   }, [selectedDate]);


//   //old correctd one
// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/district/')
// //       .then(res => {
// //         if (Array.isArray(res.data)) {
// //             // res.data.map(str => str.toUpperCase())
// //           setDistricts(res.data);
// //         }
// //       })
// //       .catch(console.error);
// //   }, []);

//   useEffect(() => {
//     if (!selectedDate) return;
//     setLoading(true);

//     axios.get(`http://localhost:5000/api/sale?date=${selectedDate}`)
//       .then(res => {
//         const saleData = Array.isArray(res.data) ? res.data : [];
//         setSales(saleData);

//         const newForm = {};
//         const newSaleIds = {};
//         saleData.forEach(sale => {
//           newForm[sale.district] = sale.amount;
//           newSaleIds[sale.district] = sale._id;
//         });

//         setFormData(newForm);
//         setSaleIds(newSaleIds);
//       })
//       .finally(() => setLoading(false));
//   }, [selectedDate]);

//   const handleChange = (district, value) => {
//     setFormData({ ...formData, [district]: value });
//   };

// //   const handleSubmit = async () => {
// //     const token = localStorage.getItem('token');

// //     try {
// //       for (const district of districts) {
// //         const amount = Number(formData[district.name]) || 0;

// //         await axios.post('/api/sale', {
// //           district: district.name,
// //           date: selectedDate,
// //           amount
// //         }, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //       }
// //       alert('Sales saved successfully.');
// //     } catch (err) {
// //       console.error(err);
// //       alert('Error saving sales.');
// //     }
// //   };

// const handleSubmit = async () => {
//     const token = localStorage.getItem('token');
  
//     try {
//       for (const district of districts) {
//         const amountValue = formData[district.name];
//         const amount = Number(amountValue);
  
//         if (!amountValue || isNaN(amount)) {
//           // skip empty or invalid entries
//           continue;
//         }
  
//         const saleId = saleIds[district.name];
  
//         await axios.post('http://localhost:5000/api/sale', {
//             branch,
//                       district: district.name,
//                       date: selectedDate,
//                       amount
//                     }, {
//                       headers: {
//                         Authorization: `Bearer ${token}`
//                       }
//                     });
//       }
  
//       alert('Sales saved successfully.');
//     } catch (err) {
//       console.error(err);
//       alert('Error saving sales.');
//     }
//   };

// //   const getTotalAmount = () => {
// //     return Object.values(formData).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
// //   };

// const getTotalAmount = () => {
//     return Object.entries(formData)
//       .filter(([districtName]) => {
//         const district = districts.find(d => d.name === districtName);
//         return district && district.branch === branch;
//       })
//       .reduce((sum, [, val]) => sum + (parseFloat(val) || 0), 0);
//   };
  
  

//   const handleDelete = async (district) => {
//     const token = localStorage.getItem('token');
//     const saleId = saleIds[district];
//     if (!saleId) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/sale/${saleId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       setFormData(prev => {
//         const updated = { ...prev };
//         delete updated[district];
//         return updated;
//       });

//       setSaleIds(prev => {
//         const updated = { ...prev };
//         delete updated[district];
//         return updated;
//       });

//       setSales(prev => prev.filter(s => s.district !== district));
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting sale.');
//     }
//   };

//   if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
//   if (!canSale) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;

//   return (
//     <div className="p-6 bg-gray-200">
//       <h1 className="text-3xl font-bold mb-4">Sale Entry</h1>

//       <label className="block mb-4 font-semibold">
//         Select Date:
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="ml-2 border p-3 rounded-full shadow"
//         />
//       </label>

//       {loading ? (
//         <p>Loading sales...</p>
//       ) : (
//         <table className="w-full mt-4 border border-gray-900">
//           <thead>
//             <tr className="bg-gray-400">
//               <th className="border p-2 text-left">District</th>
//               <th className="border p-2 text-left">Amount</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {districts.map(d => (
//               <tr key={d._id}>
//                 <td className="border p-2 font-semibold">{d.name}</td>
//                 <td className="border p-2">
//                   <input
//                     type="number"
//                     value={formData[d.name] || ''}
//                     onChange={(e) => handleChange(d.name, e.target.value)}
//                     className="border p-1 rounded w-28"
//                   />
//                 </td>
//                 <td className="border p-2 text-center">
//                   <button
//                     onClick={() => handleDelete(d.name)}
//                     className="text-sm bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//     <tr className="bg-gray-200 font-semibold">
//       <td className="border p-2 text-right bg-gray-400">Total</td>
//       <td className="border p-2 bg-gray-400">{getTotalAmount().toFixed(2)}</td>
//       <td className="border p-2 bg-gray-400" />
//     </tr>
//   </tfoot>
//         </table>
//       )}

//       <button
//         onClick={handleSubmit}
//         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full"
//       >
//         Save Sales
//       </button>
//     </div>
//   );
// };

// export default SaleEntryPage;


//updated after permissions
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SaleEntryPage = () => {
//   const [sales, setSales] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [formData, setFormData] = useState({});
//   const [saleIds, setSaleIds] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [canSale, setCanSale] = useState(false);
//   const [checkingPermission, setCheckingPermission] = useState(true);

//   const token = localStorage.getItem('token');

//   // ✅ Fetch user permissions
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/auth/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log(res)
//         setCanSale(res.data?.canSale || false);
//       } catch (err) {
//         console.error('Failed to fetch user profile');
//       } finally {
//         setCheckingPermission(false);
//       }
//     };
//     fetchUser();
//   }, []);

//   // ✅ Default date
//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     if (!selectedDate) {
//       setSelectedDate(today);
//     }
//   }, [selectedDate]);

//   // ✅ Get districts
//   useEffect(() => {
//     axios.get('/api/district/')
//       .then(res => {
//         if (Array.isArray(res.data)) setDistricts(res.data);
//       })
//       .catch(console.error);
//   }, []);

//   // ✅ Get sales for selected date
//   useEffect(() => {
//     if (!selectedDate || !canSale) return;
//     setLoading(true);

//     axios.get(`/api/sale?date=${selectedDate}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then(res => {
//         const saleData = Array.isArray(res.data) ? res.data : [];
//         setSales(saleData);

//         const newForm = {};
//         const newSaleIds = {};
//         saleData.forEach(sale => {
//           newForm[sale.district] = sale.amount;
//           newSaleIds[sale.district] = sale._id;
//         });

//         setFormData(newForm);
//         setSaleIds(newSaleIds);
//       })
//       .finally(() => setLoading(false));
//   }, [selectedDate, canSale]);

//   const handleChange = (district, value) => {
//     setFormData({ ...formData, [district]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       for (const district of districts) {
//         const amountValue = formData[district.name];
//         const amount = Number(amountValue);

//         if (!amountValue || isNaN(amount)) continue;

//         await axios.post('/api/sale', {
//           district: district.name,
//           date: selectedDate,
//           amount,
//         }, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       alert('Sales saved successfully.');
//     } catch (err) {
//       console.error(err);
//       alert('Error saving sales.');
//     }
//   };

//   const getTotalAmount = () => {
//     return Object.values(formData).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
//   };

//   const handleDelete = async (district) => {
//     const saleId = saleIds[district];
//     if (!saleId) return;

//     try {
//       await axios.delete(`/api/sale/${saleId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setFormData(prev => {
//         const updated = { ...prev };
//         delete updated[district];
//         return updated;
//       });

//       setSaleIds(prev => {
//         const updated = { ...prev };
//         delete updated[district];
//         return updated;
//       });

//       setSales(prev => prev.filter(s => s.district !== district));
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting sale.');
//     }
//   };

//   if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
//   if (!canSale) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;

//   return (
//     <div className="p-6 bg-gray-200">
//       <h1 className="text-3xl font-bold mb-4">Sale Entry</h1>

//       <label className="block mb-4 font-semibold">
//         Select Date:
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="ml-2 border p-3 rounded-full shadow"
//         />
//       </label>

//       {loading ? (
//         <p>Loading sales...</p>
//       ) : (
//         <table className="w-full mt-4 border border-gray-900">
//           <thead>
//             <tr className="bg-gray-400">
//               <th className="border p-2 text-left">District</th>
//               <th className="border p-2 text-left">Amount</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {districts.map(d => (
//               <tr key={d._id}>
//                 <td className="border p-2 font-semibold">{d.name}</td>
//                 <td className="border p-2">
//                   <input
//                     type="number"
//                     value={formData[d.name] || ''}
//                     onChange={(e) => handleChange(d.name, e.target.value)}
//                     className="border p-1 rounded w-28"
//                   />
//                 </td>
//                 <td className="border p-2 text-center">
//                   <button
//                     onClick={() => handleDelete(d.name)}
//                     className="text-sm bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr className="bg-gray-200 font-semibold">
//               <td className="border p-2 text-right bg-gray-400">Total</td>
//               <td className="border p-2 bg-gray-400">{getTotalAmount().toFixed(2)}</td>
//               <td className="border p-2 bg-gray-400" />
//             </tr>
//           </tfoot>
//         </table>
//       )}

//       <button
//         onClick={handleSubmit}
//         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full"
//       >
//         Save Sales
//       </button>
//     </div>
//   );
// };

// export default SaleEntryPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SaleEntryPage = () => {
  const [sales, setSales] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({});
  const [saleIds, setSaleIds] = useState({});
  const [loading, setLoading] = useState(false);
  const [canSale, setCanSale] = useState(false)
  const [checkingPermission, setCheckingPermission] = useState(true);

  const user = JSON.parse(localStorage.getItem('user'));
  const branch = user?.branch;



useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token'); // ✅ Get token
        if (!token) throw new Error('No token found');
  
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        console.log("User Profile:", res.data);
        setCanSale(res.data?.canSale || false);
      } catch (err) {
        console.error('Failed to fetch user profile:', err.response?.data || err.message);
      } finally {
        setCheckingPermission(false);
      }
    };
    fetchUser();
  }, []);
  
  //newly added
  useEffect(() => {
    const fetchDistricts = async () => {
        const token = localStorage.getItem('token');
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/district/branch`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(res)
      setDistricts(res.data);
    };
    fetchDistricts();
  }, []);
  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    if (!selectedDate) {
      setSelectedDate(today);
    }
  }, [selectedDate]);


 

useEffect(() => {
    if (!selectedDate) return;
    setLoading(true);

  
  
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/sale?date=${selectedDate}`)
      .then(res => {
        const saleData = Array.isArray(res.data) ? res.data : [];
        setSales(saleData);
  
        const newForm = {};
        const newSaleIds = {};
        saleData.forEach(sale => {
          newForm[sale.district] = {
            cash: sale.cash || 0,
            private: sale.private || 0,
            gov: sale.gov || 0,
          };
          newSaleIds[sale.district] = sale._id;
        });
  
        setFormData(newForm);
        setSaleIds(newSaleIds);
      })
      .finally(() => setLoading(false));
  }, [selectedDate]);
  

  const handleChange = (district, field, value) => {
    setFormData(prev => ({
      ...prev,
      [district]: {
        ...prev[district],
        [field]: value
      }
    }));
  };


const handleSubmit = async () => {
    const token = localStorage.getItem('token');
  
    try {
      for (const district of districts) {
        const districtData = formData[district.name];
        if (!districtData) continue;
  
        const { cash = 0, private: privateAmount = 0, gov = 0 } = districtData;
  
        // Skip if all values are 0
        if ((+cash || 0) === 0 && (+privateAmount || 0) === 0 && (+gov || 0) === 0) {
          continue;
        }
  
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/sale`, {
          branch,
          district: district.name,
          date: selectedDate,
          cash: +cash,
          private: +privateAmount,
          gov: +gov,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
  
      alert('Sales saved successfully.');
    } catch (err) {
      console.error(err);
      alert('Error saving sales.');
    }
  };
  


const getTotalAmount = () => {
    return Object.values(formData).reduce((sum, val) => {
      const cash = parseFloat(val.cash || 0);
      const priv = parseFloat(val.private || 0);
      const gov = parseFloat(val.gov || 0);
      return sum + cash + priv + gov;
    }, 0);
  };
  
  

  const handleDelete = async (district) => {
    const token = localStorage.getItem('token');
    const saleId = saleIds[district];
    if (!saleId) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/sale/${saleId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setFormData(prev => {
        const updated = { ...prev };
        delete updated[district];
        return updated;
      });

      setSaleIds(prev => {
        const updated = { ...prev };
        delete updated[district];
        return updated;
      });

      setSales(prev => prev.filter(s => s.district !== district));
    } catch (err) {
      console.error(err);
      alert('Error deleting sale.');
    }
  };

  const getFieldTotal = (field) => {
    return Object.values(formData).reduce((sum, val) => {
      return sum + parseFloat(val?.[field] || 0);
    }, 0);
  };
  
  const getRowTotal = (data) => {
    const cash = parseFloat(data.cash || 0);
    const priv = parseFloat(data.private || 0);
    const gov = parseFloat(data.gov || 0);
    return cash + priv + gov;
  };
  

  if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
  if (!canSale) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;

 

  return (
    <div className="p-4 sm:p-6 bg-gray-200">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Sale Entry</h1>
  
      <label className="block mb-4 font-semibold">
        Select Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-2 sm:ml-2 border p-2 rounded-full shadow w-full sm:w-auto"
        />
      </label>
  
      {loading ? (
        <p>Loading sales...</p>
      ) : (
        <div className="overflow-x-auto">
          {/* <table className="min-w-full mt-4 border border-gray-900 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-400 text-left">
                <th className="border p-2">District</th>
                <th className="border p-2">Cash</th>
                <th className="border p-2">Private</th>
                <th className="border p-2">Gov</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {districts.map((d) => {
                const districtData = formData[d.name] || {};
                return (
                  <tr key={d._id}>
                    <td className="border p-2 font-semibold">{d.name}</td>
                    <td className="border p-2">
                      <input
                        type="number"
                        placeholder="Cash"
                        value={districtData.cash || ''}
                        onChange={(e) => handleChange(d.name, 'cash', e.target.value)}
                        className="border p-1 rounded w-full sm:w-24"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        placeholder="Private"
                        value={districtData.private || ''}
                        onChange={(e) => handleChange(d.name, 'private', e.target.value)}
                        className="border p-1 rounded w-full sm:w-24"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        placeholder="Gov"
                        value={districtData.gov || ''}
                        onChange={(e) => handleChange(d.name, 'gov', e.target.value)}
                        className="border p-1 rounded w-full sm:w-24"
                      />
                    </td>
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => handleDelete(d.name)}
                        className="text-sm bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-gray-300 font-semibold">
                <td className="border p-2 text-right bg-gray-400">Total</td>
                <td className="border p-2 bg-gray-400">{getTotalAmount().toFixed(2)}</td>
                <td className="border p-2 bg-gray-400" colSpan={3}></td>
              </tr>
            </tfoot>
          </table> */}
          <table className="min-w-full mt-4 border border-gray-900 text-sm sm:text-base">
  <thead>
    <tr className="bg-gray-400 text-left">
      <th className="border p-2">District</th>
      <th className="border p-2">Cash</th>
      <th className="border p-2">Private</th>
      <th className="border p-2">Gov</th>
      <th className="border p-2">Total</th>
      <th className="border p-2 text-center">Actions</th>
    </tr>
  </thead>
  <tbody>
    {districts.map((d) => {
      const districtData = formData[d.name] || {};
      return (
        <tr key={d._id}>
          <td className="border p-2 font-semibold">{d.name}</td>
          <td className="border p-2">
            <input
              type="number"
              placeholder="Cash"
              value={districtData.cash || ''}
              onChange={(e) => handleChange(d.name, 'cash', e.target.value)}
              className="border p-1 rounded w-full sm:w-24"
            />
          </td>
          <td className="border p-2">
            <input
              type="number"
              placeholder="Private"
              value={districtData.private || ''}
              onChange={(e) => handleChange(d.name, 'private', e.target.value)}
              className="border p-1 rounded w-full sm:w-24"
            />
          </td>
          <td className="border p-2">
            <input
              type="number"
              placeholder="Gov"
              value={districtData.gov || ''}
              onChange={(e) => handleChange(d.name, 'gov', e.target.value)}
              className="border p-1 rounded w-full sm:w-24"
            />
          </td>
          <td className="border p-2 font-semibold text-right">
            {getRowTotal(districtData).toFixed(2)}
          </td>
          <td className="border p-2 text-center">
            <button
              onClick={() => handleDelete(d.name)}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    })}
  </tbody>
  <tfoot>
    <tr className="bg-gray-300 font-semibold">
      <td className="border p-2 text-right bg-gray-400">Total</td>
      <td className="border p-2 bg-gray-400">{getFieldTotal('cash').toFixed(2)}</td>
      <td className="border p-2 bg-gray-400">{getFieldTotal('private').toFixed(2)}</td>
      <td className="border p-2 bg-gray-400">{getFieldTotal('gov').toFixed(2)}</td>
      <td className="border p-2 bg-gray-400 text-right">
        {(getFieldTotal('cash') + getFieldTotal('private') + getFieldTotal('gov')).toFixed(2)}
      </td>
      <td className="border p-2 bg-gray-400"></td>
    </tr>
  </tfoot>
</table>

        </div>
      )}
  
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full w-full sm:w-auto"
      >
        Save Sales
      </button>
    </div>
  );
  
  
};

export default SaleEntryPage;