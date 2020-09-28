export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return {
        ...state, friends: [...state.friends, action.friend] 
      }
    case "REMOVE_FRIEND":
      const removalIndexOfFriend = state.friends.findIndex(friend => friend.id === action.id)
      return (
        {...state, 
        friends: [
          ...state.friends.slice(0, removalIndexOfFriend),
        ...state.friends.slice(removalIndexOfFriend + 1)]
      }
      )
    default: 
      return state
  }

}

const state = {friends: []}
const action = {type: "ADD_FRIEND"}