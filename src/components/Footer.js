import "./Footer.css";

function Footer() {
  return (
    <nav id="footer" className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">
            <span className="icon is-small">
              <i className="fas fa-home" aria-hidden="true"></i>
            </span>
            <span>Bulma</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon is-small">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            <span>Documentation</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon is-small">
              <i className="fas fa-puzzle-piece" aria-hidden="true"></i>
            </span>
            <span>Components</span>
          </a>
        </li>
        <li className="is-active">
          <a href="#">
            <span className="icon is-small">
              <i className="fas fa-thumbs-up" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
