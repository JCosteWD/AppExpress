import React, { useState } from 'react'
import axios from 'axios'

function AddBossForm({ onAddBoss, onUpdateBoss }) {
  const [formData, setFormData] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.username || !formData.password) {
      alert("Veuillez compléter votre demande .")
      return;
    }

    if (formData._id) { 
      onUpdateBoss(formData._id, formData)
    } else {
      try {
        const response = await axios.post('/addBoss', formData)
        console.log(response)
        onAddBoss(response.data.boss)
      } catch (error) {
        console.error(error)
      }
    }
    setFormData({
      username: '',
      password: ''
    });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const refresh = () => window.location.reload(true)

  return (
    <form onSubmit={handleSubmit} className="grid dark:text-teal-700 mx-4">    
      <label>
        Identifiant:
        <input className='dark:text-teal-400 border border-sky-500' type="text" name="username" onChange={handleInputChange} value={formData.username || ''} />
      </label>
      <label>
        Mot de passe:
        <input className='dark:text-teal-400 border border-sky-500' type="password" name="password" onChange={handleInputChange} value={formData.password || ''} />
      </label>
      <button type="submit" onClick={refresh}>Valider</button>
    </form>
  )
}

export default AddBossForm