import { Card, Tag, Modal } from "antd";
import { EllipsisOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTicket } from "../redux/slices/ticketsSlice";
import { useDrag } from 'react-dnd';
import styles from "./TicketCard.module.css";

export function TicketCard({ ticket, onEdit }) {
  const dispatch = useDispatch();
  const [menuVisible, setMenuVisible] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TICKET',
    item: { id: ticket.id, status: ticket.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [ticket.id, ticket.status]);

  const handleDelete = () => {
    setMenuVisible(false);  
    Modal.confirm({
      title: 'Confirmar exclusão',
      icon: <ExclamationCircleOutlined />,
      content: `Deseja realmente deletar o ticket "${ticket.description.substring(0, 30)}..."?`,
      okText: 'Sim, deletar',
      okType: 'danger', 
      cancelText: 'Cancelar', 
      onOk() {
        dispatch(removeTicket({ id: ticket.id }));
      },
    });
  };

  // ✅ FORMATO NOVO - Array de items
  const items = [
    {
      key: 'editar',
      label: 'Editar',
    },
    {
      key: 'deletar',
      label: 'Deletar',
      danger: true,
      onClick: handleDelete,
    },
    {
      key: 'mover',
      label: 'Mover para...',
    },
  ];

  return (
    <Card className={styles.card}>
      {ticket.image && (
        <div className={styles.imageContainer}>
          <img src={ticket.image} alt="foto" className={styles.image} />
        </div>
      )}
      
      <div className={styles.tagContainer}>
        <Tag style={{ backgroundColor: "#CAD1EB" }}>{ticket.type}</Tag>
      </div>

      <div className={styles.ticketId}>
        {ticket.id.slice(-4)}
      </div>

      <div className={styles.description}>
        {ticket.description}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className={styles.responsible}>{ticket.responsible}</span>

        {/* ✅ Dropdown com menu={{ items }} */}
        <Dropdown 
          menu={{ items }}
          trigger={['click']}
          placement="bottomRight"
        >
          <EllipsisOutlined 
            style={{ 
              fontSize: "20px", 
              cursor: "pointer",
              padding: "4px" // Adiciona área clicável
            }} 
          />
        </Dropdown>
      </div>
    </Card>
  );
}