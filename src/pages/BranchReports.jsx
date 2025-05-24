// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BRANCHES = ['Bhopal', 'Indore', 'Satna', 'Jabalpur', 'Gwalior', 'Chhindwara'];

// const BranchReportsPage = () => {
//   const [selectedBranches, setSelectedBranches] = useState([]);
//   const [reportData, setReportData] = useState([]);
//   const token = localStorage.getItem('token');

//   const handleBranchChange = (branch) => {
//     setSelectedBranches((prev) =>
//       prev.includes(branch)
//         ? prev.filter((b) => b !== branch)
//         : [...prev, branch]
//     );
//   };

//   useEffect(() => {
//     if (selectedBranches.length === 0) {
//       setReportData([]);
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports`,
//           { branches: selectedBranches },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setReportData(res.data);
//       } catch (err) {
//         console.error('Error fetching reports:', err);
//       }
//     };

//     fetchData();
//   }, [selectedBranches]);

//   const handleDownload = async (format) => {
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports/download`,
//         { branches: selectedBranches, format },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           responseType: 'blob',
//         }
//       );

//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `branch_report.${format === 'pdf' ? 'pdf' : 'xlsx'}`);
//       document.body.appendChild(link);
//       link.click();
//     } catch (err) {
//       console.error(`Download ${format} failed`, err);
//     }
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Branch-wise Reports</h2>

//       <div className="mb-4">
//         <h3 className="font-semibold mb-2">Select Branches:</h3>
//         <div className="flex flex-wrap gap-4">
//           {BRANCHES.map((branch) => (
//             <label key={branch} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={selectedBranches.includes(branch)}
//                 onChange={() => handleBranchChange(branch)}
//                 className="w-5 h-5 accent-purple-600"
//               />
//               {branch}
//             </label>
//           ))}
//         </div>
//       </div>

//       {reportData.length > 0 && (
//         <>
//           <div className="overflow-auto shadow-lg rounded-md bg-white border mt-6">
//             <table className="min-w-full text-sm text-left">
//               <thead className="bg-purple-100 text-gray-800">
//                 <tr>
//                   <th className="p-2 border">Branch</th>
//                   <th className="p-2 border">Sale Total</th>
//                   <th className="p-2 border">Receipt Cash</th>
//                   <th className="p-2 border">Receipt Online</th>
//                   <th className="p-2 border">Receipt Bank</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reportData.map((row, index) => (
//                   <tr key={index} className="hover:bg-purple-50">
//                     <td className="p-2 border">{row.branch}</td>
//                     <td className="p-2 border">{row.totalSale}</td>
//                     <td className="p-2 border">{row.totalCash}</td>
//                     <td className="p-2 border">{row.totalOnline}</td>
//                     <td className="p-2 border">{row.totalBank}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="mt-6 flex gap-4">
//             <button
//               onClick={() => handleDownload('pdf')}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Download PDF
//             </button>
//             <button
//               onClick={() => handleDownload('excel')}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Download Excel
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default BranchReportsPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// const branches = ['Bhopal', 'Indore', 'Satna', 'Jabalpur', 'Gwalior', 'Chhindwara'];

// const BranchReportsPage = () => {
//   const [selectedBranches, setSelectedBranches] = useState([]);
//   const [salesData, setSalesData] = useState([]);
//   const [receiptsData, setReceiptsData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem('token');

//   const toggleBranch = (branch) => {
//     setSelectedBranches((prev) =>
//       prev.includes(branch) ? prev.filter(b => b !== branch) : [...prev, branch]
//     );
//   };

