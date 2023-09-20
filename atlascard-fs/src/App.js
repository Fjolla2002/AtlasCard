import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiningPage from './pages/DiningPage';
import TravelPage from './pages/TravelPage';
import CardPage from './pages/CardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dining' element={<DiningPage/>}/>
          <Route path='/travel' element={<TravelPage/>}/>
          <Route path='/card' element={<CardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
