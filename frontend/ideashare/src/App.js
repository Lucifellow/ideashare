import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar'
import LoggedIn from "./components/LoggedIn"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className ="container container-fluid">  
          <Route path="/" component={Home}/>  
        </div>
        <div className ="container container-fluid">
          <Route path="/LoggedIn" component={LoggedIn} />
        </div>
      </Router>
    </div>
  );
}

export default App;