//   const fetchReports = async () => {
//     if (selectedBranches.length === 0) {
//       alert('Please select at least one branch.');
//       return;
//     }
//     setLoading(true);
//     try {
//       const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports`, {
//         branches: selectedBranches
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setSalesData(data.sales);
//       setReceiptsData(data.receipts);
//     } catch (error) {
//       console.error('Error fetching branch reports:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const downloadPDF = async (type) => {
//     if (selectedBranches.length === 0) {
//       alert('Please select at least one branch.');
//       return;
//     }
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports/download/${type}`,
//         { branches: selectedBranches },
//         {
//           responseType: 'blob',
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${type}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//     } catch (err) {
//       console.error(`Error downloading ${type} PDF:`, err);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4 text-center">Branch Wise Reports</h2>

//       <div className="mb-4 flex flex-wrap gap-4">
//         {branches.map((branch) => (
//           <label key={branch} className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={selectedBranches.includes(branch)}
//               onChange={() => toggleBranch(branch)}
//               className="w-5 h-5 accent-purple-600"
//             />
//             {branch}
//           </label>
//         ))}
//       </div>

//       <div className="flex gap-4 mb-6">
//         <button onClick={fetchReports} className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Fetch Reports</button>
//         <button onClick={() => downloadPDF('sales')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download Sales PDF</button>
//         <button onClick={() => downloadPDF('receipts')} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Download Receipts PDF</button>
//       </div>

//       {loading && <p>Loading...</p>}

//       {salesData.length > 0 && (
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">Sales Report</h3>
//           <div className="overflow-auto bg-white rounded shadow p-4">
//             <table className="min-w-full border">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="border px-4 py-2">Branch</th>
//                   <th className="border px-4 py-2">Total Sales</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {salesData.map((item, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="border px-4 py-2">{item.branch}</td>
//                     <td className="border px-4 py-2">{item.totalSales}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {receiptsData.length > 0 && (
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Receipts Report</h3>
//           <div className="overflow-auto bg-white rounded shadow p-4">
//             <table className="min-w-full border">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="border px-4 py-2">Branch</th>
//                   <th className="border px-4 py-2">Total Receipts</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {receiptsData.map((item, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="border px-4 py-2">{item.branch}</td>
//                     <td className="border px-4 py-2">{item.totalReceipts}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BranchReportsPage;
// import React, { useState } from 'react';
// import axios from 'axios';

// const BRANCHES = ['Bhopal', 'Indore', 'Satna', 'Jabalpur', 'Gwalior', 'Chhindwara'];

// const BranchReportsPage = () => {
//   const [selectedBranches, setSelectedBranches] = useState([]);
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [reportData, setReportData] = useState({});

//   const handleCheckboxChange = (branch) => {
//     setSelectedBranches((prev) =>
//       prev.includes(branch) ? prev.filter((b) => b !== branch) : [...prev, branch]
//     );
//   };

//   const fetchReports = async () => {
//     if (!fromDate || !toDate || selectedBranches.length === 0) {
//       alert('Please select branches and date range.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token'); // or however you're storing it

//         const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports`,
//         { branches: selectedBranches, fromDate, toDate },
//         {
//             headers: {
//              Authorization: `Bearer ${token}`,
//             },
//          }
//         );
//       setReportData(response.data);
//     } catch (error) {
//       alert('Failed to fetch reports.');
//     }
//   };

//   const downloadPDF = async (type) => {
//     try {
//       const res = await axios.post(
//   `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports/${type}`,
//   { branches: selectedBranches, fromDate, toDate },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     responseType: 'blob'
//   }
// );
//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${type}-report.pdf`);
//       document.body.appendChild(link);
//       link.click();
//     } catch (err) {
//       alert(`Failed to download ${type} report.`);
//     }
//   };

//   const renderTable = (title, data) => (
//     <>
//       <h3 className="text-lg font-bold mt-8">{title}</h3>
//       <table className="min-w-full bg-white border border-gray-300 mt-2 mb-6">
//         <thead>
//           <tr className="bg-purple-100">
//             <th className="px-4 py-2 border">District</th>
//             <th className="px-4 py-2 border">Cash</th>
//             <th className="px-4 py-2 border">Private</th>
//             <th className="px-4 py-2 border">Gov</th>
//             <th className="px-4 py-2 border">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.rows.map((row, idx) => (
//             <tr key={idx} className="text-center">
//               <td className="border px-4 py-2">{row.district}</td>
//               <td className="border px-4 py-2">{row.cash}</td>
//               <td className="border px-4 py-2">{row.private}</td>
//               <td className="border px-4 py-2">{row.gov}</td>
//               <td className="border px-4 py-2">{row.total}</td>
//             </tr>
//           ))}
//           <tr className="font-bold bg-gray-100">
//             <td className="border px-4 py-2 text-right" colSpan={4}>Grand Total</td>
//             <td className="border px-4 py-2">{data.grandTotal}</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Branch-wise Reports</h2>

//       <div className="mb-4">
//         <label className="block font-semibold mb-1">Select Branches:</label>
//         <div className="flex flex-wrap gap-4">
//           {BRANCHES.map((branch) => (
//             <label key={branch} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(branch)}
//                 checked={selectedBranches.includes(branch)}
//               />
//               <span>{branch}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-4">
//         <div>
//           <label>From Date:</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="border p-1 rounded ml-2"
//           />
//         </div>
//         <div>
//           <label>To Date:</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="border p-1 rounded ml-2"
//           />
//         </div>
//       </div>

