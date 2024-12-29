import logo from './logo.svg';
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Mapa from './components/pages/Mapa'
import Cadastro from './components/pages/Cadastro'
import Login from './components/pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className=''>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/mapa" element={<Mapa/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
