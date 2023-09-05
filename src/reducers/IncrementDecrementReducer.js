const initialValue = 0;

const changeTheNumber = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default: return state;
  }
};

export default changeTheNumber;