//       <div className="flex gap-4 mb-6">
//         <button onClick={fetchReports} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Fetch Reports
//         </button>
//         <button onClick={() => downloadPDF('sales')} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
//           Download Sales PDF
//         </button>
//         <button onClick={() => downloadPDF('receipts')} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//           Download Receipts PDF
//         </button>
//       </div>

//       {selectedBranches.map((branch) => (
//         <div key={branch}>
//           <h2 className="text-xl font-bold mt-10">{branch}</h2>
//           {reportData[branch]?.sales && renderTable('Sales Report', reportData[branch].sales)}
//           {reportData[branch]?.receipts && renderTable('Receipts Report', reportData[branch].receipts)}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BranchReportsPage;


// import React, { useState } from 'react';
// import axios from 'axios';

// const BRANCHES = ['Bhopal', 'Indore', 'Satna', 'Jabalpur', 'Gwalior', 'Chhindwara'];

// const BranchReportsPage = () => {
//   const [selectedBranches, setSelectedBranches] = useState([]);
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [reportData, setReportData] = useState({});

//   const handleCheckboxChange = (branch) => {
//     setSelectedBranches((prev) =>
//       prev.includes(branch) ? prev.filter((b) => b !== branch) : [...prev, branch]
//     );
//   };

//   const fetchReports = async () => {
//     if (!fromDate || !toDate || selectedBranches.length === 0) {
//       alert('Please select branches and date range.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports`,
//         { branches: selectedBranches, fromDate, toDate },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setReportData(response.data);
//     } catch (error) {
//       alert('Failed to fetch reports.');
//     }
//   };

//   const downloadPDF = async (type) => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports/download/${type}`,
//         { branches: selectedBranches, fromDate, toDate },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           responseType: 'blob',
//         }
//       );
//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${type}-report.pdf`);
//       document.body.appendChild(link);
//       link.click();
//     } catch (err) {
//       alert(`Failed to download ${type} report.`);
//     }
//   };

//   const calculateFinalTotals = (reportData, type) => {
//     let cash = 0, privateAmt = 0, gov = 0, total = 0;
//     for (const branch in reportData) {
//       if (reportData[branch][type]) {
//         for (const row of reportData[branch][type].rows) {
//           cash += row.cash || 0;
//           privateAmt += row.private || 0;
//           gov += row.gov || 0;
//           total += row.total || 0;
//         }
//       }
//     }
//     return { cash, private: privateAmt, gov, total };
//   };

//   const renderTable = (title, data) => {
//     const totalCash = data.rows.reduce((sum, r) => sum + (r.cash || 0), 0);
//     const totalPrivate = data.rows.reduce((sum, r) => sum + (r.private || 0), 0);
//     const totalGov = data.rows.reduce((sum, r) => sum + (r.gov || 0), 0);
//     const totalOverall = totalCash + totalPrivate + totalGov;

//     return (
//       <>
//         <h3 className="text-lg font-bold mt-8">{title}</h3>
//         <table className="min-w-full bg-white border border-gray-300 mt-2 mb-6">
//           <thead>
//             <tr className="bg-purple-100">
//               <th className="px-4 py-2 border">District</th>
//               <th className="px-4 py-2 border">Cash</th>
//               <th className="px-4 py-2 border">Private</th>
//               <th className="px-4 py-2 border">Gov</th>
//               <th className="px-4 py-2 border">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.rows.map((row, idx) => (
//               <tr key={idx} className="text-center">
//                 <td className="border px-4 py-2">{row.district}</td>
//                 <td className="border px-4 py-2">{row.cash}</td>
//                 <td className="border px-4 py-2">{row.private}</td>
//                 <td className="border px-4 py-2">{row.gov}</td>
//                 <td className="border px-4 py-2">{row.total}</td>
//               </tr>
//             ))}
//             <tr className="font-bold bg-gray-100">
//               <td className="border px-4 py-2 text-right">Total</td>
//               <td className="border px-4 py-2">{totalCash}</td>
//               <td className="border px-4 py-2">{totalPrivate}</td>
//               <td className="border px-4 py-2">{totalGov}</td>
//               <td className="border px-4 py-2">{data.grandTotal}</td>
//             </tr>
//           </tbody>
//         </table>
//       </>
//     );
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Branch-wise Reports</h2>

//       <div className="mb-4">
//         <label className="block font-semibold mb-1">Select Branches:</label>
//         <div className="flex flex-wrap gap-4">
//           {BRANCHES.map((branch) => (
//             <label key={branch} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(branch)}
//                 checked={selectedBranches.includes(branch)}
//               />
//               <span>{branch}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-4">
//         <div>
//           <label>From Date:</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="border p-1 rounded ml-2"
//           />
//         </div>
//         <div>
//           <label>To Date:</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="border p-1 rounded ml-2"
//           />
//         </div>
//       </div>

