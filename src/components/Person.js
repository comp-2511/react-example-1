import { useEffect, useState } from "react";
import "./Person.css";

function Person({ name }) {
  return (
    <div className="App">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong className="profile-name">
                  {name.replace("_", " ")}
                </strong>{" "}
                <small>@{name}</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" href={`https://facebook.com/${name}`}>
                  <span className="icon is-small">
                    <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" href={`https://linkedin.com/${name}`}>
                  <span className="icon is-small">
                    <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Person;
