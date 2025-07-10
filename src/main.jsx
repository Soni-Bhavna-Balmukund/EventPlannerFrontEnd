// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router'
import store from './store/store.jsx'
import {Provider} from 'react-redux'
import ToastProvider from './store/Provider/toastProvider.jsx'
import AuthProvider from './store/Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Provider store={store}>
    <AuthProvider>
    <ToastProvider>
    <App />
    </ToastProvider>
    </AuthProvider>
    </Provider>
    </BrowserRouter>
  
)
