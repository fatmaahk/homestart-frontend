function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo__text">HomeStart</span>
          <p>Helping people establish a stable home with affordable household essentials.</p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#browse">Browse items</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>About</h3>
          <ul>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#about">Our mission</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 HomeStart · Supporting UN SDG 1 – No Poverty</p>
      </div>
    </footer>
  );
}

export default Footer;
