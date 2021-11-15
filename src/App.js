import './App.css'
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom"
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  }

export default App;
