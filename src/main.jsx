import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contenido from './Contenido'
import Input from './Input'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenido/>
      <Input/>                                      
  </StrictMode>,
)