//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={fetchReports}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Fetch Reports
//         </button>
//         <button
//           onClick={() => downloadPDF('sales')}
//           className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//         >
//           Download Sales PDF
//         </button>
//         <button
//           onClick={() => downloadPDF('receipts')}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Download Receipts PDF
//         </button>
//       </div>

//       {selectedBranches.map((branch) => (
//         <div key={branch}>
//           <h2 className="text-xl font-bold mt-10">{branch}</h2>
//           {reportData[branch]?.sales && renderTable('Sales Report', reportData[branch].sales)}
//           {reportData[branch]?.receipts && renderTable('Receipts Report', reportData[branch].receipts)}
//         </div>
//       ))}

//       {selectedBranches.length > 0 && (
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-4">Grand Totals Across All Branches</h2>

//           <h3 className="text-lg font-semibold mt-6">Sales Final Totals</h3>
//           {(() => {
//             const totals = calculateFinalTotals(reportData, 'sales');
//             return (
//               <table className="min-w-full bg-white border border-gray-300 mt-2 mb-6">
//                 <thead>
//                   <tr className="bg-purple-100">
//                     <th className="px-4 py-2 border">Cash</th>
//                     <th className="px-4 py-2 border">Private</th>
//                     <th className="px-4 py-2 border">Gov</th>
//                     <th className="px-4 py-2 border">Grand Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="text-center font-bold">
//                     <td className="border px-4 py-2">{totals.cash}</td>
//                     <td className="border px-4 py-2">{totals.private}</td>
//                     <td className="border px-4 py-2">{totals.gov}</td>
//                     <td className="border px-4 py-2">{totals.total}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             );
//           })()}

//           <h3 className="text-lg font-semibold mt-6">Receipts Final Totals</h3>
//           {(() => {
//             const totals = calculateFinalTotals(reportData, 'receipts');
//             return (
//               <table className="min-w-full bg-white border border-gray-300 mt-2 mb-6">
//                 <thead>
//                   <tr className="bg-green-100">
//                     <th className="px-4 py-2 border">Cash</th>
//                     <th className="px-4 py-2 border">Private</th>
//                     <th className="px-4 py-2 border">Gov</th>
//                     <th className="px-4 py-2 border">Grand Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="text-center font-bold">
//                     <td className="border px-4 py-2">{totals.cash}</td>
//                     <td className="border px-4 py-2">{totals.private}</td>
//                     <td className="border px-4 py-2">{totals.gov}</td>
//                     <td className="border px-4 py-2">{totals.total}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             );
//           })()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BranchReportsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BRANCHES = ['Bhopal', 'Indore', 'Satna', 'Jabalpur', 'Gwalior', 'Chhindwara'];

