import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import persistor, { store } from './store/Store.js'
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
