import{BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer';

import ContactoPage from './pages/contactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">
    <Header/>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="nosotros" exact element={<NosotrosPage/>} />
      <Route path="novedades" exact element={<NovedadesPage/>} />
      <Route path="contacto" exact element={<ContactoPage/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
 
    </div>   
   
  );
}

export default App;
