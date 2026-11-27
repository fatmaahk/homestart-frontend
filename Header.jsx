function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="logo" aria-label="HomeStart home">
          <span className="logo__icon" aria-hidden="true">⌂</span>
          <span className="logo__text">HomeStart</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li><a href="#browse">Browse</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#recent">Recent</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li>
              <a href="#donate" className="nav-cta">
                Donate an item
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
