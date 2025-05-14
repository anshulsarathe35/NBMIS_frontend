// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '', branch: '', role: 'user' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError('');
//     setSuccess('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/register', form);
//       setSuccess(`Registered successfully as ${res.data.user.name}`);
//       setForm({ name: '', email: '', password: '', branch: '', role: 'user' });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
//       <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
//         <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
//         <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded" required />
//         <input name="branch" value={form.branch} onChange={handleChange} placeholder="Branch" className="w-full p-2 border rounded" required />
//         <select name="role" value={form.role} onChange={handleChange} className="w-full p-2 border rounded">
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Register</button>
//       </form>
//       {error && <p className="mt-3 text-red-600 text-center">{error}</p>}
//       {success && <p className="mt-3 text-green-600 text-center">{success}</p>}
//     </div>
//   );
// };

// export default Register;


// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//     branch: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const res = await axios.post('/api/auth/register', form);
//       setSuccess(res.data.message);
//       setTimeout(() => navigate('/login'), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-teal-900">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-3xl w-full max-w-md space-y-4">
//         <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

//         {error && <div className="text-red-600">{error}</div>}
//         {success && <div className="text-green-600">{success}</div>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />

//         <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <input
//           type="text"
//           name="branch"
//           placeholder="Branch"
//           value={form.branch}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-900"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    branch: '',
    adminSecret: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const branches = ['Bhopal', 'Indore', 'Chhindwara', 'Jabalpur', 'Satna', 'Gwalior'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const payload = { ...form };
      if (form.role !== 'admin') {
        delete payload.adminSecret;
      }

      const res = await axios.post('/api/auth/register', payload);
      setSuccess(res.data.message);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-900">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-3xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {form.role === 'admin' && (
          <input
            type="text"
            name="adminSecret"
            placeholder="Admin Secret"
            value={form.adminSecret}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        )}

        <select
          name="branch"
          value={form.branch}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Select Branch</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-900"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
