// // import { useState } from 'react';
// // import axios from 'axios';
// // import dayjs from 'dayjs';

// // const ReportsPage = () => {
// //   const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
// //   const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
// //   const [salesData, setSalesData] = useState([]);
// //   const [receiptsData, setReceiptsData] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const fetchReports = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await axios.get('/api/reports', {
// //         params: { startDate, endDate },
// //       });
// //       setSalesData(res.data.sales);
// //       setReceiptsData(res.data.receipts);
// //     } catch (err) {
// //       console.error('Error fetching reports:', err);
// //       alert('Failed to load reports');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const downloadFile = async (type, reportType) => {
// //     try {
// //       const res = await axios.get(`/api/reports/${reportType}/${type}`, {
// //         params: { startDate, endDate },
// //         responseType: 'blob',
// //       });

// //       const blob = new Blob([res.data]);
// //       const link = document.createElement('a');
// //       link.href = window.URL.createObjectURL(blob);
// //       link.download = `${reportType}-${startDate}_to_${endDate}.${type}`;
// //       link.click();
// //     } catch (err) {
// //       console.error(`Error downloading ${type}`, err);
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-semibold mb-4">Reports</h2>

// //       <div className="mb-4 flex flex-wrap gap-4 items-center">
// //         <label>
// //           Start Date:
// //           <input
// //             type="date"
// //             value={startDate}
// //             onChange={(e) => setStartDate(e.target.value)}
// //             className="ml-2 border p-2 rounded"
// //           />
// //         </label>
// //         <label>
// //           End Date:
// //           <input
// //             type="date"
// //             value={endDate}
// //             onChange={(e) => setEndDate(e.target.value)}
// //             className="ml-2 border p-2 rounded"
// //           />
// //         </label>
// //         <button
// //           onClick={fetchReports}
// //           className="bg-blue-600 text-white px-4 py-2 rounded"
// //         >
// //           Generate Report
// //         </button>
// //       </div>

// //       {loading ? (
// //         <p>Loading data...</p>
// //       ) : (
// //         <>
// //           <div className="mt-6">
// //             <h3 className="text-xl font-medium mb-2">Sales</h3>
// //             <table className="w-full border mb-4">
// //               <thead>
// //                 <tr className="bg-gray-100">
// //                   <th className="border px-4 py-2">District</th>
// //                   <th className="border px-4 py-2">Date</th>
// //                   <th className="border px-4 py-2">Amount</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {salesData.map((s, i) => (
// //                   <tr key={i}>
// //                     <td className="border px-4 py-2">{s.district}</td>
// //                     <td className="border px-4 py-2">{s.date}</td>
// //                     <td className="border px-4 py-2">{s.amount}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>

// //             <div className="flex gap-2 mb-8">
// //               <button
// //                 onClick={() => downloadFile('excel', 'sales')}
// //                 className="bg-green-600 text-white px-4 py-2 rounded"
// //               >
// //                 Download Excel
// //               </button>
// //               <button
// //                 onClick={() => downloadFile('pdf', 'sales')}
// //                 className="bg-red-600 text-white px-4 py-2 rounded"
// //               >
// //                 Download PDF
// //               </button>
// //             </div>
// //           </div>

// //           <div>
// //             <h3 className="text-xl font-medium mb-2">Receipts</h3>
// //             <table className="w-full border mb-4">
// //               <thead>
// //                 <tr className="bg-gray-100">
// //                   <th className="border px-4 py-2">District</th>
// //                   <th className="border px-4 py-2">Date</th>
// //                   <th className="border px-4 py-2">Cash</th>
// //                   <th className="border px-4 py-2">Bank</th>
// //                   <th className="border px-4 py-2">Online</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {receiptsData.map((r, i) => (
// //                   <tr key={i}>
// //                     <td className="border px-4 py-2">{r.district}</td>
// //                     <td className="border px-4 py-2">{r.date}</td>
// //                     <td className="border px-4 py-2">{r.cash}</td>
// //                     <td className="border px-4 py-2">{r.bank}</td>
// //                     <td className="border px-4 py-2">{r.online}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>

// //             <div className="flex gap-2">
// //               <button
// //                 onClick={() => downloadFile('excel', 'receipts')}
// //                 className="bg-green-600 text-white px-4 py-2 rounded"
// //               >
// //                 Download Excel
// //               </button>
// //               <button
// //                 onClick={() => downloadFile('pdf', 'receipts')}
// //                 className="bg-red-600 text-white px-4 py-2 rounded"
// //               >
// //                 Download PDF
// //               </button>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default ReportsPage;

// import { useState } from 'react';
// import axios from 'axios';
// import dayjs from 'dayjs';

