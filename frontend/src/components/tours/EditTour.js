import React, { useState } from 'react'
import axios from 'axios'

function EditTour({ tour, updateTour }) {
  const [formData, setFormData] = useState(tour)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put('/updatetour/' + formData._id, formData)
      console.log(response)
      updateTour(response.data.updateTour)
    } catch (error) {
      console.error(error)
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const refresh = () => window.location.reload(true)

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dépôt:
        <div> 
            <select className='dark:text-teal-400' name="depot" onChange={handleInputChange}>
            <option defaultValue>Choix</option>
            <option>GEODIS</option>
            <option>GLS</option>
            <option>TNT</option>
            <option>UPS</option>
            </select>
        </div>
      </label>
      <label>
        Tournée :
        <input className='dark:text-teal-400 border border-sky-500' type="text" name="tournee" onChange={handleInputChange} />
      </label>
      <button type="submit" onClick={refresh}>Mettre à jour</button>
    </form>
  );
};

export default EditTour