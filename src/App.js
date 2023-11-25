import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Secondomer from './Components/Secondomer/secondomer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Secondomer second={60} minute={19} hour={1}/>
      </div>
    );
  }
  
}

export default App;
