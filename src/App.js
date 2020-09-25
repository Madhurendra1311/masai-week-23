import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <>
        <Navigation />
        <Footer />
      </>
    )
  }
}

export default App;
