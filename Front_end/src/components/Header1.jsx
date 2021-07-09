import React, { Component } from "react";

class Header1 extends Component {
  render() {
    return (
      <header className="main_header_area mh_2">
        <div className="searchForm">
          <form action="#" className="row">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="flaticon-search" />
              </span>
              <input
                type="search"
                name="search"
                className="form-control"
                placeholder="Type & Hit Enter"
              />
              <span className="input-group-addon form_hide">
                <i className="flaticon-close" />
              </span>
            </div>
          </form>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="navbar-brand">
              <a className="logo" href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            {/* Small Divice Menu*/}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar_supported"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
            {/* Right Nav bar */}
            <ul className="right_nav">
              <li>
                <a href="#" className="nav_searchFrom">
                  <i className="fa fa-search" />
                </a>
              </li>
            </ul>
            {/* Left Nav bar */}
            <div className="collapse navbar-collapse navbar_supported">
              <ul className="navbar-nav">
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href
                    role="button"
                    data-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html">Home Version 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Version 2</a>
                    </li>
                    <li>
                      <a href="index-3.html" className="active">
                        Home Version 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href
                    role="button"
                    data-toggle="dropdown"
                  >
                    Events
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="events.html">Events</a>
                    </li>
                    <li>
                      <a href="events-single.html">Events Single</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href
                    role="button"
                    data-toggle="dropdown"
                  >
                    Causes
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="causes.html">Causes</a>
                    </li>
                    <li>
                      <a href="causes-2.html">Causes v2</a>
                    </li>
                    <li>
                      <a href="causes-3.html">Causes v3</a>
                    </li>
                    <li>
                      <a href="causes-single.html">Causes Single</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href
                    role="button"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href
                    role="button"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header1;
