import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import './styles.css';

export function Home () {
  const [name, setName] = useState('')
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({
    name: '',
    avatar: ''
  });

  function handleAddStudent() {
    const newStudent = {
      name,
      time: new Date().toLocaleTimeString('pt-BR', 
      {hour: '2-digit', minute: '2-digit', second: '2-digit'}
      )
    }
    setStudents([...students, newStudent])
  }

  // não se usa async direto no useEffect e sim criar uma função dentro dele
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/franzannakarolina')
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto Perfil" />
        </div>
      </header>
      <input 
      type="text" 
      placeholder="Digite o seu nome..."
      onChange={e => setName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>

     {students.map(student => (
       <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  )
}

