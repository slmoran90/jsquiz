import { createRoot } from 'react-dom/client'
import '@fontsource-variable/roboto'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')!

createRoot(root).render(<App />)
