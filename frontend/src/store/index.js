
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global";
import logger from "redux-logger";
import FieldSlice from "./fieldData";
import { createStore} from 'redux'



//export const store = createStore(couterStage)


//const rootReducer = combineSlices(globalSlice);

// Infer the `RootState` type from the root reducer


export const store = configureStore({
  reducer: {
    [globalSlice.name]: globalSlice.reducer,
    [FieldSlice.name]: FieldSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //.concat(logger),
})

// export const store = createStore (() => {
//   return configureStore({
//     reducer: {
//       [globalSlice.name]: globalSlice.reducer,
//       // [FieldSlice.name]: FieldSlice.reducer,
//     },

//     middleware: (getDefaultMiddleware) => {
//       console.log("e abc 45");
//       return getDefaultMiddleware()
//              .concat(logger);
//     },
//   });
// });

