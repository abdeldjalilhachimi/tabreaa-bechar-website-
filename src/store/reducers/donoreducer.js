const initState = {
  donor: [],
};

const donoreducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_DONOR":
      return [...state, action.donor];

    case "DELETE_DONOR":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_DONOR":
      return state.map((donor) => {
        if (donor.id === action.id) {
          return {
            ...donor,
            ...action.updates,
          };
        } else {
          return donor;
        }
      });
    case "SET_DONOR":
      return action.donor;
    default:
      return state;
  }
};

export default donoreducer;
