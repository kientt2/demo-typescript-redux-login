import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageDashboard from './pages/Dashboard';
import PageLogin from './pages/PageLogin';
import PagePokemons from './pages/PagePokemons';

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageDashboard />} />
            <Route path="login" element={<PageLogin />} />
            <Route path="dashboard" element={<PageDashboard />} />
            <Route path="pokemons" element={<PagePokemons />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
