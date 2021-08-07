import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./Context/firebase";
import { firebase, FieldValue } from "./Lib/firebase";
import { updateDatabase } from "./seed";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
