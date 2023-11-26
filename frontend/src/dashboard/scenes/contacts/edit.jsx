import React, { useState } from 'react'
import axios from 'axios'
import Form from '../form/index'

function EditUser({ user, updateUser }) {
  const [formData, setFormData] = useState(user)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put('/updateUser/' + formData._id, formData)
      console.log(response)
      updateUser(response.data.updatePost)
      console.log(setFormData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      initialValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address1: user.address1,
        address2: user.address2,
        _id: user._id, 
      }}
      onUpdateUser={handleSubmit} 
    />
  )
}

export default EditUser