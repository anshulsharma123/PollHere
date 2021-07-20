import '../src/cssFile/App.css';
import {useState} from "react";
import CreatePoll from "./CreatePoll";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "../src/component/nav";
import Result from "../src/result";
import React, { Component, Fragment } from 'react';
import Link from "./link";
import VotePage from '../src/votepage';
import { ToastProvider } from 'react-toast-notifications';
function App() {
  const [link, setLink]= useState("");
  const [resultLink,setResultLink]=useState("");
  function linkData(data)
  {
     setLink(data);
    //  console.log(data);
  }
  function resultLinkData(data)
  {
     setResultLink(data); 
  }
  return (
    <>
     <ToastProvider>
    <Router>
        <Fragment>
            <Nav/>
            <Switch>
              <Route exact path='/' ><CreatePoll  linkData={linkData}/></Route>
              <Route exact path='/link'> <Link value={link}/></Route>
              <Route exact path="/result/:id"><Result value={resultLink}/></Route>
              <Route exact path="/vote/:id"><VotePage linkData={resultLinkData}/></Route>
            </Switch>
        </Fragment>
    </Router>
    </ToastProvider>
    </>
  );
}

export default App;