// const ReportsPage = () => {
//   const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
//   const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
//   const [salesData, setSalesData] = useState([]);
//   const [receiptsData, setReceiptsData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchReports = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get('/api/report', {
//         params: { fromDate: startDate, toDate: endDate },
//       });
//       setSalesData(res.data.sales);
//       setReceiptsData(res.data.receipts);
//     } catch (err) {
//       console.error('Error fetching reports:', err);
//       alert('Failed to load reports');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const downloadFile = async (type, reportType) => {
//     try {
//       const res = await axios.get(`/api/report/${reportType}/${type}`, {
//         params: { startDate, endDate },
//         responseType: 'blob',
//       });

//       const blob = new Blob([res.data]);
//       const link = document.createElement('a');
//       link.href = window.URL.createObjectURL(blob);
//       link.download = `${reportType}-${startDate}_to_${endDate}.${type}`;
//       link.click();
//     } catch (err) {
//       console.error(`Error downloading ${type}`, err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Reports</h2>

//       <div className="mb-4 flex flex-wrap gap-4 items-center">
//         <label>
//           Start Date:
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="ml-2 border p-2 rounded"
//           />
//         </label>
//         <label>
//           End Date:
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="ml-2 border p-2 rounded"
//           />
//         </label>
//         <button
//           onClick={fetchReports}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Generate Report
//         </button>
//       </div>

//       {loading ? (
//         <p>Loading data...</p>
//       ) : (
//         <>
//           <div className="mt-6">
//             <h3 className="text-xl font-medium mb-2">Sales</h3>
//             <table className="w-full border mb-4">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border px-4 py-2">District</th>
//                   <th className="border px-4 py-2">Date</th>
//                   <th className="border px-4 py-2">Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {salesData.map((s, i) => (
//                   <tr key={i}>
//                     <td className="border px-4 py-2">{s.district}</td>
//                     <td className="border px-4 py-2">{s.date}</td>
//                     <td className="border px-4 py-2">{s.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <div className="flex gap-2 mb-8">
//               <button
//                 onClick={() => downloadFile('excel', 'sales')}
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 Download Excel
//               </button>
//               <button
//                 onClick={() => downloadFile('pdf', 'sales')}
//                 className="bg-red-600 text-white px-4 py-2 rounded"
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-medium mb-2">Receipts</h3>
//             <table className="w-full border mb-4">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border px-4 py-2">District</th>
//                   <th className="border px-4 py-2">Date</th>
//                   <th className="border px-4 py-2">Cash</th>
//                   <th className="border px-4 py-2">Bank</th>
//                   <th className="border px-4 py-2">Online</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {receiptsData.map((r, i) => (
//                   <tr key={i}>
//                     <td className="border px-4 py-2">{r.district}</td>
//                     <td className="border px-4 py-2">{r.date}</td>
//                     <td className="border px-4 py-2">{r.cash}</td>
//                     <td className="border px-4 py-2">{r.bank}</td>
//                     <td className="border px-4 py-2">{r.online}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => downloadFile('excel', 'receipts')}
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 Download Excel
//               </button>
//               <button
//                 onClick={() => downloadFile('pdf', 'receipts')}
//                 className="bg-red-600 text-white px-4 py-2 rounded"
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ReportsPage;



//corrected one
// frontend/src/pages/ReportsPage.jsx
// import React, { useState , useEffect} from 'react';
// import axios from 'axios';

// const ReportsPage = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [sales, setSales] = useState([]);
//   const [receipts, setReceipts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [canReport, setCanReport] = useState(false);
//   const [checkingPermission, setCheckingPermission] = useState(true)


//   useEffect(() => {
//       const fetchUser = async () => {
//         try {
//           const token = localStorage.getItem('token'); // ✅ Get token
//           if (!token) throw new Error('No token found');
    
//           const res = await axios.get('http://localhost:5000/api/auth/profile', {
//             headers: { Authorization: `Bearer ${token}` },
//           });
    
//           console.log("User Profile:", res.data);
//           setCanReport(res.data?.canReport || false);
//         } catch (err) {
//           console.error('Failed to fetch user profile:', err.response?.data || err.message);
//         } finally {
//           setCheckingPermission(false);
//         }
//       };
//       fetchUser();
//     }, []);

//   const fetchReports = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get('/api/report', {
//         params: { startDate, endDate },
//       });
//       setSales(res.data.sales);
//       setReceipts(res.data.receipts);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching reports:', error);
//       setLoading(false);
//     }
//   };

// //   const downloadFile = async (format, type) => {
// //     try {
// //       const res = await axios.get(`/api/report/${type}/${format}`, {
// //         params: { startDate, endDate },
// //         responseType: 'blob',
// //       });

// //       const blob = new Blob([res.data]);
// //       const url = window.URL.createObjectURL(blob);
// //       const link = document.createElement('a');
// //       link.href = url;
// //       link.download = `${type}-${startDate}_to_${endDate}.${format}`;
// //       link.click();
// //     } catch (err) {
// //       console.error(`Download error:`, err);
// //     }
// //   };

