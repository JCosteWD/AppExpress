import React, { useState } from 'react'
import axios from 'axios'

function AddTourForm() {
  const [formData, setFormData] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

  if (!formData.depot || !formData.tournee) {
    alert("Veuillez compléter votre demande .")
    return
  }

  axios
      .post("/addTour", formData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
        if (error.response && error.response.data && error.response.data.msg) {
          alert(error.response.data.msg)
        } else {
          alert("Une erreur s'est produite lors de la soumission du formulaire.")
        }
      })
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const refresh = () => window.location.reload(true)

  return (
    <form onSubmit={handleSubmit} className="grid dark:text-teal-700 mx-4">
          <label className='flex' data-te-select-label-ref>Dépot
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
        Tournée:
        <input className='dark:text-teal-400 border border-sky-500' type="text" name="tournee" onChange={handleInputChange} />
      </label>
      <button type="submit" onClick={refresh}>Valider</button>
    </form>
  );
}

export default AddTourForm