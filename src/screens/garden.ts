import { gardenActions, Screen, screenActions, screenActionType } from "../flux/Actions";
import { State, store } from "../flux/Store";

class Garden extends HTMLElement{
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
        :host {
            display: block;
            min-height: 100vh;
            font-family: sans-serif;
            background: linear-gradient(to bottom, #c2ffe3, #e2b2ff, #f050f8);
            color: #065C00;
            text-align: center;
        }

    .garden-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
        padding: 2rem 1rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin: 20px;
        padding: 30px;
        color: #065C00; 
    }

    button {
        padding: 0.5rem 1rem;
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

    #change-garden-name {
        background: none;
        color: #065C00;
        font-size: 0.9rem;
        border: none;
        margin-top: 10px;
        text-decoration: underline;
    }

    #name-form {
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    input[type="text"] {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #aaa;
        font-size: 1rem;
    }

    .garden {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }

    plant-card {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    align-items: start;
}
</style>

            <div class="garden-container">
                <h1>${state.garden.name}</h1>
                <button id="manage-garden">Manage Garden</button>
                <button id="manage-plants">Manage Available Plants</button>
                <button id="change-garden-name">Change Garden Name</button>
                <form id="name-form" style="display: none;">
                    <input type="text" id="new-garden-name" placeholder="New Garden Name" />
                    <button type="submit">Change</button>
                </form>
                <ul class="garden"></ul>
            </div>
        `;

        const changeNameBtn = this.shadowRoot.querySelector('#change-garden-name');
        if (changeNameBtn) {
            changeNameBtn.addEventListener('click', () => {
                const form = this.shadowRoot?.querySelector('#name-form') as HTMLFormElement;
                if (form) {
                    form.style.display = 'block';

                    form.addEventListener('submit', (event) => {
                        event.preventDefault();
                        const newNameInput = this.shadowRoot?.querySelector('#new-garden-name') as HTMLInputElement;
                        if (newNameInput) {
                            const newName = newNameInput.value;
                            gardenActions.changeName(newName);
                            form.style.display = 'none';
                            newNameInput.value = '';
                        }
                    });
                }
            });
        }

        const manageGardenBtn = this.shadowRoot.querySelector('#manage-garden');
        if (manageGardenBtn) {
            manageGardenBtn.addEventListener('click', () => {
                screenActions.changeScreen(Screen.GARDEN_MANAGER);
            });
        }

        const managePlantsBtn = this.shadowRoot.querySelector('#manage-plants');
        if (managePlantsBtn) {
            managePlantsBtn.addEventListener('click', () => {
                screenActions.changeScreen(Screen.PLANTS_MANAGER);
            });
        }

        const gardenList = this.shadowRoot.querySelector('.garden');
        if (gardenList) {
            state.garden.plants.forEach((plant, index) => {
                const plantCard = document.createElement('plant-card');
                plantCard.setAttribute('index', index.toString());
                plantCard.setAttribute('commonname', plant.common_name);
                plantCard.setAttribute('sciname', plant.scientific_name);
                plantCard.setAttribute('image', plant.img);
                plantCard.setAttribute('type', plant.type);
                plantCard.setAttribute('origin', plant.origin);
                plantCard.setAttribute('season', plant.flowering_season);
                plantCard.setAttribute('sunexposure', plant.sun_exposure);
                plantCard.setAttribute('watering', plant.watering);

                gardenList.appendChild(plantCard);
            });
        }
    }
};

export default Garden;