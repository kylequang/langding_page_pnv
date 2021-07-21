import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './pages/Home/Index_HomePage';
import Index_ItNuoiIt from './pages/ItNuoiIt/Index_ItNuoiIt';
import Index_Contact from "./pages/Contact/Index_Contact";
import Index_Donation from "./pages/Donate/Index_Donation";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/donate' component={Index_Donation} />
          <Route path='/itnuoiit' component={Index_ItNuoiIt} />
          <Route path="/contact" exact component={Index_Contact} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}
export default App;

