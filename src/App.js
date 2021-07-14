import './App.css';
import { Router } from '@reach/router';
import First from './views/First';
import Second from './views/Second';
import Third from './views/Third';
import Navbar from './components/Navbar';
import Param from './components/Param';
import ParamTwo from './components/ParamTwo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <First path="/"/>
        <Second path="/moves"/>
        <Third path="/abilities"/>
        <Param path="/:id"/>
        <ParamTwo path="/num/:num"/>
      </Router>
    </div>
  );
}

export default App;
