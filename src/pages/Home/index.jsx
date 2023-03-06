import React, { useState } from 'react';
import { Card } from '../../components/Card';
import './styles.css';

export function Home () {
  const [name, setName] = useState('')
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name,
      time: new Date().toLocaleTimeString('pt-BR', 
      {hour: '2-digit', minute: '2-digit', second: '2-digit'}
      )
    }
    setStudents([...students, newStudent])
  }

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input 
      type="text" 
      placeholder="Digite o seu nome..."
      onChange={e => setName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>

     {students.map(student => (
       <Card name={student.name} time={student.time} />
      ))}
    </div>
  )
}

