import { AppDispatcher } from './Dispatcher';
import { plantsData } from "../services/Plants";

export const Garden = {
  CREATE_PLANT: 'CREATE_PLANT',
  DELETE_PLANT: 'DELETE_PLANT',
  CHANGE_NAME: 'CHANGE_NAME',
  GET_PLANTS: 'GET_PLANTS',
};

export const Admin = {
  EDIT_PLANT: 'EDIT_PLANT',
};

export const StoreActionTypes = {
  ...Garden,
  ...Admin,
};

export type PlantaPayload = {
  id: number,
  common_name: string,
  scientific_name: string,
  img: string,
  type: string,
  origin: string,
  flowering_season: string,
  sun_exposure: string,
  watering: string
};


export const GardenActions = {
  create: (payload: PlantaPayload) => {
    AppDispatcher.dispatch({
      type: Garden.CREATE_PLANT,
      payload
    });
  },

  delete: (id: number) => {
    AppDispatcher.dispatch({
      type: Garden.DELETE_PLANT,
      payload: id
    });
  },

  changeName: (name: string) => {
    AppDispatcher.dispatch({
      type: Garden.CHANGE_NAME,
      payload: name
    });
  },

  get: () => {
    AppDispatcher.dispatch({
      type: Garden.GET_PLANTS,
      payload: plantsData
    });
  },
};

export const AdminActions = {
  edit: (updatedPlant: PlantaPayload) => {
    AppDispatcher.dispatch({
      type: Admin.EDIT_PLANT,
      payload: updatedPlant
    });
  }
};
export interface GetPlantsAction {
  type: typeof Garden.GET_PLANTS;
  payload: PlantaPayload[];
}

export interface CreatePlantAction {
  type: typeof Garden.CREATE_PLANT;
  payload: PlantaPayload;
}

export interface DeletePlantAction {
  type: typeof Garden.DELETE_PLANT;
  payload: number; 
}

export interface ChangeNameAction {
  type: typeof Garden.CHANGE_NAME;
  payload: string;
}

export interface EditPlantAction {
  type: typeof Admin.EDIT_PLANT;
  payload: PlantaPayload;
}


export type StoreAction =
  | GetPlantsAction
  | CreatePlantAction
  | DeletePlantAction
  | ChangeNameAction
  | EditPlantAction;
