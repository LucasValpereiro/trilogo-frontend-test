import { useSelector, useDispatch } from "react-redux";
import { TicketCard } from '../TicketCard/TicketCard';
import { moveTicket } from '../redux/slices/ticketsSlice';
import { useDrop } from 'react-dnd';
import React from 'react';
import styles from './Board.module.css';

function Column({ title, status, tickets, onEditTicket, headerClass }) {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TICKET',
    drop: (item) => {
      if (item.status !== status) {
        dispatch(moveTicket({ id: item.id, status: status }));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [status]);

  return (
    <div className={styles.column}>
      <div className={`${styles.columnHeader} ${headerClass}`}>
        <h3 className={styles.columnTitle}>{title}</h3>
      </div>
      
      <div 
        ref={drop}
        className={`${styles.columnContent} ${isOver ? styles.columnOver : ''}`}
      >
        {tickets.map((ticket) => (
          <TicketCard 
            key={ticket.id} 
            ticket={ticket} 
            onEdit={onEditTicket}
          />
        ))}
      </div>
    </div>
  );
}

export function Board({ onEditTicket }) {
  const tickets = useSelector((state) => state.tickets.tickets);

  const ticketAberto = tickets.filter((ticket) => ticket.status === "Aberto");
  const ticketExecutado = tickets.filter((ticket) => ticket.status === "Executado");
  const ticketVistoriado = tickets.filter((ticket) => ticket.status === "Vistoriado");
  const ticketArquivado = tickets.filter((ticket) => ticket.status === "Arquivado");

  return (
    <div className={styles.board}>
      <Column 
        title="Abertos" 
        status="Aberto" 
        tickets={ticketAberto}
        onEditTicket={onEditTicket}
        headerClass={styles.headerAberto}
      />
      <Column 
        title="Executados" 
        status="Executado" 
        tickets={ticketExecutado}
        onEditTicket={onEditTicket}
        headerClass={styles.headerExecutado}
      />
      <Column 
        title="Vistoriados" 
        status="Vistoriado" 
        tickets={ticketVistoriado}
        onEditTicket={onEditTicket}
        headerClass={styles.headerVistoriado}
      />
      <Column 
        title="Arquivados" 
        status="Arquivado" 
        tickets={ticketArquivado}
        onEditTicket={onEditTicket}
        headerClass={styles.headerArquivado}
      />
    </div>
  );
}