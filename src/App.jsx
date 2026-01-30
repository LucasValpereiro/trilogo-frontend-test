  import { useSelector } from "react-redux";
  import  { Board }  from './Board/board';
  import icon from '../assets/icon.png';

  function App() {
    const tickets  = useSelector(state => state.tickets.tickets)

    return (
        
        <div>
          <header style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
        <img src={icon} alt="Ícone trílogo"></img>

        <button>+ Novo ticket</button>

        </header>
        <Board />
        </div>  
        
    );
  }

  export default App;
