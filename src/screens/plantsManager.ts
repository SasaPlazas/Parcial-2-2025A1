import { Screen, screenActions } from "../flux/Actions";
import { State, store } from "../flux/Store";

class PlantsManager extends HTMLElement {
    connectedCallback() {
        store.subscribe((state: State) => {this.handleChange(state)});
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <style>
                 <style>
            :host {
                display: block;
                font-family: sans-serif;
                background: linear-gradient(to bottom, #c2ffe3, #e2b2ff, #f050f8);
                color: #065C00;
                padding: 1rem;
            }

            .garden-container {
                max-width: 1200px;
                margin: 0 auto;
            }

            .title {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                margin-bottom: 2rem;
            }
            .garden {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 2rem;
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .title h1{
            margin-top: 6%;
            text-align: center;
            color:#065C00 ;
            }

            .title button{
               position: absolute;
                left: 0;
                top: 0;
                padding: 0.5rem 1rem;
                font-size: 1rem;
                border-radius: 10px;
                border: 1px solid #333;
                background-color: white;
                cursor: pointer;
                transition: background-color 0.3s ease;
                position: absolute;
                left: 1rem;
                margin-top: 2%;
                
                }

                admin-plant-card {
                background: rgba(255, 255, 255, 0.7);
                border-radius: 12px;
                padding: 1rem;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                align-items: start;
                }
  
                </style>
            <div class="garden-container">
                <div class ="title">
                <button id="go-to-garden">Go Back to Garden</button>
                <h1>Available Plants!</h1>
                </div>

                <ul class="garden"></ul>
            </div>
        `;

        const manageButton = this.shadowRoot.querySelector('#go-to-garden');
        if (manageButton) {
            manageButton.addEventListener('click', () => {
                screenActions.changeScreen(Screen.GARDEN);
            });
        }

        const plantList = this.shadowRoot.querySelector('.garden');
        if (plantList) {
            state.plantList.forEach((plant, index) => {
                const plantCard = document.createElement('admin-plant-card');
                plantCard.setAttribute('index', index.toString());
                plantCard.setAttribute('commonname', plant.common_name);
                plantCard.setAttribute('sciname', plant.scientific_name);
                plantCard.setAttribute('image', plant.img);
                plantCard.setAttribute('type', plant.type);
                plantCard.setAttribute('origin', plant.origin);
                plantCard.setAttribute('season', plant.flowering_season);
                plantCard.setAttribute('sunexposure', plant.sun_exposure);
                plantCard.setAttribute('watering', plant.watering);

                plantList.appendChild(plantCard);
            });
        }
    }
};

export default PlantsManager;