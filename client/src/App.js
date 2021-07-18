import './App.css';
import {useState} from "react";
import CreatePoll from "./CreatePoll";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./nav";
import Result from "../src/result";
import React, { Component, Fragment } from 'react';
import Link from "./link";
function App() {
  const [link, setLink]= useState("");
  
  function linkData(data)
  {
     setLink(data);
     console.log(data);
  }
  return (
    <>
    <Router>
        <Fragment>
            <Nav/>
            <Switch>
              <Route exact path='/' ><CreatePoll  linkData={linkData}/></Route>
              <Route exact path='/link'> <Link value={link}/></Route>
              <Route exact path="/result/:id" component={Result}></Route>
            </Switch>
        </Fragment>
    </Router>
    </>
  );
}

export default App;
