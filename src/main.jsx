import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

import './assets/css/style.css'
import './assets/css/fontawesome.all.min.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
