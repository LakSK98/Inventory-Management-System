import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductsMasterPage from './pages/ProductsMasterPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TransactionsPage from './pages/TransactionsPage';
import AvailableStockPage from './pages/AvailableStockPage';
import AccountPage from './pages/AccountPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsMasterPage/>} />
        <Route path='/stocks' element={<AvailableStockPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/transactions' element={<TransactionsPage/>}/>
        <Route path='/account' element={<AccountPage/>} />
        <Route path='/settings' element={<SettingsPage/>} />
        <Route path='/help' element={<HelpPage/>} />
      </Routes>
    </div>
  );
}

export default App;
