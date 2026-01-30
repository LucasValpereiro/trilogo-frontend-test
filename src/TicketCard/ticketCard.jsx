import { Card, Tag, Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import React from "react";

export function TicketCard({ ticket }) {
  const menu = (
    <Menu>
      <Menu.Item key="editar">Editar</Menu.Item>
      <Menu.Item key="deletar">Deletar</Menu.Item>
      <Menu.Item key="mover">Mover para...</Menu.Item>
    </Menu>
  );

  return (
    <Card>
      {ticket.image && <img src={ticket.image} alt="foto" />}
      <br />
      <Tag style={{ backgroundColor: "#CAD1EB" }}>{ticket.type}</Tag>
      <br />
      {ticket.id.slice(-4)}
      <br />
      {ticket.description}
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
        }}
      >
        <span style={{color: '#1F1F49'}}>{ticket.responsible}</span>

        <Dropdown overlay={menu} trigger={["click"]}>
          <EllipsisOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Dropdown>
      </div>
    </Card>
  );
}
