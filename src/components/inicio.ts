import {getPlants } from "../services/Plants";
import {Store, State} from "../flux/Store";
class Home extends  HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback(){
        Store.subscribe((state:State) => {handleActions(state)})
        this.render();
        await getPlants();

    }

    handleActions(state: State){
    this.render (state);
    }

       render(){

    if (!this.shadowRoot) return;
         this.shadowRoot.innerHTML = `

        `;



        
        const commonName = id.getElementById("id");



    }
    
   
        
    }

    }
   

export default Home; 
 