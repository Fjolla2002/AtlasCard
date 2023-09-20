import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiningPage from './pages/DiningPage';
import TravelPage from './pages/TravelPage';
import CardPage from './pages/CardPage';
import AppPage from './pages/AppPage';
import ConciergePage from './pages/ConciergePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dining' element={<DiningPage/>}/>
          <Route path='/travel' element={<TravelPage/>}/>
          <Route path='/card' element={<CardPage/>}/>
          <Route path='/app' element={<AppPage/>}/>
          <Route path='/concierge' element={<ConciergePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
