import{BrowserRouter as Router,Roustes,Route } from "react-router-dom";
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer';
import contactoPage from './pages/contactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
   <Router>
    <Header></Header>
    <Nav/>
    <Roustes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/nosotros" exact element={<NosotrosPage/>} />
      <Route path="/novedades" exact element={<NovedadesPage/>} />
      <Route path="/contacto" exact element={<contactoPage/>} />
    </Roustes>
    <Footer/>
   </Router>
      
   
  );
}

export default App;
