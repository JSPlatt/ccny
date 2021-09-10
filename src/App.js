import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TaskManagement from './components/Header/Task Management/TaskManagement';
import Notes from './components/Header/Notes/Notes';
import VendorTracker from './components/Header/Vendor Tracker/VendorTracker'
import DocumentCenter from './components/Header/Document Center/DocumentCenter';

function App() {
  return (
    <Router>
    <Header/>
    <div className="App">
      <Dashboard/>
    <Switch>
      <Route path="/" component={Dashboard}/>
      <Route path="/tasks" component={TaskManagement}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/vendortracker" component={VendorTracker}/>
      <Route path="/documentcenter" component={DocumentCenter}/>
    </Switch>
    </div>
  </Router>

  );
}

export default App;

{/* <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/" component={StoresContainer}/>
      <Route exact path="/stores/:slug" component={Store}/>
    </Switch> */}