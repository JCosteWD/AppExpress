import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditTour from './EditTour'

const GetTour = () => {
  const [tours, setTours] = useState([])
  const [error, setError] = useState(null)
  const [editTourId, setEditTourId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours')
        setTours(response.data.tours)
      } catch (error) {
        setError(error)
      }
    }

    fetchData();
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/deletetour/${id}`)
      setTours((prevState) => prevState.filter((tour) => tour._id !== id))
    } catch (error) {
      setError(error)
    }
  }

  const handleEdit = (id) => {
    setEditTourId(id)
  }

  const handleUpdate = () => {
    setEditTourId(null)
  }

  return (
    <div>
      {error && <div>Erreur: {error.message}</div>}
      <h1 className='dark:text-teal-700'>Liste des tournées</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour._id}>
            {tour.depot} {tour.tournee}
            <button className='text-red-600' onClick={() => handleDelete(tour._id)}>Supprimer</button>
            <button className='text-violet-600' onClick={() => handleEdit(tour?._id)}>Modifier</button>
          </li>
        ))}
      </ul>
      {editTourId && (
        <EditTour
          tour={tours.find((tour) => tour._id === editTourId)}
          updateTour={handleUpdate}
        />
      )}
    </div>
  );
};

export default GetTour