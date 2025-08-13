import React from "react";
import "./layout.css";

function App() {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header-title">C-Script Library Docs</div>
        <div className="header-tagline">
          <em>TypeScript Ergonomics. C++ Power.</em>
        </div>
      </header>

      <div className="main-container">
        <aside className="left-sidebar">
          <div className="sidebar-item">
            <div className="sidebar-title">The API</div>
            <div className="sidebar-desc">
              Doxygen pages containing descriptions and function definitions for
              each method in each class.
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">Usage Guides</div>
            <div className="sidebar-desc">
              Guides to help users understand the intention behind different
              aspects of the library.
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">Testing Measures</div>
            <div className="sidebar-desc">
              Details about the tests conducted on various components.
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">Notes on Planned Features</div>
            <div className="sidebar-desc">
              Commentary on planned features waiting in the backlog.
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">About the Developer</div>
            <div className="sidebar-desc">
              Contact information & a brief background on the developer.
            </div>
          </div>
        </aside>

        <main className="main-content">
          <p>
            <span className="section-title">
              <strong>C-Script takes a DX-first approach to C++.</strong>
            </span>
          </p>
          <div className="text-wrapper">
            <p>
              The C-Script library is a set of tools designed to enhance the
              developer experience (DX) for C++ programmers. C++. Inspired by
              the excellent experience associated with TypeScript development,
              C-Script offers sleek, intuitive APIs for several essential ADTs
              in C++.
            </p>
            <p>
              The C-Script philosophy is simple:{" "}
              <span className="key-point">
                <em>
                  <strong>Usability is utility.</strong>
                </em>
              </span>
            </p>

            <p>
              Putting this belief into practice, C-Script design decisions
              consistently prioritize DX and ergonomics. The library is also
              very compact for portability and ease-of-use. It features a
              header-only suite of generic ADTs, as well as a featherlight
              String class.
            </p>

            <p>Altogether, C-Script offers:</p>
            <ul>
              <li>No-Hassle integration</li>
              <li>Class interfaces built for developer comfort</li>
              <li>A developer-first perspective on C++ programming</li>
              <li>
                Pleasant syntactic sugar to skip the notorious C++ verbosity.
              </li>
              <li>Detailed guides and documentation to support users.</li>
            </ul>
          </div>
        </main>
      </div>
      <footer className="site-footer">
        <div className="footer-links">
          <a href="https://github.com/BellJrDev/C-Script">C-Script Repo</a> |
          <a href="https://github.com/BellJrDev">GitHub Page</a> |
          <a href="https://linkedin.com/in/belljrdev">LinkedIn</a>
        </div>
        <div className="footer-info">
          &copy; 2025 Dorian Bell Jr. &middot; Built with React & Docusaurus
        </div>
      </footer>
    </div>
  );
}

export default App;
