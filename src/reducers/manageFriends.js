export function manageFriends(state, action) {
    switch (action.type) {
        case "ADD_FRIEND":
            return {
                ...state, friends: [...state.friends, action.friend]
            }
        case "REMOVE_FRIEND":
            const friendsList = state.friends.filter(friend => friend.id != action.id)
            return ({
                ...state, friends: friendsList
            })


        default:
            return state

    }
}

const state = { friends: [] }

const action = { type: "ADD_FRIEND" }