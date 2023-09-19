import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiningPage from './pages/DiningPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dining' element={<DiningPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
