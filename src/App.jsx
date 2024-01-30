import React from "react";
import './App.css';
import Card from "./components/Card/Card";
import Grid from "./components/Grid/Grid";
function App(){
  return (
    <>
  {/* <Card player="O"/> */}
  <Grid numberOfCards={9}/>
    </>
  )
}
export default App;