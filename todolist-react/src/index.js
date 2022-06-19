import App from './App'
import 'semantic-ui-css/semantic.min.css'
import {createRoot} from 'react-dom/client'


const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(
  <App />
)