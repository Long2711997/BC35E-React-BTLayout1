import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
          <a class="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse my-2 my-lg-0"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          </div>
        </div>
      </nav>
    );
  }
}
