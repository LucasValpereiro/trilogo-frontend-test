import { useSelector } from "react-redux";
import { TicketCard } from '../TicketCard/TicketCard';
import { Col, Row } from 'antd';
import React from 'react';

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
    <Row justify="center" align="middle">
      <Col span={6}>
        <h2>Aberto</h2>
        {ticketAberto.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </Col>

      <Col span={6}>
        <h2>Executado</h2>
        {ticketExecutado.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </Col>

      <Col span={6}>
        <h2>Vistoriado</h2>
        {ticketVistoriado.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </Col>

      <Col span={6}>
        <h2>Arquivado</h2>
        {ticketArquivado.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </Col>
    </Row>
  );
}


