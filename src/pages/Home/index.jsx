import { Card } from '../../components/Card'
import './styles.css'

export function Home () {
  return (
    <div className='container'>
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite o seu nome..." />
    <button type="button">Adicionar</button>

    <Card name="Rodrigo" time="10:55:25" />
    <Card name="João" time="11:00:25" />
    </div>
  )
}