const BranchReportsPage = () => {
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reportData, setReportData] = useState({});
  const [canAccess, setCanAccess] = useState(false);
  const [loadingPermission, setLoadingPermission] = useState(true);

  useEffect(() => {
    const fetchUserPermission = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setCanAccess(false);
          setLoadingPermission(false);
          return;
        }
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCanAccess(res.data.canBranchReports === true);
      } catch (error) {
        setCanAccess(false);
      } finally {
        setLoadingPermission(false);
      }
    };

    fetchUserPermission();
  }, []);

  const handleCheckboxChange = (branch) => {
    setSelectedBranches((prev) =>
      prev.includes(branch) ? prev.filter((b) => b !== branch) : [...prev, branch]
    );
  };

  const fetchReports = async () => {
    if (!fromDate || !toDate || selectedBranches.length === 0) {
      alert('Please select branches and date range.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports`,
        { branches: selectedBranches, fromDate, toDate },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReportData(response.data);
    } catch (error) {
      alert('Failed to fetch reports.');
    }
  };

  const downloadPDF = async (type) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/branch-reports/download/${type}`,
        { branches: selectedBranches, fromDate, toDate },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: 'blob',
        }
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${type}-report.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert(`Failed to download ${type} report.`);
    }
  };

  const calculateFinalTotals = (reportData, type) => {
    let cash = 0,
      privateAmt = 0,
      gov = 0,
      total = 0;
    for (const branch in reportData) {
      if (reportData[branch][type]) {
        for (const row of reportData[branch][type].rows) {
          cash += row.cash || 0;
          privateAmt += row.private || 0;
          gov += row.gov || 0;
          total += row.total || 0;
        }
      }
    }
    return { cash, private: privateAmt, gov, total };
  };

  const renderTable = (title, data) => {
    const totalCash = data.rows.reduce((sum, r) => sum + (r.cash || 0), 0);
    const totalPrivate = data.rows.reduce((sum, r) => sum + (r.private || 0), 0);
    const totalGov = data.rows.reduce((sum, r) => sum + (r.gov || 0), 0);
    const totalOverall = totalCash + totalPrivate + totalGov;

    return (
      <>
        <h3 className="text-lg font-bold mt-8">{title}</h3>
        <table className="min-w-full bg-white border border-gray-300 mt-2 mb-6">
          <thead>
            <tr className="bg-purple-100">
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Cash</th>
              <th className="px-4 py-2 border">Private</th>
              <th className="px-4 py-2 border">Gov</th>
              <th className="px-4 py-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, idx) => (
              <tr key={idx} className="text-center">
                <td className="border px-4 py-2">{row.district}</td>
                <td className="border px-4 py-2">{row.cash}</td>
                <td className="border px-4 py-2">{row.private}</td>
                <td className="border px-4 py-2">{row.gov}</td>
                <td className="border px-4 py-2">{row.total}</td>
              </tr>
            ))}
            <tr className="font-bold bg-gray-100">
              <td className="border px-4 py-2 text-right">Total</td>
              <td className="border px-4 py-2">{totalCash}</td>
              <td className="border px-4 py-2">{totalPrivate}</td>
              <td className="border px-4 py-2">{totalGov}</td>
              <td className="border px-4 py-2">{data.grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  if (loadingPermission) {
    return <div className="p-4">Loading permissions...</div>;
  }

  if (!canAccess) {
    return <div className="p-4 text-red-600 font-bold">Access Denied</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Branch-wise Reports</h2>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Select Branches:</label>
        <div className="flex flex-wrap gap-4">
          {BRANCHES.map((branch) => (
            <label key={branch} className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(branch)}
                checked={selectedBranches.includes(branch)}
              />
              <span>{branch}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label>From Date:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border p-1 rounded ml-2"
          />
        </div>
        <div>
          <label>To Date:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border p-1 rounded ml-2"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={fetchReports}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fetch Reports
        </button>
        <button
          onClick={() => downloadPDF('sales')}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Download Sales PDF
        </button>
        <button
          onClick={() => downloadPDF('receipts')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download Receipts PDF
        </button>
      </div>

      {selectedBranches.map((branch) => (
        <div key={branch}>
          <h2 className="text-xl font-bold mt-10">{branch}</h2>
          {reportData[branch]?.sales && renderTable('Sales Report', reportData[branch].sales)}
          {reportData[branch]?.receipts && renderTable('Receipts Report', reportData[branch].receipts)}
        </div>
      ))}

      {selectedBranches.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Grand Totals Across All Branches</h2>

          <h3 className="text-lg font-semibold mt-6">Sales Final Totals</h3>
          {(() => {
            const totals = calculateFinalTotals(reportData, 'sales');
            return (
              <table className="min-w-full bg-white border border-gray-300 mt-2 mb-6">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="px-4 py-2 border">Cash</th>
                    <th className="px-4 py-2 border">Private</th>
                    <th className="px-4 py-2 border">Gov</th>
                    <th className="px-4 py-2 border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center font-bold">
                    <td className="border px-4 py-2">{totals.cash}</td>
                    <td className="border px-4 py-2">{totals.private}</td>
                    <td className="border px-4 py-2">{totals.gov}</td>
                    <td className="border px-4 py-2">{totals.total}</td>
                  </tr>
                </tbody>
              </table>
            );
          })()}

          <h3 className="text-lg font-semibold mt-6">Receipts Final Totals</h3>
          {(() => {
            const totals = calculateFinalTotals(reportData, 'receipts');
            return (
              <table className="min-w-full bg-white border border-gray-300 mt-2 mb-6">
                <thead>
                  <tr className="bg-green-100">
                    <th className="px-4 py-2 border">Cash</th>
                    <th className="px-4 py-2 border">Private</th>
                    <th className="px-4 py-2 border">Gov</th>
                    <th className="px-4 py-2 border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center font-bold">
                    <td className="border px-4 py-2">{totals.cash}</td>
                    <td className="border px-4 py-2">{totals.private}</td>
                    <td className="border px-4 py-2">{totals.gov}</td>
                    <td className="border px-4 py-2">{totals.total}</td>
                  </tr>
                </tbody>
              </table>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default BranchReportsPage;
