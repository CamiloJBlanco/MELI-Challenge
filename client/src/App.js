import './assets/css/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Items from './components/Items'
import ItemProduct from './components/ItemProduct'
import './assets/css/Grid.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/items">
            <Items />
          </Route>
          <Route exact path="/items/:id">
            <ItemProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
