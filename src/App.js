
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';

function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" >
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
