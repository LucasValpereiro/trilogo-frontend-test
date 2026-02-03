import { useSelector } from "react-redux";
import { Board } from "./Board/board";
import { Header } from "./Header/Header";
import { TicketForm } from './TicketForm/TicketForm';
import { Modal } from "antd";
import { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const tickets = useSelector(state => state.tickets.tickets);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const  [ticketToEdit, setTicketToEdit] = useState(null);

  const handleOpenModal = () => {
    setTicketToEdit(null);
    setIsModalOpen(true);
  };

  const handleEditTicket = (ticket) => {
    setTicketToEdit(ticket);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTicketToEdit(null);
  }

  return (
    <DndProvider backend={HTML5Backend}>
    <div>
      <Header onNewTicket={handleOpenModal}/>

      <Board onEditTicket={handleEditTicket}/>

      <Modal
      title={ticketToEdit ? 'Editar Ticket' : 'Novo Ticket'}
      open={isModalOpen}
      onCancel={handleCloseModal}
      footer={null}
      width={600}
      >

        <TicketForm 
        onClose={handleCloseModal}
        ticketToEdit={ticketToEdit}
        />
      </Modal>
    </div>
    </DndProvider>
  );
}

export default App;
