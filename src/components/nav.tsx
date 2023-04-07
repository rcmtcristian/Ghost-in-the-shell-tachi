import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function nav(): JSX.Element {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <a className="link-styled" href="#">
              Buy
            </a>
          </li>
          <li>
            <a className="link-styled" href="#">
              History
            </a>
          </li>
          <li>
            <a className="link-styled" href="#"></a>
          </li>
          <li>
            <a className="link-styled" href="#">
              Ethos
            </a>
          </li>
          <li>
            <a className="link-styled" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="link-styled" href="#">
              About
            </a>
          </li>
          <li>
            <a className="link-styled" href="#">
              AI
            </a>
          </li>
          <li>
            <img src={Search} alt="search" />
          </li>
          <li>
            <img src={Store} alt="store" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default nav;
