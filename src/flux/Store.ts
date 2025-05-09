import { AppDispatcher, Action } from './Dispatcher';
import { AdminActions, GardenActions } from "./Actions";

export type State = {};

type Listener = (state: State) => void;

export class Store {
    private _myState: State = {}

    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return {};
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case "UNO":
                break;

        }
        
    }

    private _emitChange(): void {
        for (const listener of this._listeners) { }
    }

    unsubscribe(listener: Listener): void { }
}

export const store = new Store();