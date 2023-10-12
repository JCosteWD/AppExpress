import React, { useState } from 'react'
import axios from 'axios'

function AddUserForm({ onAddUser, onUpdateUser }) {
  const [formData, setFormData] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.firstname || !formData.lastname) {
      alert("Veuillez compléter votre demande .")
      return;
    }

    if (formData._id) { 
      onUpdateUser(formData._id, formData)
    } else {
      try {
        const response = await axios.post('/addUser', formData)
        console.log(response)
        onAddUser(response.data.user)
      } catch (error) {
        console.error(error)
      }
    }
    setFormData({
      firstname: '',
      lastname: ''
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
        Prénom:
        <input className='dark:text-teal-400 border border-sky-500' type="text" name="firstname" onChange={handleInputChange} value={formData.firstname || ''} />
      </label>
      <label>
        Nom:
        <input className='dark:text-teal-400 border border-sky-500' type="text" name="lastname" onChange={handleInputChange} value={formData.lastname || ''} />
      </label>
      <button type="submit" onClick={refresh}>Valider</button>                            
    </form>
  )
}

export default AddUserForm