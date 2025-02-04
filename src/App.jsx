import './App.css'
import {Route , Routes} from "react-router-dom";
import { Box } from '@mui/material';
import { ExercisePage } from './pages/ExercisePage';
import { Home } from '@mui/icons-material';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';

function App() {


  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
       <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exercise/:id' element={<ExercisePage />} />
      </Routes>
       <Footer />
    </Box>
  )
}

export default App
