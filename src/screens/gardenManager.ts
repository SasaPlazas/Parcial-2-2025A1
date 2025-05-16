import { Screen, screenActions } from "../flux/Actions";
import { State, store } from "../flux/Store";

class GardenManager extends HTMLElement {
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
            .garden {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                padding: 20px;
                }

            :host {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
            background: linear-gradient(to bottom, #c2ffe3, #e2b2ff, #f050f8);
            color: #065C00;
        }
        
      
        h1, h2 {
            margin: 0.5rem 0;
            color: #065C00;
        }

        .garden {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            padding: 1rem 0;
            list-style: none;
            margin: 0;
        }

         button {
            padding: 0.5rem 1.2rem;
            font-size: 1rem;
            border-radius: 10px;
            border: 1px solid #333;
            background-color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #eee;
        }
        
         .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        position: relative;
        }

        .title button.use {
            position: absolute;
            left: 1rem;
            top: 0;
            margin-top: 2%;
        }

        .title h1 {
            margin-top: 6%;
            margin-bottom: 4%;
            text-align: center;
        }
        

        .section-title {
        margin-left: 15rem;
        margin-top: 3rem;
        font-size: 16px;
        }

    .add-button {
    background-color: #ff69b4;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-button:hover {
    background-color: #ff85c1;
}


garden-plant-card {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    align-items: start;
    }
    </style>


     <div class="garden-container">
        <div class="title">
                <button class="use" id="go-to-garden">Go Back to Garden</button>
                <h1>Garden Manager</h1>
        </div>
            
        <h2 class="section-title">Available Plants</h2>
        <ul class="garden" id="available"></ul>
            
        <h2 class="section-title">Your Plants</h2>
        <ul class="garden" id="current"></ul>
        </div>
        `;

        const manageButton = this.shadowRoot.querySelector('#go-to-garden');
        if (manageButton) {
            manageButton.addEventListener('click', () => {
                screenActions.changeScreen(Screen.GARDEN);
            });
        }

        const availableList = this.shadowRoot.querySelector('#available');
        if (availableList) {
            state.plantList.forEach((plant, index) => {
                const plantCard = document.createElement('garden-plant-card');
                plantCard.setAttribute('commonname', plant.common_name);
                plantCard.setAttribute('sciname', plant.scientific_name);
                plantCard.setAttribute('image', plant.img);
                plantCard.setAttribute('type', plant.type);
                plantCard.setAttribute('origin', plant.origin);
                plantCard.setAttribute('season', plant.flowering_season);
                plantCard.setAttribute('sunexposure', plant.sun_exposure);
                plantCard.setAttribute('watering', plant.watering);

                availableList.appendChild(plantCard);
            });
        }

        const currentList = this.shadowRoot.querySelector('#current');
        if (currentList) {
            state.garden.plants.forEach((plant, index) => {
                const plantCard = document.createElement('garden-plant-card');
                plantCard.setAttribute('index', index.toString());
                plantCard.setAttribute('commonname', plant.common_name);
                plantCard.setAttribute('sciname', plant.scientific_name);
                plantCard.setAttribute('image', plant.img);
                plantCard.setAttribute('type', plant.type);
                plantCard.setAttribute('origin', plant.origin);
                plantCard.setAttribute('season', plant.flowering_season);
                plantCard.setAttribute('sunexposure', plant.sun_exposure);
                plantCard.setAttribute('watering', plant.watering);

                currentList.appendChild(plantCard);
            });
        }
    }
};

export default GardenManager;