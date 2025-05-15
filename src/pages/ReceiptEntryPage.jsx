// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import dayjs from 'dayjs';

// const ReceiptEntryPage = () => {
//   const { token } = useAuth();
//   const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
//   const [districts, setDistricts] = useState([]);
//   const [receipts, setReceipts] = useState({});
//   const [total, setTotal] = useState(0);
//   const [canReceipt, setCanReceipt] = useState(false);
//   const [checkingPermission, setCheckingPermission] = useState(true)

// //   const branch = localStorage.getItem('user')
//   const user = JSON.parse(localStorage.getItem('user'));
//   const branch = user?.branch;




//   useEffect(() => {
//       const fetchUser = async () => {
//         try {
//           const token = localStorage.getItem('token'); // ✅ Get token
//           if (!token) throw new Error('No token found');
    
//           const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
    
//           console.log("User Profile:", res.data);
//           setCanReceipt(res.data?.canReceipt || false);
//         } catch (err) {
//           console.error('Failed to fetch user profile:', err.response?.data || err.message);
//         } finally {
//           setCheckingPermission(false);
//         }
//       };
//       fetchUser();
//     }, []);

// useEffect(() => {
//     const fetchDistricts = async () => {
//         const token = localStorage.getItem('token');
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/district/branch`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log(res)
//       setDistricts(res.data);
//     };
//     fetchDistricts();
//   }, []);

//   const fetchReceipts = async () => {
//     console.log(import.meta.env.VITE_API_BASE_URL)
//     const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/receipt?date=${date}`);
//     const receiptMap = {};
//     let grandTotal = 0;

//     res.data.forEach((r) => {
//       const districtTotal = r.cash + r.private + r.gov;
//       grandTotal += districtTotal;
//       receiptMap[r.district] = {
//         cash: r.cash,
//         private: r.private,
//         gov: r.gov,
//       };
//     });

//     setReceipts(receiptMap);
//     setTotal(grandTotal);
//   };

//   const handleChange = (district, field, value) => {
//     const updated = {
//       ...receipts[district],
//       [field]: parseFloat(value) || 0,
//     };

//     const updatedReceipts = { ...receipts, [district]: updated };
//     setReceipts(updatedReceipts);

//     const newTotal = Object.values(updatedReceipts).reduce((acc, curr) => acc + curr.cash + curr.private + curr.gov, 0);
//     setTotal(newTotal);
//   };


// const handleSubmit = async () => {
//     try {
//       const entries = districts
//         .map((d) => ({
//             // branch : branch.branch,
//             branch,
//           district: d.name,
//           date,
//           cash: receipts[d.name]?.cash || 0,
//           private: receipts[d.name]?.private || 0,
//           gov: receipts[d.name]?.gov || 0,
//         }))
//         .filter(entry => entry.cash !== 0 || entry.private !== 0 || entry.gov !== 0); // filter out zero entries
  
//       if (entries.length === 0) {
//         alert('No valid receipt entries to save.');
//         return;
//       }
  
//       await Promise.all(entries.map((entry) =>
//         axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/receipt`, entry, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//       ));
  
//       alert('Receipts saved successfully!');
//     } catch (err) {
//       console.error('Error saving receipts:', err);
//       alert('Error saving receipts');
//     }
//   };
  


//   useEffect(() => {
//     if (districts.length) fetchReceipts();
//   }, [date, districts]);


//   if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
//   if (!canReceipt) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;


// return (
//   <div className="p-4 sm:p-6 bg-gray-200">
//     <h2 className="text-2xl sm:text-3xl font-bold mb-4">Receipt Entry</h2>

//     <label className="block mb-4">
//       <span className="mr-2 font-semibold">Select Date:</span>
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         className="mt-2 sm:ml-2 border p-2 rounded-full shadow font-semibold w-full sm:w-auto"
//       />
//     </label>

