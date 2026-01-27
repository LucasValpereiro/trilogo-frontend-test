import { useSelector } from "react-redux"


function App() {
  const tickets  = useSelector(state => state.tickets.tickets)

  return (
  
      <div style={{ padding: '20px' }}>
       <h1>Trílogo Kanban</h1>

       <p>
        <strong>Total de Tickets Mocks:</strong> { tickets.lenght }
       </p>

       <h2>Tickets para teste:</h2>
       {tickets.map(ticket => (
        <div key={ ticket.id }  
        style={{
            border: '1px solid #ccc',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
        }}>
          <h3>{ ticket.description }</h3>

          <p>
            <strong>Responsável</strong> { ticket.responsible }
          </p>

          <p>
            <strong>Tipo:</strong> { ticket.type }
          </p>

          <p>
            <strong>Status:</strong> { ticket.status }
          </p>

          <p style={{fontSize: '10px', color: '#999'}}>
            <strong>ID:</strong> { ticket.id }
          </p>
        </div>
  ))};
      </div>  
  );
}

export default App;
