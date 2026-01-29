import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const mockTickets = [
  {
    id: uuidv4(),
    description: "Vazamento no banheiro do 3º andar",
    responsible: "João Silva",
    type: "Predial",
    status: "Aberto",
    image: null,
  },
  {
    id: uuidv4(),
    description: "Computador não liga na sala 205",
    responsible: "Maria Santos",
    type: "Bem",
    status: "Executado",
    image: null,
  },
  {
    id: uuidv4(),
    description: "Atualizar procedimento de segurança",
    responsible: "Pedro Oliveira",
    type: "Procedimento",
    status: "Vistoriado",
    image: null,
  },
  {
    id: uuidv4(),
    description: "Ar-condiciona não gela",
    responsible: "Janete Lima",
    type: "Bem",
    status: "Arquivado",
    image: null,
  },
];

const initialState = {
  tickets: JSON.parse(
    localStorage.getItem("tickets") || JSON.stringify(mockTickets),
  ),
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      const tickets = state.tickets;

      const addTicket = [
        ...tickets,
        {
          id: action.payload.id,
          description: action.payload.description,
          type: action.payload.type,
          responsible: action.payload.responsible,
          image: action.payload.image,
          status: action.payload.status,
        },
      ];

      localStorage.setItem("tickets", JSON.stringify(newTicket));

      state.tickets = addTicket;
    },

    editTicket: (state, action) => {
      const tickets = state.tickets;

      const editTicket = tickets.map((ticket) => {
        if (ticket.id === action.payload.id) {
          return {
            ...ticket,
            ...action.payload,
          };
        }

        return ticket;
      });

      localStorage.setItem("tickets", JSON.stringify(editTicket));

      state.tickets = editTicket;
    },

    removeTicket: (state, action) => {
      const tickets = state.tickets;

      const removeTicket = tickets.filter((ticket) => {
        return ticket.id !== action.payload.id;
      });

      localStorage.setItem("tickets", JSON.stringify(removeTicket));

      state.tickets = removeTicket;
    },

    moveTicket: (state, action) => {
      const tickets = state.tickets;

      const moveTicket = tickets.map((ticket) => {
        if (ticket.id === action.payload.id) {
          return {
            ...ticket,
            ...action.payload,
          };
        }

        return ticket;
      });

      localStorage.setItem("tickets", JSON.stringify(moveTicket));

      state.tickets = moveTicket;
    },
  },
});

export const { addTicket, editTicket, removeTicket, moveTicket } =
  ticketsSlice.actions;
export default ticketsSlice.reducer;
