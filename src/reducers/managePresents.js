export function managePresents(state, action){
  
  
  switch (action.type){
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    // case 'DECREASE':
    //   return {numberOfPresents: state.numberOfPresents - 1}
    default: 
      return state;

  }
  
}
const state = { numberOfPresents: 0}  
const action = { type: "INCREASE"}