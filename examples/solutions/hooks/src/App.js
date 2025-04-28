import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import { UseReducerDemo } from './useReducer/UseReducerDemo';
import { UseContextDemo } from './useContext/UseContextDemo';

function App() {
  return (
    <BrowserRouter>
      <div className="mainMenu">
        <ul>
          <li><Link to="/useContext">UseContext</Link></li>
          <li><Link to="/useReducer">UseReducer</Link></li>
        </ul>
      </div>
      <div>
        <Route path="/useContext"><UseContextDemo /></Route>
        <Route path="/useReducer"><UseReducerDemo /></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