//     <div className="overflow-x-auto">
//       <table className="min-w-full border mt-4 mb-6 font-semibold text-sm sm:text-base">
//         <thead>
//           <tr className="bg-gray-400">
//             <th className="border px-4 py-2">District</th>
//             <th className="border px-4 py-2">Cash</th>
//             <th className="border px-4 py-2">Private</th>
//             <th className="border px-4 py-2">Gov</th>
//             <th className="border px-4 py-2">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {districts.map((d) => {
//             const r = receipts[d.name] || { cash: "", private: "", gov: "" };
//             const totalPerDistrict = (
//               (parseFloat(r.cash) || 0) +
//               (parseFloat(r.private) || 0) +
//               (parseFloat(r.gov) || 0)
//             ).toFixed(2);

//             return (
//               <tr key={d._id}>
//                 <td className="border px-4 py-2">{d.name}</td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="number"
//                     className="w-full sm:w-24 border px-2 py-1 rounded"
//                     value={r.cash}
//                     onChange={(e) => handleChange(d.name, 'cash', e.target.value)}
//                   />
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="number"
//                     className="w-full sm:w-24 border px-2 py-1 rounded"
//                     value={r.private}
//                     onChange={(e) => handleChange(d.name, 'private', e.target.value)}
//                   />
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="number"
//                     className="w-full sm:w-24 border px-2 py-1 rounded"
//                     value={r.gov}
//                     onChange={(e) => handleChange(d.name, 'gov', e.target.value)}
//                   />
//                 </td>
//                 <td className="border px-4 py-2">{totalPerDistrict}</td>
//               </tr>
//             );
//           })}
//           <tr className="bg-gray-300 font-semibold">
//             <td colSpan={4} className="border px-4 py-2 text-right bg-gray-400">Grand Total</td>
//             <td className="border px-4 py-2 bg-gray-400">{total}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>

//     <button
//       onClick={handleSubmit}
//       className="bg-green-600 text-white px-6 py-2 rounded-full w-full sm:w-auto"
//     >
//       Save Receipts
//     </button>
//   </div>
// );
// };

// export default ReceiptEntryPage;


import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import dayjs from 'dayjs';

