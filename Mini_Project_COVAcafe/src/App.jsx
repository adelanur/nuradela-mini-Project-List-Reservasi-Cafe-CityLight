import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListReservasi from "./assets/molekul/ListReservasi";
import Navbar from "./assets/molekul/Navbar";
import LandingPage from "./assets/view/LandingPage/LandingPage";
import Login from "./assets/view/Masuk/Login";
import Tersedia from "./assets/molekul/Tersedia";
import CreateReservasi from "./assets/view/CreateReservasi/CreateReservasi";
import { ApolloProvider } from "@apollo/client";
import client from "./assets/config/Apollo";
import CariReservasi from "./assets/view/DetailReservasi/CariReservasi";
import Register from "./assets/view/Masuk/Register";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistedStore } from "./assets/config/Redux/store";
import PrivateRoute from "./assets/config/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate persistor={persistedStore} loading={null}>
            <div className="App">
              <Router>
                <Routes>
                  <Route path="/" element={<LandingPage />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route
                    path="/listPesanan"
                    element={
                      <PrivateRoute>
                        <CreateReservasi />
                      </PrivateRoute>
                    }
                  ></Route>
                  <Route
                    path="/search/:nama"
                    element={<CariReservasi />}
                  ></Route>
                  {/* <Route path="/tersedia" element={<Tersedia />}></Route> */}
                </Routes>
              </Router>
              {/* <Navbar />
        <ListReservasi />
        <Tabel />
        <LandingPage /> */}
            </div>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
