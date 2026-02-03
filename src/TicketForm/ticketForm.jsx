import { Form, Input, Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { addTicket } from "../redux/slices/ticketsSlice";
import { v4 as uuidv4 } from "uuid";

export function TicketForm({ onClose }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const RESPONSAVEIS = [
    "João Silva",
    "Maria Santos",
    "Pedro Oliveira",
    "Janete Lima",
    "Pedro Afonso",
    "Cláudio Michael",
    "Steve Mcdonalds",
    "Ronaldo Firmeza",
    "Judite Sousa",
    "Vanderlei Antônio",
  ];

  const TIPOS = ["Bem", "Predial", "Procedimento"];

  const handleSubmit = (values) => {
    const newTicket = {
      id: uuidv4(),
      description: values.description,
      responsible: values.responsible,
      type: values.type,
      status: "Aberto",
      image: null,
    };

    dispatch(addTicket(newTicket));

    form.resetFields();

    onClose();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Descrição"
        name="description"
        rules={[
          { required: true, message: "Por favor, insira a descrição" },
          { min: 10, message: "Mínimo de 10 caracteres" },
        ]}
      >
        <Input.TextArea rows={4} placeholder="Descreva o problema..." />
      </Form.Item>

      <Form.Item
        label="Responsável"
        name="responsible"
        rules={[
          { required: true, message: "Por favor, selecione o responsável" },
        ]}
      >
        <Select placeholder="Selecione o responsável">
          {RESPONSAVEIS.map((resp) => (
            <Select.Option key={resp} value={resp}>
              {resp}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Tipo"
        name="type"
        rules={[{ required: true, message: "Por favor, selecione o tipo" }]}
      >
        <Select placeholder="Selecione o tipo">
          {TIPOS.map((tipo) => (
            <Select.Option key={tipo} value={tipo}>
              {tipo}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
