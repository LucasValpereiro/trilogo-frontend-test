  import { useSelector } from "react-redux";
  import  { Board }  from './Board/board';
  import { Header } from './Header/Header'; 

  function App() {
    const tickets  = useSelector(state => state.tickets.tickets)

    return (
        
        <div>
        <Header /> 

        <Board />
        </div>  
        
    );
  }

  export default App;
