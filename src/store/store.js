// import { createStore } from "redux";
// import data from "../Aux_Data";

// const initialState = {
//   jugadores: data,
//   titulares: [],
//   suplentes: []
// };

// const reducerOwner = (state = initialState, action) => {

//   if (action.type === "AGREGAR_TITULAR") {
//     return {
//         ...state,
//         titulares: state.titulares.concat(action.jugador),
//         jugadores: state.jugadores.filter(j => j.Id !== action.jugador.Id)
//     }
// }

// if ( action.type === "AGREGAR_SUPLENTE" ) {
//     return {
//         ...state,
//         suplentes: state.suplentes.concat(action.jugador),
//         jugadores: state.jugadores.filter(j => j.Id !== action.jugador.Id)
//     }
// }

// if ( action.type === "QUITAR_TITULAR") {
//     return {
//         ...state,
//         titulares: state.titulares.filter(j => j.Id !== action.jugador.Id),
//         jugadores: state.jugadores.concat(action.jugador)
//     }
// }

// if ( action.type === "QUITAR_SUPLENTE") {
//     return {
//         ...state,
//         suplentes: state.suplentes.filter(j => j.Id !== action.jugador.Id),
//         jugadores: state.jugadores.concat(action.jugador)
//     }
// }
// return state
// }

// export default createStore(reducerOwner);

// import { createStore } from "redux";
// import rootReducer from "../reducer/index";

// funtion store(createStore(rootReducer)){
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

// };

// export default store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; 
import rootReducer from "../reducer/index";

 const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
 export default store;