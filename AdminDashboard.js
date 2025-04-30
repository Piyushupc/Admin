import React, { useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState(0);

    const addApp = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/apps/', {
                name, description, points
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <form onSubmit={(e) => { e.preventDefault(); addApp(); }}>
                <input type="text" placeholder="App Name" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="number" placeholder="Points" value={points} onChange={(e) => setPoints(e.target.value)} />
                <button type="submit">Add App</button>
            </form>
        </div>
    );
}

export default AdminDashboard;
