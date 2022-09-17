import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Categories from './pages/Categories';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="app__container"> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
