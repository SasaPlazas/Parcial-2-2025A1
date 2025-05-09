import { store } from '../flux/Store';


class Root extends HTMLElement {
        // product = product[]:[]
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
         // store.load();
    // await productsActions.GetProducts();
    // this.product = GetProducts();
    // this.render();
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