// const downloadFile = async (format, type) => {
//     try {
//       const res = await axios.get(`/api/report/${type}/${format}`, {
//         params: { startDate, endDate },
//         responseType: 'blob',
//       });
  
//       const blob = new Blob([res.data]);
  
//       // Ensure the extension matches based on the format
//       const fileExtension = format === 'excel' ? 'xlsx' : format; // Excel should be .xlsx
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `${type}-${startDate}_to_${endDate}.${fileExtension}`; // Ensure correct extension
//       link.click();
//     } catch (err) {
//       console.error(`Download error:`, err);
//     }
//   };

//   if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
//   if (!canReport) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;
  

//   return (
//     <div className='bg-gray-200'>
//     <div className="p-6 max-w-7xl mx-6">
//       <h2 className="text-3xl font-bold mb-4">Reports</h2>

//       <div className="flex gap-4 mb-4">
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           className="border p-3 rounded-full shadow font-semibold"
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           className="border p-3 rounded-full shadow font-semibold"
//         />
//         <button
//           onClick={fetchReports}
//           className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
//         >
//           Get Report
//         </button>
//       </div>

//       {loading && <p className="text-gray-500">Loading...</p>}

//       {/* Sales Table */}
//       {sales.length > 0 && (
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Sales Report</h3>
//           <table className="w-full table-auto border">
//             <thead className="bg-gray-400">
//               <tr>
//                 <th className="border px-4 py-2">District</th>
//                 <th className="border px-4 py-2">Date</th>
//                 <th className="border px-4 py-2">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sales.map((s, idx) => (
//                 <tr key={idx} className='font-semibold'>
//                   <td className="border px-4 py-2">{s.district}</td>
//                   <td className="border px-4 py-2">{s.date}</td>
//                   <td className="border px-4 py-2">{s.amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Receipts Table */}
//       {receipts.length > 0 && (
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Receipts Report</h3>
//           <table className="w-full table-auto border">
//             <thead className="bg-gray-400">
//               <tr>
//                 <th className="border px-4 py-2">District</th>
//                 <th className="border px-4 py-2">Date</th>
//                 <th className="border px-4 py-2">Cash</th>
//                 <th className="border px-4 py-2">Bank</th>
//                 <th className="border px-4 py-2">Online</th>
//               </tr>
//             </thead>
//             <tbody>
//               {receipts.map((r, idx) => (
//                 <tr key={idx} className='font-semibold'>
//                   <td className="border px-4 py-2">{r.district}</td>
//                   <td className="border px-4 py-2">{r.date}</td>
//                   <td className="border px-4 py-2">{r.cash}</td>
//                   <td className="border px-4 py-2">{r.bank}</td>
//                   <td className="border px-4 py-2">{r.online}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Download Buttons */}
//       {(sales.length > 0 || receipts.length > 0) && (
//         <div className="flex flex-wrap gap-4">
//           <button
//             onClick={() => downloadFile('excel', 'sales')}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Download Sales Excel
//           </button>
//           <button
//             onClick={() => downloadFile('pdf', 'sales')}
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Download Sales PDF
//           </button>
//           <button
//             onClick={() => downloadFile('excel', 'receipts')}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Download Receipts Excel
//           </button>
//           <button
//             onClick={() => downloadFile('pdf', 'receipts')}
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Download Receipts PDF
//           </button>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default ReportsPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReportsPage = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [sales, setSales] = useState([]);
//   const [receipts, setReceipts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [canReport, setCanReport] = useState(false);
//   const [checkingPermission, setCheckingPermission] = useState(true);
//   const [userBranch, setUserBranch] = useState('');

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('No token found');

//         const res = await axios.get('http://localhost:5000/api/auth/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setCanReport(res.data?.canReport || false);
//         setUserBranch(res.data?.branch || '');
//       } catch (err) {
//         console.error('Failed to fetch user profile:', err.response?.data || err.message);
//       } finally {
//         setCheckingPermission(false);
//       }
//     };
//     fetchUser();
//   }, []);

//   const fetchReports = async () => {
//     try {
//       setLoading(true);
  
//       const token = localStorage.getItem('token'); // adjust this if you're storing token elsewhere
  
//       const res = await axios.get('/api/report', {
//         params: { startDate, endDate },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       const filteredSales = res.data.sales.filter((s) => s.district?.branch === userBranch);
//       const filteredReceipts = res.data.receipts.filter((r) => r.district?.branch === userBranch);
  
//       setSales(filteredSales);
//       setReceipts(filteredReceipts);
//     } catch (error) {
//       console.error('Error fetching reports:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const downloadFile = async (format, type) => {
//     try {
//       const res = await axios.get(`/api/report/${type}/${format}`, {
//         params: { startDate, endDate },
//         responseType: 'blob',
//       });

