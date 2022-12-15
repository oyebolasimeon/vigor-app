// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// #C41D1D
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Banner from './Pages/Banner';
import Subscribe from './Pages/Subscribe';
import Resources from './Pages/Resources';

function App() {
  return (
    <div className="App">
    <Header />
    {/* <Router>
      <Switch>
        <Route exact path="/" component="Banner" />
        
      </Switch>
    </Router> */}
    <Banner />
  
      <About />
    <Resources />
    <Subscribe />
    <Footer />
    </div>
  );
}

export default App;
