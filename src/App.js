import logo from './logo.svg';
import './App.css';
import { Component } from "react";



class Test extends Component {
  render() {
    return (
      <div className="App">
        Hello React!
        <button>+</button>
      </div>
    );
  }
}



function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

export default App;
