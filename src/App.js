import './App.css';
import RegisterUser from './RegisterUser/RegisterUser';
import Login from './Login.js/Login';
import Home from './Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={RegisterUser} />
          <Route exact path="/Login" component={Login} />



        </Switch>
      </BrowserRouter>

    </>

  );
}

export default App;
