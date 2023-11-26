import React, { useState } from 'react'
import axios from 'axios'

function EditUser({ user, updateUser }) {
  const [formData, setFormData] = useState(user)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put('/updateUser/' + formData._id, formData)
      console.log(response)
      updateUser(response.data.updatePost)
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prénom:
        <input type="text" name="firstname" onChange={handleInputChange} value={formData.firstname || ''} />
      </label>
      <label>
        Nom:
        <input type="text" name="lastname" onChange={handleInputChange} value={formData.lastname || ''} />
      </label>
      <button type="submit">Mettre à jour</button>
    </form>
  )
}

export default EditUser