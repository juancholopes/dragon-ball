import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stack from '@mui/material/Stack';

import TiltedCard from './components/TiltedCard.jsx'

const App = () => {

  return (
    <Stack className="App">
      <Stack
      style={containerStyle}
      >
      <h1 style={styleTitle}>Dragon Ball Z</h1>
      </Stack>
      <Stack
      style={styleText}
      >
        <TiltedCard /> 
      </Stack>
    </Stack>
  )
}

const containerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1E1E1E'
}

const styleTitle = {
  color: 'Orange',
  backgroundColor: '#1E1E1E',
  fontSize: '70px',
  textAlign: 'center',
  fontFamily: 'Sayan Sans',
}

const styleText = {
  width: '400px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1E1E1E'
}

export default App