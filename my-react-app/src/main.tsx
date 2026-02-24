import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createTheme, ThemeProvider} from "@mui/material";
const theme = createTheme({
    typography: {
        h3: { fontSize: '4rem', '@media (max-width:600px)': { fontSize: '1.5rem' } },
        h4: { fontSize: '3rem', '@media (max-width:600px)': { fontSize: '1.25rem' } },
        h5: { fontSize: '2rem', '@media (max-width:600px)': { fontSize: '1rem' } },
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
  </StrictMode>,
)