const ReceiptEntryPage = () => {
  const { token } = useAuth();
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [districts, setDistricts] = useState([]);
  const [receipts, setReceipts] = useState({});
  const [totals, setTotals] = useState({ cash: 0, private: 0, gov: 0, grand: 0 });
  const [canReceipt, setCanReceipt] = useState(false);
  const [checkingPermission, setCheckingPermission] = useState(true);

  const user = JSON.parse(localStorage.getItem('user'));
  const branch = user?.branch;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCanReceipt(res.data?.canReceipt || false);
      } catch (err) {
        console.error('Failed to fetch user profile:', err.response?.data || err.message);
      } finally {
        setCheckingPermission(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/district/branch`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDistricts(res.data);
    };
    fetchDistricts();
  }, []);

  const fetchReceipts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/receipt?date=${date}`);
    const receiptMap = {};
    let cash = 0, priv = 0, gov = 0;

    res.data.forEach((r) => {
      receiptMap[r.district] = {
        cash: r.cash,
        private: r.private,
        gov: r.gov,
      };
      cash += r.cash;
      priv += r.private;
      gov += r.gov;
    });

    setReceipts(receiptMap);
    setTotals({
      cash,
      private: priv,
      gov,
      grand: cash + priv + gov
    });
  };

  useEffect(() => {
    if (districts.length) fetchReceipts();
  }, [date, districts]);

  const calculateTotals = (updatedReceipts) => {
    let cash = 0, priv = 0, gov = 0;
    Object.values(updatedReceipts).forEach((r) => {
      cash += r.cash || 0;
      priv += r.private || 0;
      gov += r.gov || 0;
    });
    setTotals({
      cash,
      private: priv,
      gov,
      grand: cash + priv + gov
    });
  };

  const handleChange = (district, field, value) => {
    const updated = {
      ...receipts[district],
      [field]: parseFloat(value) || 0,
    };
    const updatedReceipts = { ...receipts, [district]: updated };
    setReceipts(updatedReceipts);
    calculateTotals(updatedReceipts);
  };

  const handleDelete = (district) => {
    const updatedReceipts = { ...receipts };
    delete updatedReceipts[district];
    setReceipts(updatedReceipts);
    calculateTotals(updatedReceipts);
  };

  const handleSubmit = async () => {
    try {
      const entries = districts
        .map((d) => ({
          branch,
          district: d.name,
          date,
          cash: receipts[d.name]?.cash || 0,
          private: receipts[d.name]?.private || 0,
          gov: receipts[d.name]?.gov || 0,
        }))
        .filter(entry => entry.cash !== 0 || entry.private !== 0 || entry.gov !== 0);

      if (entries.length === 0) {
        alert('No valid receipt entries to save.');
        return;
      }

      await Promise.all(entries.map((entry) =>
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/receipt`, entry, {
          headers: { Authorization: `Bearer ${token}` },
        })
      ));

      alert('Receipts saved successfully!');
    } catch (err) {
      console.error('Error saving receipts:', err);
      alert('Error saving receipts');
    }
  };

  if (checkingPermission) return <p className="p-6">Checking permissions...</p>;
  if (!canReceipt) return <p className="p-6 text-red-600 font-semibold">You do not have permission to access this page.</p>;

  return (
    <div className="p-4 sm:p-6 bg-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Receipt Entry</h2>

      <label className="block mb-4">
        <span className="mr-2 font-semibold">Select Date:</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-2 sm:ml-2 border p-2 rounded-full shadow font-semibold w-full sm:w-auto"
        />
      </label>

      <div className="overflow-x-auto">
        <table className="min-w-full border mt-4 mb-6 font-semibold text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-400">
              <th className="border px-4 py-2">District</th>
              <th className="border px-4 py-2">Cash</th>
              <th className="border px-4 py-2">Private</th>
              <th className="border px-4 py-2">Gov</th>
              <th className="border px-4 py-2">Total</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((d) => {
              const r = receipts[d.name] || { cash: "", private: "", gov: "" };
              const totalPerDistrict = (
                (parseFloat(r.cash) || 0) +
                (parseFloat(r.private) || 0) +
                (parseFloat(r.gov) || 0)
              ).toFixed(2);

              return (
                <tr key={d._id}>
                  <td className="border px-4 py-2">{d.name}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      className="w-full sm:w-24 border px-2 py-1 rounded"
                      value={r.cash}
                      onChange={(e) => handleChange(d.name, 'cash', e.target.value)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      className="w-full sm:w-24 border px-2 py-1 rounded"
                      value={r.private}
                      onChange={(e) => handleChange(d.name, 'private', e.target.value)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      className="w-full sm:w-24 border px-2 py-1 rounded"
                      value={r.gov}
                      onChange={(e) => handleChange(d.name, 'gov', e.target.value)}
                    />
                  </td>
                  <td className="border px-4 py-2 text-right">{totalPerDistrict}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="text-white font-semibold bg-red-500 rounded p-1"
                      onClick={() => handleDelete(d.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-gray-300">
              <td className="border px-4 py-2 text-right">Total</td>
              <td className="border px-4 py-2 text-right">{totals.cash.toFixed(2)}</td>
              <td className="border px-4 py-2 text-right">{totals.private.toFixed(2)}</td>
              <td className="border px-4 py-2 text-right">{totals.gov.toFixed(2)}</td>
              <td className="border px-4 py-2 text-right font-bold">{(totals.grand).toFixed(2)}</td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded-full w-full sm:w-auto"
      >
        Save Receipts
      </button>
    </div>
  );
};

export default ReceiptEntryPage;
