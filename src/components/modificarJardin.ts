class ModificarJardin extends  HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        
    }
}

