import { useSelector } from "react-redux";
import { Board } from "./Board/board";
import { Header } from "./Header/Header";
import { TicketForm } from './TicketForm/TicketForm';
import { Modal } from "antd";
import { useState } from "react";

function App() {
  const tickets = useSelector(state => state.tickets.tickets);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header onNewTicket={handleOpenModal}/>

      <Board />

      <Modal
      title='Novo Ticket'
      open={isModalOpen}
      onCancel={handleCloseModal}
      footer={null}
      width={600}
      >

        <TicketForm onClose={handleCloseModal}/>
      </Modal>
    </div>
  );
}

export default App;
