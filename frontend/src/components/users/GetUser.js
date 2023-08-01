import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditUser from './EditUser'

const GetUser = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [editUserId, setEditUserId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users')
        setUsers(response.data.data)
      } catch (error) {
        setError(error)
      }
    };

    fetchData()
  }, [])

  const userDelete = async (id) => {
    try {
      await axios.delete(`/deleteuser/${id}`)
      setUsers((prevState) => prevState.filter((user) => user._id !== id))
    } catch (error) {
      setError(error)
    }
  };

  const handleEdit = (id) => {
    setEditUserId(id)
  };

  const handleUpdate = () => {
    setEditUserId(null)
  };

  return (
    <div className='mx-4'>
      {error && <div>Erreur: {error.message}</div>}
      <h1 className='dark:text-teal-700'>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user?._id}>
            {user?.firstname} {user?.lastname}
            <button className='text-red-600' onClick={() => userDelete(user?._id)}>Supprimer</button>
            <button className='text-violet-600' onClick={() => handleEdit(user?._id)}>Modifier</button>
          </li>
        ))}
      </ul>
      {editUserId && (
        <EditUser
          user={users.find((user) => user._id === editUserId)}
          updateUser={handleUpdate}
        />
      )}
    </div>
  );
};

export default GetUser
