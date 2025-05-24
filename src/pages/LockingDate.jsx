import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LockingDate = () => {
  const [lockingDate, setLockingDate] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/admin/locking-date`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setLockingDate(res.data.date))
      .catch(err => console.error(err));
  }, []);

  const saveLockingDate = () => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/locking-date`, {
      date: lockingDate,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => alert('Locking date updated'))
      .catch(err => alert('Error updating locking date'));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Set Locking Date</h2>
      <input
        type="date"
        value={lockingDate}
        onChange={e => setLockingDate(e.target.value)}
        className="border px-3 py-2 rounded-md"
      />
      <button
        onClick={saveLockingDate}
        className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-md"
      >
        Save
      </button>
    </div>
  );
};

export default LockingDate;
