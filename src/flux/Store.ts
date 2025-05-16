import { AppDispatcher } from './Dispatcher';
import { StoreActionTypes, PlantaPayload, StoreAction } from './Actions'; 
import { Action } from './Dispatcher';

type Callback = () => void;

class PlantStore {
  private plants: PlantaPayload[] = [];
  private gardenName: string = 'Mi Jardín';
  private listeners: Callback[] = [];

  constructor() {
    AppDispatcher.register(this.handleActions.bind(this));
  }

  getPlants() {
    return this.plants;
  }

  getGardenName() {
    return this.gardenName;
  }

  subscribe(callback: Callback) {
    this.listeners.push(callback);
  }

  unsubscribe(callback: Callback) {
    this.listeners = this.listeners.filter(cb => cb !== callback);
  }

  private emitChange() {
    this.listeners.forEach(callback => callback());
  }

 private handleActions(action: StoreAction | Action ) {
  switch (action.type) {
    case StoreActionTypes.GET_PLANTS:
      this.plants = action.payload as PlantaPayload[]; 
      this.emitChange();
      break;

    case StoreActionTypes.CREATE_PLANT:
      this.plants = [...this.plants, action.payload as PlantaPayload];
      this.emitChange();
      break;

    case StoreActionTypes.DELETE_PLANT:
      this.plants = this.plants.filter(plant => plant.id !== (action.payload as number));
      this.emitChange();
      break;

    case StoreActionTypes.CHANGE_NAME:
      this.gardenName = action.payload as string;
      this.emitChange();
      break;

    case StoreActionTypes.EDIT_PLANT:
      this.plants = this.plants.map(plant =>
        plant.id === (action.payload as PlantaPayload).id ? action.payload as PlantaPayload : plant
      );
      this.emitChange();
      break;

    default:
      break;
  }
}
}
export const store = new PlantStore();
