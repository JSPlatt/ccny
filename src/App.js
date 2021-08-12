import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  </Router>
  );
}

export default App;
