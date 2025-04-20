import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import './index.css'

const root = document.getElementById('root')!

createRoot(root).render(<App />)
