import './App.css'
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {original,action,horror} from'./url'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <RowPost  url={original} tittle="Netflix originals"></RowPost>
      <RowPost  url={action} issmall tittle="Action"></RowPost>
      <RowPost  url={horror} issmall tittle="Horror"></RowPost>
      </div>
  );
}


export default App;
