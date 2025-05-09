import { AppDispatcher } from './Dispatcher';


interface Garden {

    CREATE_PLANT : 'CREATE_PLANT',
    DELETE_PLANT: 'DELETE_PLANT',
    CHANGE_NAME: 'CHANGE_NAME',
}

interface Admin {
    EDIT_PLANTS : 'EDIT_PLANTS',
}

export const GardenActions = {
    create: () => { 
        AppDispatcher.dispatch({});
    },

    delete: () => {
        AppDispatcher.dispatch({});
    },

    change: () => {
        AppDispatcher.dispatch({});
    },
};


export const AdminActions = {
    edit: () => {
        AppDispatcher.dispatch({});
    },

};