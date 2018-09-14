import { Action } from '@ngrx/store'
import { Tutorial } from './../models/employee.model'
import * as TutorialActions from './../actions/employee.actions'

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        // Add this case:
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}