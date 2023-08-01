import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GetBoss = () => {
  const [boss, setBoss] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('/boss')
      .then(response => {
        setBoss(response.data)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  return (
    <div className='mx-4'>
      {error && <div>Erreur: {error.message}</div>}

      {boss && (
        <>
          <p>{boss.data[0].username}</p>
        </>
      )}
    </div>
  )
}

export default GetBoss