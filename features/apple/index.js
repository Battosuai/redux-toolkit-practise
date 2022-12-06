const { createSlice } = require("@reduxjs/toolkit");
const { cakeSliceActions } = require("../cake");

const initialState = {
  numberOfApples: 15,
};

const appleSlice = createSlice({
  name: "apple",
  initialState,
  reducers: {
    order: (state) => {
      state.numberOfApples--;
    },
    restock: (state, action) => {
      state.numberOfApples += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/order"]: (state) => {
  //       state.numberOfApples -= 2;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeSliceActions.order, (state) => {
      state.numberOfApples -= 2;
    });
  },
});

module.exports = appleSlice.reducer;
module.exports.appleSliceActions = appleSlice.actions;
