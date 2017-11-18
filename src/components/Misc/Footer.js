import React from "react";

const Footer = props => (
  <footer className="page-footer green accent-3">
    <div className="container">
      <div className="row">
        <div className="col l8 s12">
          <h5 className="white-text">About us</h5>
          <p className="white-text darken-1">
            Chingu is a non profit organization whose goal is to provide
            developers from all around the globe the opportunity to build real
            projects, in a creative and estimulating environment.
          </p>
        </div>

        <div className="col l4 s12">
          <h5 className="white-text">Find us</h5>
          <ul>
            <li>
              <a className="white-text" href="#!">
                Twitter
              </a>
            </li>
            <li>
              <a className="white-text" href="#!">
                Patreon
              </a>
            </li>
            <li>
              <a className="white-text" href="#!">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright">
      <div className="container">
        Made by the {""}
        <a className="white-text" href="https://github.com/chingu-x">
          Chingu X Team.
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
