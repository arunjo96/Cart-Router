import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter }from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '@fontsource/poppins'; 
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
