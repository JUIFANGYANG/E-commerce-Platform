import React from 'react'
import ReactDOM from 'react-dom/client' //按照vite建立專案所預期的寫法
import './index.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
      <App />
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
