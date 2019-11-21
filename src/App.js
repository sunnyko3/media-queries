import React from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);




function App() {
  return (
    <body>
    <div id="top-half">
      <header>
        <logo>Start Bootstrap</logo>
        <nav>
          <a>Services</a>Portfolio<a>About</a><a>Team</a>Contact<a></a><a></a>
        </nav>
      </header>
      <div id="intro">
          <h2>Welcome To Our Studio!</h2>
          <h1>IT'S NICE TO MEET YOU</h1>
          <div><p id="p">Tell Me More</p></div>
      </div>
    </div>
  </body>
  );
}

export default App;
