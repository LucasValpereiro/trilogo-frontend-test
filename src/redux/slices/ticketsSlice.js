import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const { responsiveArray } = require("antd/es/_util/responsiveObserver");

const initialState = {
    tickets: [{
        id: uuidv4(),
        description: 'Vazamento de água',
        type: 'Predial',
        responsible: 'Robert Silva',
        image: null,
        status: 'Aberto',
    },

    {
        id: uuidv4(),
        description: 'Reparo de reboco',
        type: 'Bem',
        responsible: 'Janete Lima',
        image: null,
        status: 'Executado',
    },

    {
        id: uuidv4(),
        description: 'Verificar sistema de segurança',
        type: 'Procedimento',
        responsible: 'Marcos Souza',
        image: null,
        status: 'Vistoriado',
    },

    {
        id: uuidv4(),
        description: 'Troca de peças do ar-condicionado',
        type: 'Predial',
        responsible: 'Antonio Augusto',
        image: null,
        status: 'Arquivado',
    }
]
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTicket: (state, action) => {

        },
        
        editTicket: (state, action) => {

        },

        removeTicket: (state, action) => {

        },

        moveTicket: (state, action) => {

        },
    },
});

export const { addTicket, editTicket, removeTicket, moveTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
