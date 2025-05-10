import { AppDispatcher } from './Dispatcher';
import { getPlants } from "../services/Plants";


export const Garden = {

    CREATE_PLANT : 'CREATE_PLANT',
    DELETE_PLANT: 'DELETE_PLANT',
    CHANGE_NAME: 'CHANGE_NAME',
    GET_PLANTS: 'GET_PLANTS',
}

export interface Admin {
    EDIT_PLANTS : 'EDIT_PLANTS',
}

export type PlantaPayload = {
    name: string,
    id: number,
    commonName: string, 
    scientificName: string
    img: string
    type: string
    origin: string
    floweringSeason: string
    sunExposure: string
    watering: string
}


export const GardenActions = {
    create: (payload: PlantaPayload) => { 
        AppDispatcher.dispatch({
            type: Garden.CHANGE_NAME,
            payload
        });
    },

    delete: () => {
        AppDispatcher.dispatch({});
    },

    change: () => {
        AppDispatcher.dispatch({});
    },
  
    
       get: () => {
        AppDispatcher.dispatch({
            type: Garden.GET_PLANTS, 
            payload:
            getPlants()

      
        
        });

          
    },
};

  console.log(getPlants);


export const AdminActions = {
    edit: () => {
        AppDispatcher.dispatch({});
    },

};