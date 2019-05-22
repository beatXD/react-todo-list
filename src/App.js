import React from 'react';
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import './App.css';

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
