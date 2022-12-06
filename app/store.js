const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const cakeReducer = require("../features/cake");
const appleReducer = require("../features/apple");

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    apple: appleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