//       const blob = new Blob([res.data]);
//       const fileExtension = format === 'excel' ? 'xlsx' : format;
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `${type}-${startDate}_to_${endDate}.${fileExtension}`;
//       link.click();
//     } catch (err) {
//       console.error(`Download error:`, err);
//     }
//   };

//   if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
//   if (!canReport) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;

//   return (
//     <div className="bg-gray-200">
//       <div className="p-6 max-w-7xl mx-6">
//         <h2 className="text-3xl font-bold mb-4">Reports</h2>

//         <div className="flex gap-4 mb-4">
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="border p-3 rounded-full shadow font-semibold"
//           />
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="border p-3 rounded-full shadow font-semibold"
//           />
//           <button
//             onClick={fetchReports}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
//           >
//             Get Report
//           </button>
//         </div>

//         {loading && <p className="text-gray-500">Loading...</p>}

//         {sales.length > 0 && (
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold mb-2">Sales Report</h3>
//             <table className="w-full table-auto border">
//               <thead className="bg-gray-400">
//                 <tr>
//                   <th className="border px-4 py-2">District</th>
//                   <th className="border px-4 py-2">Date</th>
//                   <th className="border px-4 py-2">Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {sales.map((s, idx) => (
//                   <tr key={idx} className="font-semibold">
//                     <td className="border px-4 py-2">{s.district?.name}</td>
//                     <td className="border px-4 py-2">{s.date}</td>
//                     <td className="border px-4 py-2">{s.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {receipts.length > 0 && (
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold mb-2">Receipts Report</h3>
//             <table className="w-full table-auto border">
//               <thead className="bg-gray-400">
//                 <tr>
//                   <th className="border px-4 py-2">District</th>
//                   <th className="border px-4 py-2">Date</th>
//                   <th className="border px-4 py-2">Cash</th>
//                   <th className="border px-4 py-2">Private</th>
//                   <th className="border px-4 py-2">Gov</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {receipts.map((r, idx) => (
//                   <tr key={idx} className="font-semibold">
//                     <td className="border px-4 py-2">{r.district?.name}</td>
//                     <td className="border px-4 py-2">{r.date}</td>
//                     <td className="border px-4 py-2">{r.cash}</td>
//                     <td className="border px-4 py-2">{r.bank}</td>
//                     <td className="border px-4 py-2">{r.online}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {(sales.length > 0 || receipts.length > 0) && (
//           <div className="flex flex-wrap gap-4">
//             <button
//               onClick={() => downloadFile('excel', 'sales')}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Sales Excel
//             </button>
//             <button
//               onClick={() => downloadFile('pdf', 'sales')}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Download Sales PDF
//             </button>
//             <button
//               onClick={() => downloadFile('excel', 'receipts')}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Receipts Excel
//             </button>
//             <button
//               onClick={() => downloadFile('pdf', 'receipts')}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Download Receipts PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReportsPage = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [sales, setSales] = useState([]);
//   const [receipts, setReceipts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [canReport, setCanReport] = useState(false);
//   const [checkingPermission, setCheckingPermission] = useState(true);
//   const [userBranch, setUserBranch] = useState('');

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('No token found');
//         console.log(import.meta.env.VITE_API_BASE_URL)

//         const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setCanReport(res.data?.canReport || false);
//         setUserBranch(res.data?.branch || '');
//       } catch (err) {
//         console.error('Failed to fetch user profile:', err.response?.data || err.message);
//       } finally {
//         setCheckingPermission(false);
//       }
//     };
//     fetchUser();
//   }, []);


// const fetchReports = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/report`, {
//         params: { startDate, endDate },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       console.log(res.data); // Just to inspect the structure
  
//       setSales(res.data.sales);       // Directly set — already filtered in backend
//       setReceipts(res.data.receipts); // No need to re-filter
//     } catch (error) {
//       console.error('Error fetching reports:', error);
//     } finally {
//       setLoading(false);
//     }
//   };



