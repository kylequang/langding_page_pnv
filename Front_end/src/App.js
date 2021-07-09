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
import Contact from './components/Form/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Container fluid>
          <Header></Header>
          <Container fluid>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path="/contact" component={Contact}></Route>
              <Route path='/donate' component={Index_Donation} />
              <Route path='/itnuoiit' component={Index_ItNuoiIt} />
              <Route path='/about' component={Index_About} />
              <Route path='/blog' component={Index_Blog} />
              <Route path="/contact" exact component={Index_Contact} />
            </Switch>
          </Container>
          <Footer></Footer>
        </Container>
      </Router>
    </React.Fragment>
  );
}
export default App;

