import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import GeneralContextProvider from './contexts/GeneralContext.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeneralContextProvider>
      <App/>
    </GeneralContextProvider>
   </React.StrictMode>,
)
