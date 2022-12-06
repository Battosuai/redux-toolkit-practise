const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numberOfCakes--;
    },
    restock: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeSliceActions = cakeSlice.actions;
