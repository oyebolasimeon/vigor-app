// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// #C41D1D
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Banner from './Pages/Banner';

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
    

    {/* <Footer /> */}
    </div>
  );
}

export default App;
