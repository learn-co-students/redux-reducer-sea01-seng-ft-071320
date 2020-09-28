export function managePresents(state, action) {
    switch (action.type) {
        case "INCREASE":
            return { numberOfPresents: state.numberOfPresents + 1 }
        default: return state
    }


}

const action = { type: "INCREASE" }
const state = { numberOfPresents: 0 }
