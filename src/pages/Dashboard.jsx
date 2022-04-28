import React from 'react'
import TicketCard from '../components/TicketCard'

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Metódos de array',
      owner: 'Edson Fown',
      avatar: 'https://i.ibb.co/PWg5BSp/182435260-4370239173027952-676647066199457150-n.jpg',
      status: 'Concluido',
      priority: 3,
      progress: 100,
      description: 'Fazer um vídeo sobre métodos de array.',
      timestamp: '26-04-2022T07:36:17+0000'

    },
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Coletar feedback',
      owner: 'Edson Fown',
      avatar: 'https://i.ibb.co/PWg5BSp/182435260-4370239173027952-676647066199457150-n.jpg',
      status: 'Em execução',
      priority: 1,
      progress: 51,
      description: 'Coletar feedback dos clientes do mês anterior.',
      timestamp: '15-04-2022T03:33:20+0000'

    },
    {
      category: 'Q2 2022',
      color: 'blue',
      title: 'Refatorar código',
      owner: 'Edson Fown',
      avatar: 'https://i.ibb.co/PWg5BSp/182435260-4370239173027952-676647066199457150-n.jpg',
      status: 'Em execução',
      priority: 2,
      progress: 33,
      description: 'Refatorar o código do projeto.',
      timestamp: '22-04-2022T09:43:53+0000'

    }
  ]

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category))//desestruturação de objeto da lista pegando a propriedade category
  ]

  return (
    <div className='dashboard'>
      <h1>Tickets</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => {
          return(
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => {
                  return <TicketCard id={_index} color={filteredTicket.color} ticket={filteredTicket} />
                })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard