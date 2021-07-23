import './App.css';
import InicioPage from "./Pages/InicioPage"
import DetallePage from "./Pages/DetallePage";
import { BrowserRouter, Route } from "react-router-dom";
import ABMPage from './Pages/ABMPage';
import { Container } from "react-bootstrap"
import GlobalState from './Context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistroPage from "./Pages/RegistroPage"
import LoginPage from './Pages/LoginPage';
import NavBar from './Components/NavBar';
import Bienvenida from './Pages/Bienvenida';















function App() {

  return (
    <GlobalState>
      <BrowserRouter>
     
        <NavBar />
       
        <Container>
        < Route path="/" exact component={Bienvenida} />
          <Route path="/inicio" exact component={InicioPage} />
          <Route path="/alta" exact component={RegistroPage} />
          <Route path="/ingresar" exact component={LoginPage} />
          <Route path="/producto/:id" exact component={DetallePage} />
          <Route path="/catalogo" exact component={ABMPage} />
        </Container>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;


