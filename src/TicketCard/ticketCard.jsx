import { Card, Tag, Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./TicketCard.module.css";

export function TicketCard({ ticket }) {
  const menu = (
    <Menu>
      <Menu.Item key="editar">Editar</Menu.Item>
      <Menu.Item key="deletar">Deletar</Menu.Item>
      <Menu.Item key="mover">Mover para...</Menu.Item>
    </Menu>
  );

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

        <Dropdown overlay={menu} trigger={["click"]}>
          <EllipsisOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Dropdown>
      </div>
    </Card>
  );
}
