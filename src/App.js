import React from 'react';
import Header from './Header'
import TodoList from './Todolist'
import Footer from './Footer'
import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/> 
        <TodoList/>
        <Footer name="Panupong Kaewkudlor" />
      </div>
    )
  }
}


export default App;
