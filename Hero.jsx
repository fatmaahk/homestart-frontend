function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__content">
        <p className="hero__eyebrow">Supporting people leaving temporary accommodation</p>
        <h1 id="hero-heading">
          Affordable household essentials for a stable home
        </h1>
        <p className="hero__lead">
          HomeStart connects people who need basic furniture and appliances with
          donors who have items ready for a new start. Browse, request, and collect —
          free of charge.
        </p>
        <div className="hero__actions">
          <a href="#browse" className="btn btn--primary">
            Browse furniture
          </a>
          <a href="#donate" className="btn btn--secondary">
            Donate an item
          </a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__card hero__card--1">Sofa</div>
        <div className="hero__card hero__card--2">Bed</div>
        <div className="hero__card hero__card--3">Table</div>
      </div>
    </section>
  );
}

export default Hero;
