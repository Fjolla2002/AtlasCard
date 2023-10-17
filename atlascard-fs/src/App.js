import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiningPage from './pages/DiningPage';
import TravelPage from './pages/TravelPage';
import CardPage from './pages/CardPage';
import AppPage from './pages/AppPage';
import ConciergePage from './pages/ConciergePage';
import BenefitsPage from './pages/BenefitsPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import UsersPage from './pages/UsersPage';
import SingleUserPage from './pages/SinlgeUserPage';
import GoToTop from './components/GoToTop/GoToTop';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <GoToTop/>
    <Navbar />
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dining' element={<DiningPage/>}/>
          <Route path='/travel' element={<TravelPage/>}/>
          <Route path='/card' element={<CardPage/>}/>
          <Route path='/app' element={<AppPage/>}/>
          <Route path='/concierge' element={<ConciergePage/>}/>
          <Route path='/benefits' element={<BenefitsPage/>}/>
          <Route path='/profile' element={<UsersPage/>}/>
          <Route path='/profile/:id' element={<SingleUserPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
