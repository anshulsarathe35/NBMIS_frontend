// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import DistrictPage from './pages/DistrictPage';
// import ReceiptPage from './pages/ReceiptPage';
// import SalePage from './pages/SalePage';
// import ReportsPage from './pages/ReportsPage';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route element={<PrivateRoute />}>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/districts" element={<DistrictPage />} />
//         <Route path="/receipts" element={<ReceiptPage />} />
//         <Route path="/sales" element={<SalePage />} />
//         <Route path="/reports" element={<ReportsPage />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import PrivateRoute from './routes/PrivateRoute';
// import Navbar from './components/Navbar';
// import DistrictPage from './pages/DistrictPage';
// import SaleEntryPage from './pages/SaleEntryPage';
// import ReceiptEntryPage from './pages/ReceiptEntryPage';
// import ReportsPage from './pages/ReportsPage';

// // Placeholders for upcoming components
// const Sales = () => <div className="p-6">Sales Page</div>;
// const Receipts = () => <div className="p-6">Receipts Page</div>;
// const Reports = () => <div className="p-6">Reports Page</div>;
// const Districts = () => <div className="p-6">Districts Page</div>;

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <Home />
//             </PrivateRoute>
//           }
//         />
//         <Route
//   path="/sale-entry"
//   element={
//     <PrivateRoute>
//       <SaleEntryPage />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/receipt-entry"
//   element={
//     <PrivateRoute>
//       <ReceiptEntryPage />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/reports"
//   element={
//     <PrivateRoute>
//       <ReportsPage />
//     </PrivateRoute>
//   }
// />
//         <Route
//   path="/districts"
//   element={
//     <PrivateRoute>
//       <DistrictPage />
//     </PrivateRoute>
//   }
// />
//       </Routes>
//     </>
//   );
// };

// export default App;


import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar';
import DistrictPage from './pages/DistrictPage';
import SaleEntryPage from './pages/SaleEntryPage';
import ReceiptEntryPage from './pages/ReceiptEntryPage';
import ReportsPage from './pages/ReportsPage';
import AdminDashboard from './pages/AdminDashboard'

// Optional placeholder components (can be removed if unused)
const Sales = () => <div className="p-6">Sales Page</div>;
const Receipts = () => <div className="p-6">Receipts Page</div>;
const Reports = () => <div className="p-6">Reports Page</div>;
const Districts = () => <div className="p-6">Districts Page</div>;

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Register Route */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/sale-entry"
          element={
            <PrivateRoute>
              <SaleEntryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/receipt-entry"
          element={
            <PrivateRoute>
              <ReceiptEntryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/districts"
          element={
            <PrivateRoute>
              <DistrictPage />
            </PrivateRoute>
          }
        />

        <Route
        path='/admin-dashboard'
        element={
          <PrivateRoute>
            <AdminDashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </>
  );
};

export default App;
