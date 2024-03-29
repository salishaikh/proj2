import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News App
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="/business">
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/general">
                    general
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health">
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">
                    technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
