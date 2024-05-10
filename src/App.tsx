import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import AppRoutes from "./component/routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
