import { store } from '../flux/Store';
import { getPlants } from '../services/Plants';
import {Garden, GardenActions} from "../flux/Actions";
class Root extends HTMLElement {

        plants = plants[]: [];

        
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        store.getState();
        await GardenActions.getPlants();
        this.plants = getPlants();
        
         // store.load();
    // await productsActions.GetProducts();
        this.render();
    }

  async render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `app
        
        `;

        



            //const plantcard = x cosa. getAttribute ('X')

    //plantcard.appendchild;
    }
}

export default Root;
