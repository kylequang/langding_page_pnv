import React from "react";
import { Container } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './pages/Home/Index_HomePage';
import Index_Donation from "./pages/Donation/Index_Donation";
import Index_ItNuoiIt from './pages/ItNuoiIt/Index_ItNuoiIt';
import Index_About from './pages/About/Index_About';
import Index_Blog from "./pages/Blog/Index_Blog";
import Index_Contact from "./pages/Contact/Index_Contact";
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header></Header>
      <Container fluid className="App">
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/donate' component={Index_Donation} />
          <Route path='/itnuoiit' component={Index_ItNuoiIt} />
          <Route path='/about' component={Index_About} />
          <Route path='/blog' component={Index_Blog} />
          <Route path="/contact" exact component={Index_Contact} />
        </Switch>
      </Container>
      <Footer></Footer>
    </Router>
  );
}
export default App;

