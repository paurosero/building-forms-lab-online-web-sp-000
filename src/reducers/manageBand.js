export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND' :
    console.log(state,"state")
    console.log(action, "action")
    default:
      return state
  }
};
