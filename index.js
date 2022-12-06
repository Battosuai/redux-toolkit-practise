const store = require("./app/store");
const { cakeSliceActions } = require("./features/cake");
const { appleSliceActions } = require("./features/apple");

console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeSliceActions.order());
store.dispatch(cakeSliceActions.order());
store.dispatch(cakeSliceActions.order());
store.dispatch(cakeSliceActions.order());
store.dispatch(cakeSliceActions.restock(4));

store.dispatch(appleSliceActions.order());
store.dispatch(appleSliceActions.order());
store.dispatch(appleSliceActions.order());
store.dispatch(appleSliceActions.order());
store.dispatch(appleSliceActions.restock(4));

unsubscribe();
