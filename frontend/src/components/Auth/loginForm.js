import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('/loginboss', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json()
        document.cookie = `token=${data.token}; path=/; secure;`;
        navigate('/dashboard')
      } else {
        alert('Mauvais identifiant ou mot de passe!')
      }
    } catch (error) {
      console.error(error)
      alert('Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Identifiant:
        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginForm