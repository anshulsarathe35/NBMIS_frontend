// const Home = () => {
//     return (
//       <div className="p-6">
//         <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
//         <p className="text-gray-600">Use the navigation bar to manage sales, receipts, reports, and districts.</p>
//       </div>
//     );
//   };
  
//   export default Home;

// const Home = () => {
//     return (
//       <div className="p-8 bg-white rounded-3xl shadow-md">
//         <div className="mb-6">
//           <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
//           <p className="text-lg text-gray-500 mt-2">
//             Welcome! Use the navigation bar to manage sales, receipts, reports, and districts.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-xl">
//             <h3 className="text-xl font-semibold text-gray-700">Sales</h3>
//             <p className="text-sm text-gray-500 mt-1">Create and view sales records.</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-xl">
//             <h3 className="text-xl font-semibold text-gray-700">Receipts</h3>
//             <p className="text-sm text-gray-500 mt-1">Track and manage receipts.</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-xl">
//             <h3 className="text-xl font-semibold text-gray-700">Reports</h3>
//             <p className="text-sm text-gray-500 mt-1">Generate detailed reports.</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-xl">
//             <h3 className="text-xl font-semibold text-gray-700">Districts</h3>
//             <p className="text-sm text-gray-500 mt-1">Manage district data.</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Home;


import { BarChart3, FileText, Receipt, MapPin } from "lucide-react";

const Home = () => {
  return (
    <>
    <div className="p-8 bg-gray-200 rounded-2xl shadow-3xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="text-lg text-gray-500 mt-2">
          Welcome! to Navabharat Data Panel , Use the navigation bar to manage sales, receipts, reports, and districts.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" >
        
        <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-xl hover:shadow-3xl transition">
          <BarChart3 className="absolute top-4 right-4 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-700">Sales</h3>
          <p className="text-sm text-gray-500 mt-1">Create and view sales records.</p>
        </div>
        <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-xl hover:shadow-3xl transition">
          <Receipt className="absolute top-4 right-4 text-green-500" />
          <h3 className="text-xl font-semibold text-gray-700">Receipts</h3>
          <p className="text-sm text-gray-500 mt-1">Track and manage receipts.</p>
        </div>
        <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-xl hover:shadow-3xl transition">
          <FileText className="absolute top-4 right-4 text-purple-500" />
          <h3 className="text-xl font-semibold text-gray-700">Reports</h3>
          <p className="text-sm text-gray-500 mt-1">Generate detailed reports.</p>
        </div>
        <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-xl hover:shadow-3xl transition">
          <MapPin className="absolute top-4 right-4 text-pink-500" />
          <h3 className="text-xl font-semibold text-gray-700">Districts</h3>
          <p className="text-sm text-gray-500 mt-1">Manage district data.</p>
        </div>
      </div>
    </div>
    <div className="min-h-96 bg-gradient-to-b from-gray-200 to-purple-900">
  {/* Your content here */}
</div>
    </>
  );
};

export default Home;

  
  