// const downloadFile = async (format, type) => {
//     try {
//       const token = localStorage.getItem("token"); // make sure token is stored in localStorage
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/report/${type}/${format}`, {
//         params: { startDate, endDate },
//         responseType: 'blob',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       const blob = new Blob([res.data]);
//       const fileExtension = format === 'excel' ? 'xlsx' : format;
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `${type}-${startDate}_to_${endDate}.${fileExtension}`;
//       link.click();
//     } catch (err) {
//       console.error(`Download error:`, err);
//     }
//   };
  
//   if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
//   if (!canReport) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;


// return (
//   <div className="bg-gray-200 min-h-screen">
//     <div className="p-4 sm:p-6 max-w-7xl mx-auto">
//       <h2 className="text-2xl sm:text-3xl font-bold mb-4">Reports</h2>

//       {/* Date Range and Button */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-6">
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           className="border p-3 rounded-full shadow font-semibold w-full sm:w-auto"
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           className="border p-3 rounded-full shadow font-semibold w-full sm:w-auto"
//         />
//         <button
//           onClick={fetchReports}
//           className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full sm:w-auto"
//         >
//           Get Report
//         </button>
//       </div>

//       {/* Loading */}
//       {loading && <p className="text-gray-500">Loading...</p>}

//       {/* Sales Report */}
//       {sales.length > 0 && (
//         <div className="mb-6 overflow-x-auto">
//           <h3 className="text-xl font-semibold mb-2">Sales Report</h3>
//           <table className="min-w-full border table-auto text-sm sm:text-base">
//             <thead className="bg-gray-400">
//               <tr>
//                 <th className="border px-4 py-2">District</th>
//                 <th className="border px-4 py-2">Date</th>
//                 <th className="border px-4 py-2">Cash</th>
//                 <th className="border px-4 py-2">Private</th>
//                 <th className="border px-4 py-2">Gov</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sales.map((s, idx) => (
//                 <tr key={idx} className="font-semibold">
//                   <td className="border px-4 py-2">{s.district?.name}</td>
//                   <td className="border px-4 py-2">{s.date}</td>
//                   <td className="border px-4 py-2">{s.cash ?? 0}</td>
//                   <td className="border px-4 py-2">{s.private ?? 0}</td>
//                   <td className="border px-4 py-2">{s.gov ?? 0}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Receipts Report */}
//       {receipts.length > 0 && (
//         <div className="mb-6 overflow-x-auto">
//           <h3 className="text-xl font-semibold mb-2">Receipts Report</h3>
//           <table className="min-w-full border table-auto text-sm sm:text-base">
//             <thead className="bg-gray-400">
//               <tr>
//                 <th className="border px-4 py-2">District</th>
//                 <th className="border px-4 py-2">Date</th>
//                 <th className="border px-4 py-2">Cash</th>
//                 <th className="border px-4 py-2">Private</th>
//                 <th className="border px-4 py-2">Gov</th>
//               </tr>
//             </thead>
//             <tbody>
//               {receipts.map((r, idx) => (
//                 <tr key={idx} className="font-semibold">
//                   <td className="border px-4 py-2">{r.district?.name}</td>
//                   <td className="border px-4 py-2">{r.date}</td>
//                   <td className="border px-4 py-2">{r.cash ?? 0}</td>
//                   <td className="border px-4 py-2">{r.private ?? 0}</td>
//                   <td className="border px-4 py-2">{r.gov ?? 0}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Download Buttons */}
//       {(sales.length > 0 || receipts.length > 0) && (
//         <div className="flex flex-col sm:flex-row flex-wrap gap-4">
//           <button
//             onClick={() => downloadFile('excel', 'sales')}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Download Sales Excel
//           </button>
//           <button
//             onClick={() => downloadFile('pdf', 'sales')}
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Download Sales PDF
//           </button>
//           <button
//             onClick={() => downloadFile('excel', 'receipts')}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Download Receipts Excel
//           </button>
//           <button
//             onClick={() => downloadFile('pdf', 'receipts')}
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Download Receipts PDF
//           </button>
//         </div>
//       )}
//     </div>
//   </div>
// );
// };

// export default ReportsPage;




//original code for reportpage.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReportsPage = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [sales, setSales] = useState([]);
//   const [receipts, setReceipts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [canReport, setCanReport] = useState(false);
//   const [checkingPermission, setCheckingPermission] = useState(true);
//   const [userBranch, setUserBranch] = useState('');

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('No token found');

//         const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setCanReport(res.data?.canReport || false);
//         setUserBranch(res.data?.branch || '');
//       } catch (err) {
//         console.error('Failed to fetch user profile:', err.response?.data || err.message);
//       } finally {
//         setCheckingPermission(false);
//       }
//     };
//     fetchUser();
//   }, []);

//   const fetchReports = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/report`, {
//         params: { startDate, endDate },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setSales(res.data.sales);
//       setReceipts(res.data.receipts);
//     } catch (error) {
//       console.error('Error fetching reports:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const downloadFile = async (format, type) => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/report/${type}/${format}`, {
//         params: { startDate, endDate },
//         responseType: 'blob',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const blob = new Blob([res.data]);
//       const fileExtension = format === 'excel' ? 'xlsx' : format;
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `${type}-${startDate}_to_${endDate}.${fileExtension}`;
//       link.click();
//     } catch (err) {
//       console.error(`Download error:`, err);
//     }
//   };

//   if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
//   if (!canReport) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;

//   // Helper to calculate totals for a data array
//   const calculateTotals = (data) => {
//     let totalCash = 0, totalPrivate = 0, totalGov = 0;
//     data.forEach(({ cash = 0, private: priv = 0, gov = 0 }) => {
//       totalCash += cash;
//       totalPrivate += priv;
//       totalGov += gov;
//     });
//     const grandTotal = totalCash + totalPrivate + totalGov;
//     return { totalCash, totalPrivate, totalGov, grandTotal };
//   };

//   const salesTotals = calculateTotals(sales);
//   const receiptsTotals = calculateTotals(receipts);

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <div className="p-4 sm:p-6 max-w-7xl mx-auto">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-4">Reports</h2>

//         {/* Date Range and Button */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-6">
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="border p-3 rounded-full shadow font-semibold w-full sm:w-auto"
//           />
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="border p-3 rounded-full shadow font-semibold w-full sm:w-auto"
//           />
//           <button
//             onClick={fetchReports}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full sm:w-auto"
//           >
//             Get Report
//           </button>
//         </div>

//         {/* Loading */}
//         {loading && <p className="text-gray-500">Loading...</p>}

//         {/* Sales Report */}
//         {sales.length > 0 && (
//           <div className="mb-6 overflow-x-auto">
//             <h3 className="text-xl font-semibold mb-2">Sales Report</h3>
//             <table className="min-w-full border table-auto text-sm sm:text-base">
//               <thead className="bg-gray-400">
//                 <tr>
//                   <th className="border px-4 py-2">District</th>
//                   <th className="border px-4 py-2">Date</th>
//                   <th className="border px-4 py-2">Cash</th>
//                   <th className="border px-4 py-2">Private</th>
//                   <th className="border px-4 py-2">Gov</th>
//                   <th className="border px-4 py-2 text-right">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {sales.map((s, idx) => {
//                   const cash = s.cash ?? 0;
//                   const priv = s.private ?? 0;
//                   const gov = s.gov ?? 0;
//                   const total = cash + priv + gov;
//                   const formattedDate = new Date(s.date).toLocaleDateString('en-IN', {
//                     day: '2-digit',
//                     month: '2-digit',
//                     year: 'numeric',
//                   });
//                   return (
//                     <tr key={idx} className="font-semibold">
//                       <td className="border px-4 py-2">{s.district?.name}</td>
//                       <td className="border px-4 py-2">{formattedDate}</td>
//                       <td className="border px-4 py-2">{cash}</td>
//                       <td className="border px-4 py-2">{priv}</td>
//                       <td className="border px-4 py-2">{gov}</td>
//                       <td className="border px-4 py-2 text-right">{total}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//               <tfoot className="bg-gray-300 font-bold">
//                 <tr>
//                   <td className="border px-4 py-2 text-right" colSpan={2}>Totals:</td>
//                   <td className="border px-4 py-2">{salesTotals.totalCash}</td>
//                   <td className="border px-4 py-2">{salesTotals.totalPrivate}</td>
//                   <td className="border px-4 py-2">{salesTotals.totalGov}</td>
//                   <td className="border px-4 py-2 text-right">{salesTotals.grandTotal}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         )}

//         {/* Receipts Report */}
//         {receipts.length > 0 && (
//           <div className="mb-6 overflow-x-auto">
//             <h3 className="text-xl font-semibold mb-2">Receipts Report</h3>
//             <table className="min-w-full border table-auto text-sm sm:text-base">
//               <thead className="bg-gray-400">
//                 <tr>
//                   <th className="border px-4 py-2">District</th>
//                   <th className="border px-4 py-2">Date</th>
//                   <th className="border px-4 py-2">Cash</th>
//                   <th className="border px-4 py-2">Private</th>
//                   <th className="border px-4 py-2">Gov</th>
//                   <th className="border px-4 py-2 text-right">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {receipts.map((r, idx) => {
//                   const cash = r.cash ?? 0;
//                   const priv = r.private ?? 0;
//                   const gov = r.gov ?? 0;
//                   const total = cash + priv + gov;
//                   const formattedDate = new Date(r.date).toLocaleDateString('en-IN', {
//                     day: '2-digit',
//                     month: '2-digit',
//                     year: 'numeric',
//                   });
//                   return (
//                     <tr key={idx} className="font-semibold">
//                       <td className="border px-4 py-2">{r.district?.name}</td>
//                       <td className="border px-4 py-2">{formattedDate}</td>
//                       <td className="border px-4 py-2">{cash}</td>
//                       <td className="border px-4 py-2">{priv}</td>
//                       <td className="border px-4 py-2">{gov}</td>
//                       <td className="border px-4 py-2 text-right">{total}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//               <tfoot className="bg-gray-300 font-bold">
//                 <tr>
//                   <td className="border px-4 py-2 text-right" colSpan={2}>Totals:</td>
//                   <td className="border px-4 py-2">{receiptsTotals.totalCash}</td>
//                   <td className="border px-4 py-2">{receiptsTotals.totalPrivate}</td>
//                   <td className="border px-4 py-2">{receiptsTotals.totalGov}</td>
//                   <td className="border px-4 py-2 text-right">{receiptsTotals.grandTotal}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         )}

//         {/* Download Buttons */}
//         {(sales.length > 0 || receipts.length > 0) && (
//           <div className="flex flex-col sm:flex-row flex-wrap gap-4">
//             <button
//               onClick={() => downloadFile('excel', 'sales')}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Sales Excel
//             </button>
//             <button
//               onClick={() => downloadFile('pdf', 'sales')}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Download Sales PDF
//             </button>
//             <button
//               onClick={() => downloadFile('excel', 'receipts')}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Receipts Excel
//             </button>
//             <button
//               onClick={() => downloadFile('pdf', 'receipts')}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Download Receipts PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsPage = () => {
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  const [sales, setSales] = useState([]);
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [canReport, setCanReport] = useState(false);
  const [checkingPermission, setCheckingPermission] = useState(true);
  const [userBranch, setUserBranch] = useState('');
  // const [reportType, setReportType] = useState('datewise');
  const [reportFetched, setReportFetched] = useState(false);

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

const [reportType, setReportType] = useState("datewise");
const [startDate, setStartDate] = useState(today);
const [endDate, setEndDate] = useState(today);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCanReport(res.data?.canReport || false);
        setUserBranch(res.data?.branch || '');
      } catch (err) {
        console.error('Failed to fetch user profile:', err.response?.data || err.message);
      } finally {
        setCheckingPermission(false);
      }
    };
    fetchUser();
  }, []);

  const fetchReports = async () => {
  if (!startDate || !endDate) return;

  setLoading(true);
  setReportFetched(true);
  const token = localStorage.getItem('token');
  const endpoint =
    reportType === 'datewise'
      ? '/api/report'
      : '/api/report/district-wise';

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { startDate, endDate },
    });

    setSales(res.data.sales);
    setReceipts(res.data.receipts);
  } catch (error) {
    console.error('Error fetching reports:', error.response?.data || error.message);
  } finally {
    setLoading(false);
  }
};


  const downloadFile = async (format, type) => {
    try {
      const token = localStorage.getItem("token");
      const route =
        reportType === 'datewise'
          ? `${type}/${format}`
          : `districtwise/${type}/${format}`;

      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/report/${route}`, {
        params: { startDate, endDate },
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const blob = new Blob([res.data]);
      const fileExtension = format === 'excel' ? 'xlsx' : format;
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${type}-${reportType}-${startDate}_to_${endDate}.${fileExtension}`;
      link.click();
    } catch (err) {
      console.error(`Download error:`, err);
    }
  };

  if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
  if (!canReport) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;

  const calculateTotals = (data) => {
    let totalCash = 0, totalPrivate = 0, totalGov = 0;
    data.forEach(({ cash = 0, private: priv = 0, gov = 0 }) => {
      totalCash += cash;
      totalPrivate += priv;
      totalGov += gov;
    });
    const grandTotal = totalCash + totalPrivate + totalGov;
    return { totalCash, totalPrivate, totalGov, grandTotal };
  };

  const salesTotals = calculateTotals(sales);
  const receiptsTotals = calculateTotals(receipts);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Reports</h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="border p-3 rounded-full shadow font-semibold w-full sm:w-auto"
          >
            <option value="datewise">Date-wise</option>
            <option value="districtwise">District-wise</option>
          </select>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-3 rounded-full shadow font-semibold w-full sm:w-auto"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-3 rounded-full shadow font-semibold w-full sm:w-auto"
          />
          <button
            onClick={fetchReports}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full sm:w-auto"
          >
            Get Report
          </button>
        </div>

        {/* Loading */}
        {loading && <p className="text-gray-500">Loading...</p>}

        {/* Sales Report */}
      
        {sales.length > 0 && (
  <div className="mb-6 overflow-x-auto">
    <h3 className="text-xl font-semibold mb-2">Sales Report</h3>
    <table className="min-w-full border table-auto text-sm sm:text-base">
      <thead className="bg-gray-400">
        <tr>
          {reportType === 'datewise' && <th className="border px-4 py-2">Date</th>}
          <th className="border px-4 py-2">District</th>
          <th className="border px-4 py-2">Cash</th>
          <th className="border px-4 py-2">Private</th>
          <th className="border px-4 py-2">Gov</th>
          <th className="border px-4 py-2 text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        {(() => {
          let lastDate = null;
          let isGray = false;
          return sales.map((s, idx) => {
            const cash = s.cash ?? 0;
            const priv = s.private ?? 0;
            const gov = s.gov ?? 0;
            const total = cash + priv + gov;
            const formattedDate = new Date(s.date).toLocaleDateString('en-IN', {
              day: '2-digit', month: '2-digit', year: 'numeric',
            });

            let showDate = true;
            if (formattedDate === lastDate) {
              showDate = false;
            } else {
              lastDate = formattedDate;
              isGray = !isGray;
            }

            return (
              <tr key={idx} className={`font-semibold ${isGray ? 'bg-blue-200' : 'bg-white'}`}>
                {reportType === 'datewise' && (
                  <td className="border px-4 py-2">
                    {showDate ? formattedDate : ''}
                  </td>
                )}
                <td className="border px-4 py-2">
                  {typeof s.district === 'string' ? s.district : s.district?.name}
                </td>
                <td className="border px-4 py-2">{cash}</td>
                <td className="border px-4 py-2">{priv}</td>
                <td className="border px-4 py-2">{gov}</td>
                <td className="border px-4 py-2 text-right">{total}</td>
              </tr>
            );
          });
        })()}
      </tbody>
      <tfoot className="bg-gray-300 font-bold">
        <tr>
          <td className="border px-4 py-2 text-right" colSpan={reportType === 'datewise' ? 2 : 1}>Totals:</td>
          <td className="border px-4 py-2">{salesTotals.totalCash}</td>
          <td className="border px-4 py-2">{salesTotals.totalPrivate}</td>
          <td className="border px-4 py-2">{salesTotals.totalGov}</td>
          <td className="border px-4 py-2 text-right">{salesTotals.grandTotal}</td>
        </tr>
      </tfoot>
    </table>
  </div>
)}


       
        {receipts.length > 0 && (
  <div className="mb-6 overflow-x-auto">
    <h3 className="text-xl font-semibold mb-2">Receipts Report</h3>
    <table className="min-w-full border table-auto text-sm sm:text-base">
      <thead className="bg-gray-400">
        <tr>
          {reportType === 'datewise' && <th className="border px-4 py-2">Date</th>}
          <th className="border px-4 py-2">District</th>
          <th className="border px-4 py-2">Cash</th>
          <th className="border px-4 py-2">Private</th>
          <th className="border px-4 py-2">Gov</th>
          <th className="border px-4 py-2 text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        {(() => {
          let lastDate = null;
          let isGray = false;
          return receipts.map((r, idx) => {
            const cash = r.cash ?? 0;
            const priv = r.private ?? 0;
            const gov = r.gov ?? 0;
            const total = cash + priv + gov;
            const formattedDate = new Date(r.date).toLocaleDateString('en-IN', {
              day: '2-digit', month: '2-digit', year: 'numeric',
            });

            let showDate = true;
            if (formattedDate === lastDate) {
              showDate = false;
            } else {
              lastDate = formattedDate;
              isGray = !isGray;
            }

            return (
              <tr key={idx} className={`font-semibold ${isGray ? 'bg-blue-200' : 'bg-white'}`}>
                {reportType === 'datewise' && (
                  <td className="border px-4 py-2">
                    {showDate ? formattedDate : ''}
                  </td>
                )}
                <td className="border px-4 py-2">
                  {typeof r.district === 'string' ? r.district : r.district?.name}
                </td>
                <td className="border px-4 py-2">{cash}</td>
                <td className="border px-4 py-2">{priv}</td>
                <td className="border px-4 py-2">{gov}</td>
                <td className="border px-4 py-2 text-right">{total}</td>
              </tr>
            );
          });
        })()}
      </tbody>
      <tfoot className="bg-gray-300 font-bold">
        <tr>
          <td className="border px-4 py-2 text-right" colSpan={reportType === 'datewise' ? 2 : 1}>Totals:</td>
          <td className="border px-4 py-2">{receiptsTotals.totalCash}</td>
          <td className="border px-4 py-2">{receiptsTotals.totalPrivate}</td>
          <td className="border px-4 py-2">{receiptsTotals.totalGov}</td>
          <td className="border px-4 py-2 text-right">{receiptsTotals.grandTotal}</td>
        </tr>
      </tfoot>
    </table>
  </div>
)}


{reportFetched && !loading && sales.length === 0 && receipts.length === 0 && (
  <div className="text-center text-red-600 font-medium mb-6">
    No Sales or Receipts present for dates from{" "}
    {new Date(startDate).toLocaleDateString('en-IN')} to{" "}
    {new Date(endDate).toLocaleDateString('en-IN')}
  </div>
)}
        {/* Download Buttons */}
        {(sales.length > 0 || receipts.length > 0) && (
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button onClick={() => downloadFile('excel', 'sales')} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Download Sales Excel
            </button>
            <button onClick={() => downloadFile('pdf', 'sales')} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Download Sales PDF
            </button>
            <button onClick={() => downloadFile('excel', 'receipts')} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Download Receipts Excel
            </button>
            <button onClick={() => downloadFile('pdf', 'receipts')} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Download Receipts PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;
