import {getPlants } from "../services/Plants";
import {Store} from "../flux/Store";
class Home extends  HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        // store.subscribe(State:state) => {handleActions(state)}
        this.render();
    }

    // handleActions(State: state){
    // this.render (state);

       render(){

    if (!this.shadowRoot) return;
         this.shadowRoot.innerHTML = `
        `;

    
    const card = document.getElementById("div1");

        
    }

    }
   

export default Home; 
 