import './App.css';
import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import BooksContainer from './Components/BookContainer'




const App = () => {



return (
  <Router>
    <Route path="/" exact component={BooksContainer}/>
    <Route path="/books"  component={BooksContainer}/>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">Library App</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/g-grandis">Github</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/gianpaolo-grandis-744a46182/">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </Router>
)
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
