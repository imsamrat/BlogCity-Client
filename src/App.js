import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
