import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { store } from './redux/store'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
 
<Provider store={store}>
    <MantineProvider>
    
    <App />
   
    </MantineProvider> 
</Provider>
    
 
)
