import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import CategoryExplorer from './CategoryExplorer';
import FeaturedItems from './FeaturedItems';
import RecentlyAdded from './RecentlyAdded';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

function HomePage() {
  const [detailMessage, setDetailMessage] = useState(null);

  const handleViewDetails = (itemId) => {
    // Placeholder for Jama's item detail page – in Sprint 1 we show a message
    setDetailMessage(
      `Item #${itemId} detail page (owned by teammate Jama) would open here. In the full app this links to /item/${itemId}.`
    );
    setTimeout(() => setDetailMessage(null), 4000);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CategoryExplorer onViewDetails={handleViewDetails} />
        <FeaturedItems onViewDetails={handleViewDetails} />
        <RecentlyAdded onViewDetails={handleViewDetails} />
        <HowItWorks />

        {/* Donate placeholder linking to Daria's form */}
        <section className="donate-cta" id="donate" aria-labelledby="donate-heading">
          <div className="donate-cta__inner">
            <h2 id="donate-heading">Have furniture to give?</h2>
            <p>
              List your unwanted household items so someone moving into independent
              housing can put them to good use.
            </p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() =>
                alert(
                  'Donation form (owned by teammate Daria) would open here. Route: /donate'
                )
              }
            >
              Donate an item
            </button>
          </div>
        </section>
      </main>
      <Footer />

      {detailMessage && (
        <div className="toast" role="status" aria-live="polite">
          {detailMessage}
        </div>
      )}
    </div>
  );
}

export default HomePage;
