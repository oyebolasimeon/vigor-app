import './App.css';
// import { BrowserRouter as Router, Rout, Switch } from 'react-router-dom';
// #C41D1D
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
    <Header />
    <main class="main">
      <About />
    </main>

    <Footer />
    </div>
  );
}

export default App;
