import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const studentsStorage = localStorage.getItem('students')
    if(studentsStorage) {
      setStudents(JSON.parse(studentsStorage))
    }
  }, [students, name])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Anna</strong>
          <img src="https://github.com/franzannakarolina.png" alt="Foto Perfil" />
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

