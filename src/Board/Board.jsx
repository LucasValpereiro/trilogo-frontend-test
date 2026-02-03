import { useSelector } from "react-redux";
import { TicketCard } from '../TicketCard/TicketCard';
import React from 'react';
import { useState } from "react";
import { modal } from 'antd';
import styles from './Board.module.css';

export function Board() {
  const tickets = useSelector((state) => state.tickets.tickets);

  const ticketAberto = tickets.filter((ticket) => ticket.status === "Aberto");
  const ticketExecutado = tickets.filter(
    (ticket) => ticket.status === "Executado",
  );
  const ticketVistoriado = tickets.filter(
    (ticket) => ticket.status === "Vistoriado",
  );
  const ticketArquivado = tickets.filter(
    (ticket) => ticket.status === "Arquivado",
  );

  return (
    <div className={styles.board}>

      <div className={styles.column}>
        <div className={`${styles.columnHeader} ${styles.headerAberto}`}>
        <h3 className={styles.columnTitle}>Abertos</h3>
        </div>
        <div className={styles.columnContent}>
        {ticketAberto.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        </div>
      </div>

      <div className={styles.column}>
        <div className={`${styles.columnHeader} ${styles.headerExecutado}`}>
        <h3 className={styles.columnTitle}>Executados</h3>
        </div>
        <div className={styles.columnContent}>
        {ticketExecutado.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        </div>
      </div>

      <div className={styles.column}>
        <div className={`${styles.columnHeader} ${styles.headerVistoriado}`}>
        <h2 className={styles.columnTitle}>Vistoriados</h2>
        </div>
        <div className={styles.columnContent}>
        {ticketVistoriado.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        </div>
      </div>

      <div className={styles.column}>
        <div className={`${styles.columnHeader} ${styles.headerArquivado}`}>
        <h2 className={styles.columnTitle}>Arquivados</h2>
        </div>
        <div className={styles.columnContent}>
        {ticketArquivado.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        </div>
      </div>

    </div>
  );
}


