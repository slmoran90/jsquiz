import { createRoot } from 'react-dom/client'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')!

createRoot(root).render(<App />)
