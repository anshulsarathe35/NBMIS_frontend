import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const DistrictPage = () => {
  const { token } = useAuth();
  const [districts, setDistricts] = useState([]);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);


const fetchDistricts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/district`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDistricts(res.data);
    } catch (err) {
      console.error('Error fetching districts', err);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/district/${editId}`, { name }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/district`, { name }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setName('');
      setEditId(null);
      fetchDistricts();
    } catch (err) {
      console.error('Error saving district', err);
    }
  };

  const handleEdit = (district) => {
    setName(district.name);
    setEditId(district._id);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this district?')) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/district/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchDistricts();
      } catch (err) {
        console.error('Error deleting district', err);
      }
    }
  };

  useEffect(() => {
    fetchDistricts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">District Master</h2>

      <form onSubmit={handleSubmit} className="mb-4 flex gap-4 items-center">
        <input
          type="text"
          className="border p-2 rounded w-64"
          placeholder="District name"
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">District Name</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {districts.map((district) => (
            <tr key={district._id}>
              <td className="border px-4 py-2">{district.name}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="bg-yellow-400 px-2 py-1 rounded"
                  onClick={() => handleEdit(district)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(district._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistrictPage;
