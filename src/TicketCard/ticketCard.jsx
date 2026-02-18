import { Card, Tag, Modal } from "antd";
import { EllipsisOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTicket } from "../redux/slices/TicketsSlice";
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

  return (
    <div 
      ref={drag}
      className={`${styles.cardWrapper} ${isDragging ? styles.dragging : ''}`}
    >
      <Card className={styles.card}>
        {ticket.image && (
          <div className={styles.imageContainer}>
            <img src={ticket.image} alt="foto" className={styles.image} />
          </div>
        )}
        
        <div className={styles.tagContainer}>
          <Tag className={styles.tag}>{ticket.type}</Tag>
        </div>

        <div className={styles.ticketId}>
          {ticket.id.slice(-4)}
        </div>

        <div className={styles.description}>
          {ticket.description}
        </div>

        <div className={styles.footer}>
          <span className={styles.responsible}>{ticket.responsible}</span>

          <div className={styles.menuContainer}>
            <EllipsisOutlined 
              className={styles.menuIcon}
              onClick={(e) => {
                e.stopPropagation();
                setMenuVisible(!menuVisible);
              }}
            />
            
            {menuVisible && (
              <div className={styles.menu}>
                <div
                  className={styles.menuItem}
                  onClick={() => {
                    setMenuVisible(false);
                    onEdit(ticket);
                  }}
                >
                  Editar
                </div>
                <div
                  className={`${styles.menuItem} ${styles.menuItemDanger}`}
                  onClick={handleDelete}
                >
                  Deletar
                </div>
              </div>
            )}
          </div>

          {menuVisible && (
            <div
              className={styles.overlay}
              onClick={() => setMenuVisible(false)}
            />
          )}
        </div>
      </Card>
    </div>
  );
}